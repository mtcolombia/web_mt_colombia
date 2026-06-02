const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'Noticias positivas.md');
const jsonPath = path.join(__dirname, '..', 'public', 'data', 'blog.json');

const mdContent = fs.readFileSync(mdPath, 'utf8');
const lines = mdContent.split(/\r?\n/);

const parsedArticles = [];

// Keep the other articles (scientific + activities)
const originalJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const otherArticles = originalJson.filter(a => a.category !== 'noticias-positivas');

// Regex to capture: Bullet character, spaces, Source (words/spaces/numbers), Month.Day (MM.DD), space, the news content
const newsRegex = /^\s*(?:•|o|▪|-|\*)\s+([a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+)\s+(\d{2})\.(\d{2})\s+(.+)$/;

let count = 1;

for (const line of lines) {
  const match = line.match(newsRegex);
  if (match) {
    const source = match[1].trim();
    const month = match[2];
    const day = match[3];
    const text = match[4].trim();

    // Skip indicators headers if they match accidentally
    if (source.toLowerCase().includes('indicador') || source.toLowerCase().includes('exportacion') || source.toLowerCase().includes('agro')) {
      continue;
    }

    // Let's create an elegant, concise title
    // Take first 6 words of the text
    let titleWords = text.split(/\s+/).slice(0, 6);
    let title = titleWords.join(' ');
    // Remove trailing punctuation from title if any
    title = title.replace(/[.,;:!\-—]$/, '').trim();
    if (title.length < text.length) {
      title += '...';
    }

    // Let's create a unique slug
    const slugTitle = text.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/[^a-z0-9\s-]/g, '') // remove special chars
      .trim()
      .replace(/\s+/g, '-') // spaces to hyphens
      .split('-').slice(0, 6).join('-'); // take first 6 words
    
    const slug = `noticia-${month}-${day}-${slugTitle}-${count}`;
    count++;

    parsedArticles.push({
      slug: slug,
      title: title,
      excerpt: text,
      category: "noticias-positivas",
      coverImage: "/images/hero-blog.jpeg",
      publishedAt: `2026-${month}-${day}`,
      readingTime: 1,
      source: source
    });
  }
}

console.log(`Parsed ${parsedArticles.length} positive news articles!`);

const finalArticles = [...otherArticles, ...parsedArticles];

fs.writeFileSync(jsonPath, JSON.stringify(finalArticles, null, 2), 'utf8');
console.log('Saved to public/data/blog.json successfully!');
