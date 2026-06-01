/**
 * GitHub API como backend CMS.
 * Flujo: Server Action → writeJSON → commit en repo → Vercel rebuild (~45s) → live.
 */

const GITHUB_API = 'https://api.github.com'
const OWNER  = process.env.GITHUB_OWNER!
const REPO   = process.env.GITHUB_REPO!
const TOKEN  = process.env.GITHUB_TOKEN!
const BRANCH = process.env.GITHUB_BRANCH ?? 'main'

function headers() {
  return {
    Authorization: `Bearer ${TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
}

async function getFile(path: string): Promise<{ content: string; sha: string }> {
  const res = await fetch(
    `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`,
    { headers: headers(), cache: 'no-store' },
  )
  if (!res.ok) throw new Error(`GitHub GET ${path}: ${res.status}`)
  const data = await res.json()
  const content = Buffer.from(data.content as string, 'base64').toString('utf-8')
  return { content, sha: data.sha as string }
}

async function putFile(
  path: string,
  content: string,
  sha: string | null,
  message: string,
): Promise<void> {
  const body: Record<string, unknown> = {
    message,
    content: Buffer.from(content, 'utf-8').toString('base64'),
    branch: BRANCH,
  }
  if (sha) body.sha = sha

  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}`, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`GitHub PUT ${path}: ${res.status} — ${err}`)
  }
}

export async function readJSON<T>(path: string): Promise<T> {
  const { content } = await getFile(path)
  return JSON.parse(content) as T
}

export async function writeJSON<T>(path: string, data: T, message: string): Promise<void> {
  let sha: string | null = null
  try {
    const existing = await getFile(path)
    sha = existing.sha
  } catch {
    // archivo nuevo — sin sha
  }
  await putFile(path, JSON.stringify(data, null, 2), sha, message)
}
