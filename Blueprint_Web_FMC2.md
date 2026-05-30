# BLUEPRINT ARQUITECTÓNICO — SITIO WEB
## Fundación Maharishi de Colombia (FMC) — Meditación Trascendental Colombia

> Documento técnico de diseño y arquitectura de información. Traduce la "Estructura página Web FMC"
> (con sus anotaciones de revisión humana ya filtradas y resueltas) y el "Manual de Marca MT Colombia"
> en un plano constructivo por enlace, sección, subsección, botón, icono, diagramación y estilo.
>
> **Versión:** 1.0 · **Uso:** entregable para diseño UI/UX y desarrollo front-end.

---

# 0. SISTEMA DE DISEÑO GLOBAL (DESIGN SYSTEM)

Estas reglas aplican a TODAS las páginas. Cualquier sección que no especifique algo, hereda de aquí.

## 0.1 Paleta de color

| Token | Nombre | HEX | Uso |
|-------|--------|-----|-----|
| `--azul-profundo` | Azul profundo | `#0F2A44` | Texto sobre fondos claros, footer, overlays, títulos |
| `--azul-claro` | Azul claro | `#6FA8DC` | Acentos, hover, líneas finas, fondos suaves de tarjeta |
| `--dorado` | Dorado | `#C9A85D` | CTAs primarios, iconos clave, subrayados, detalles de jerarquía |
| `--blanco` | Blanco | `#FFFFFF` | Fondo base, texto sobre fondos oscuros |
| `--beige` | Beige claro | `#F5F1E8` | Fondo alternado de secciones, equilibrio visual |

**Reglas de color (del manual):**
- Prohibido el negro puro. El texto "oscuro" siempre es `--azul-profundo`.
- Nada de colores saturados. Prohibidos rojos, verdes neón, naranjas vibrantes.
- Alternancia de fondos recomendada: `blanco → beige → blanco → beige`. Nunca dos secciones oscuras seguidas.
- Bloques de texto destacado: fondo blanco con texto azul; o fondo azul profundo con texto blanco.

## 0.2 Tipografía

| Familia | Rol | Aplicación |
|---------|-----|------------|
| **Playfair Display** | Display / títulos elegantes | H1, H2, frases inspiracionales, citas |
| **Poppins** | Principal / interfaz | H3, H4, botones, menú, labels, datos, microcopy |
| **Lora** | Lectura fluida | Párrafos largos de cuerpo, artículos de blog |

**Escala tipográfica sugerida (desktop / móvil):**

| Nivel | Familia | Tamaño desktop | Tamaño móvil | Peso |
|-------|---------|----------------|--------------|------|
| H1 / Hero | Playfair Display | 56–64 px | 32–36 px | 600 |
| H2 sección | Playfair Display | 38–44 px | 26–30 px | 600 |
| H3 subsección | Poppins | 24–28 px | 20–22 px | 600 |
| H4 tarjeta | Poppins | 18–20 px | 16–18 px | 500 |
| Cuerpo | Lora | 17–18 px | 16 px | 400 |
| Botón / menú | Poppins | 15–16 px | 15 px | 500–600 |
| Caption / nota | Poppins | 13–14 px | 12–13 px | 400 |

- Interlineado de cuerpo: 1.6–1.7. Títulos: 1.15–1.25.
- Máximo 2 familias visibles por pantalla simultáneamente (evita "muchas tipografías").

## 0.3 Reglas editoriales obligatorias

- **"Meditación Trascendental"** siempre con ambas iniciales en mayúscula, en todo el sitio. Misma regla para la sigla **"MT"**.
- Lenguaje claro, profesional, accesible. Sin lenguaje esotérico.
- Sin promesas exageradas ni superlativos vacíos; énfasis en beneficios reales y comprobables.
- Cada bloque de contenido prioriza: qué es, qué hace, cómo te hace sentir.

## 0.4 Layout y espaciado

- Ancho de contenido (container): 1200–1280 px centrado; márgenes laterales fluidos en móvil (20–24 px).
- Grilla base: 12 columnas, gutter 24 px.
- Espaciado vertical entre secciones: 96–120 px desktop / 56–72 px móvil ("espacios en blanco amplios").
- Ritmo visual lento: una idea principal por bloque, sin saturar.
- Bordes redondeados suaves: 12–16 px en tarjetas, 8 px en botones, imágenes 12 px.
- Sombras sutiles: `0 8px 24px rgba(15,42,68,0.08)`. Nada de sombras duras.

## 0.5 Componentes globales reutilizables

### A. Barra de menú principal (Header)
- **Posición:** fija (sticky) al hacer scroll, con fondo blanco y sombra sutil al desplazarse.
- **Estructura:** logo a la izquierda · navegación centrada/derecha · botón CTA a la derecha.
- **Enlaces de navegación (8):** Inicio · Meditación Trascendental (MT) · Nosotros · Programas y Tecnologías · Proyectos · Actividades · Blog · Contacto.
- **Botón CTA en header:** "Aprende Meditación Trascendental" → ancla al formulario de inscripción.
- **Estados:** enlace activo subrayado en dorado; hover en azul claro.
- **Móvil:** menú hamburguesa → panel lateral deslizante con los 8 enlaces + CTA.
- **Iconos del header:** icono de menú (hamburguesa, solo móvil), opcional icono de idioma.

### B. Footer (pie de página global)
- Fondo azul profundo, texto blanco.
- **Columna 1:** logo FMC + frase corta de marca.
- **Columna 2 — Navegación:** los 8 enlaces del menú.
- **Columna 3 — Contacto:** WhatsApp Oficina Nacional 315 215 55 86 · WhatsApp Business 312 674 26 12 · email meditaciontrascendental1917@gmail.com.
- **Columna 4 — Redes y enlaces:** iconos Facebook, Instagram, YouTube + enlaces miu.edu y maharishiveda.com.
- **Barra inferior:** © Fundación Maharishi de Colombia + año + nota "Entidad oficial sin ánimo de lucro".
- **Iconos:** Facebook, Instagram, YouTube, WhatsApp, sobre (email).

### C. Botón primario (CTA)
- Fondo dorado, texto azul profundo, Poppins 600, padding 14×28 px, radio 8 px.
- Hover: oscurece dorado ~8% + leve elevación.

### D. Botón secundario
- Contorno azul profundo 1.5 px, texto azul profundo, fondo transparente.
- Hover: relleno azul claro al 15%.

### E. Tarjeta de beneficio / programa
- Fondo blanco o beige, radio 12–16 px, sombra sutil.
- Icono lineal arriba (dorado o azul) · título Poppins · descripción Lora · enlace opcional.

### F. Bloque imagen + texto (split 50/50)
- Imagen a un lado (50%), texto al otro (50%). Alterna lado imagen entre bloques consecutivos.
- Imagen real de alta resolución, luz natural, composición limpia, expresiones serenas.

### G. Reproductor de video embebido
- Contenedor 16:9 responsivo. **Sin franjas/espacio negro:** el video se ajusta exacto al contenedor.
- Miniatura con overlay de play dorado.

### H. Carrusel / pestaña movible
- Flechas laterales + puntos indicadores. Autoplay lento opcional (6–8 s). Swipe en móvil.

### I. Acordeón
- Fila clickeable con título + icono chevron; expande contenido. Una fila abierta a la vez.

## 0.6 Sistema de iconografía

- **Estilo:** lineal (outline), trazo 1.5–2 px, esquinas suaves. Nada relleno pesado, nada 3D.
- **Color:** dorado para iconos protagonistas, azul profundo para iconos de apoyo.
- **Inventario base recurrente:** cerebro, corazón, onda/pulso, hoja/planta, gota, sol, luna, escudo (protección), gráfico ascendente, personas/comunidad, balanza (equilibrio), reloj/20 min, ojos cerrados (meditación), libro (educación), WhatsApp, sobre, redes sociales, flecha, chevron, play.

## 0.7 Estilo visual transversal (del manual)

- Fotografía real, alta resolución, luz natural, expresiones serenas.
- Elementos gráficos sutiles: líneas finas, formas orgánicas suaves.
- Naturaleza de Colombia presente de forma sutil (no recargada).
- Sensación general: "la mente en reposo" — espacios amplios, ritmo lento, jerarquía clara, nada compite por atención.
- Cada pieza transmite: menos esfuerzo, más orden interno, claridad sin ruido, profundidad sin complicación.

---

# 1. MAPA DE NAVEGACIÓN (SITEMAP)

```
SITIO WEB FMC
│
├── 01 · INICIO  (/)
├── 02 · MEDITACIÓN TRASCENDENTAL (MT)  (/meditacion-trascendental)
├── 03 · NOSOTROS  (/nosotros)
├── 04 · PROGRAMAS Y TECNOLOGÍAS  (/programas-y-tecnologias)
│        └── (anclas internas: Gandharva Veda, Marmas, Luz y Gemas,
│             Yoga Maharishi, Pranayama, Aromaterapia, Diagnóstico de Pulso,
│             Jyotish y Yagya, Técnicas Avanzadas, Programa Sidhis MT)
├── 05 · PROYECTOS  (/proyectos)
│        └── (anclas: Educación Basada en la Conciencia, Expansión Digital,
│             Coherencia Social / Efecto Maharishi)
├── 06 · ACTIVIDADES  (/actividades)
├── 07 · BLOG  (/blog)
│        └── /blog/{articulo}  (plantilla de artículo individual)
└── 08 · CONTACTO  (/contacto)
```

**Componentes presentes en todas las páginas:** Header sticky + Footer.

---

# 2. RESOLUCIÓN DE ANOTACIONES HUMANAS

Para que el blueprint sea accionable, estas son las decisiones tomadas a partir de las
notas de revisión dispersas en el documento original:

| Anotación original | Decisión aplicada en el blueprint |
|--------------------|-----------------------------------|
| "Este parte quitarla, dejar bloque divisor en blanco" | Se elimina el bloque; se conserva un separador en blanco entre secciones. |
| "Esta franja con imágenes quitarla" | Franja de imágenes eliminada del Hero secundario de Inicio. |
| "Texto después de esa franja: fondo blanco, texto azul" | Aplicado como regla de estilo en esa sección. |
| "Verificar que 'Meditación Trascendental' lleve iniciales en mayúscula" | Convertido en regla editorial global (§0.3). |
| "Cambiar esta imagen / por esta imagen" | Marcado como **placeholder de imagen a reemplazar** con el activo definitivo del Drive. |
| "Poner imágenes de investigación científica, 5–7, pestaña movible" | Convertido en componente Carrusel (§0.5-H). |
| "Video de 6 min, si es muy largo cambiar a 4 min (Bob Roth)" | Se especifica video con opción A (6 min) / opción B (4 min); decisión editorial pendiente. |
| "Ajustar videos al tamaño, no dejar espacio negro" | Regla del componente Video (§0.5-G). |
| "Esta sesión debe estar en el botón del menú que corresponda" | Contenido reubicado a la página de menú correspondiente. |
| "Falta completar lista de profesores / solicitar fotos fondo claro" | Marcado como **contenido pendiente de entrega**. |
| "Barra de testimonios dejarlo" | Se conserva el componente de testimonios. |
| "Barra de información de profesores dejarlo" | Se conserva el componente de profesores. |
| "Dejar formulario de inscripción a charla informativa gratuita virtual" | Se conserva como componente clave de conversión. |
| Imágenes del banner: Bogotá, Valle del Cocora, Tayrona, Cartagena | Cada slide del Hero lleva su nombre de lugar como caption. |

> **Convención:** en este blueprint, todo `[PLACEHOLDER: ...]` indica un activo (imagen/video)
> que debe sustituirse por el archivo definitivo alojado en el Drive del cliente.

---

# 3. BLUEPRINT POR PÁGINA

---

## PÁGINA 01 · INICIO  `/`

**Objetivo:** en 3 segundos comunicar qué es la MT, qué hace y cómo te hace sentir.
**Fondo dominante:** alternancia blanco / beige.

### 1.1 — HERO (Banner principal)
- **Tipo:** carrusel a pantalla completa (alto 85–100 vh desktop, 70 vh móvil).
- **Slides (4):** fotografías de Colombia con caption del lugar:
  1. Bogotá · 2. Valle del Cocora · 3. Parque Tayrona · 4. Cartagena.
  - `[PLACEHOLDER: 4 fotos Colombia alta resolución, luz natural]`
- **Overlay:** degradado azul profundo de baja opacidad para legibilidad del texto.
- **Contenido sobre el overlay (centrado o alineado a la izquierda):**
  - H1 (Playfair Display): mensaje corto de impacto. Ej.: "Reduce el estrés. Accede a un estado profundo de descanso físico y mental."
  - Subtítulo (Poppins): una línea de apoyo.
  - **Botón primario:** "Aprende Meditación Trascendental" → formulario de inscripción.
- **Caption del slide:** nombre del lugar, esquina inferior, Poppins pequeño, blanco.
- **Controles:** puntos indicadores + flechas laterales discretas.
- **Icono:** chevron animado "scroll" en el borde inferior.

### 1.2 — INTRODUCCIÓN / PROPÓSITO
- **Diagramación:** bloque de texto centrado, ancho de lectura limitado (~720 px).
- **Texto base:** "Desarrolle el pleno potencial a través de una tecnología natural, sin esfuerzo y científicamente validada para reducir el estrés, optimizar el funcionamiento cerebral y mejorar la calidad de vida."
- Separador en blanco debajo (la nota de "quitar" se respeta dejando bloque divisor limpio).
- **Fondo:** blanco.

### 1.3 — BLOQUE IMAGEN + TEXTO "Ciencia aplicada al desarrollo humano"
- **Componente:** split 50/50 (§0.5-F).
- **Lado izquierdo:** imagen real `[PLACEHOLDER: imagen práctica MT]`.
- **Lado derecho:**
  - H3: "Ciencia aplicada al desarrollo humano".
  - Párrafo introductorio sobre estrés crónico y enfoque basado en evidencia.
  - H4: "La práctica regular de la Meditación Trascendental se asocia con:"
  - **Lista con iconos** (4 ítems, cada uno con icono lineal):
    - Mayor coherencia cerebral (icono cerebro).
    - Reducción de cortisol y marcadores de estrés (icono gota/onda).
    - Mejora del sueño y recuperación fisiológica (icono luna).
    - Incremento de capacidad cognitiva, creatividad y enfoque (icono gráfico ascendente).
  - Párrafo de cierre.
- **Fondo:** blanco, texto azul (regla de la anotación).

### 1.4 — INVITACIÓN A LA EXPERIENCIA + VIDEO
- **Diagramación:** título centrado + reproductor de video 16:9 centrado debajo.
- H3: "Una invitación a la experiencia".
- Texto: "El verdadero valor de esta práctica se confirma en la experiencia directa."
- **Video** (componente §0.5-G, sin espacio negro):
  - Opción A: "La conexión de la Ciencia de la Inteligencia Creativa y la MT" (6 min).
  - Opción B (si A es muy largo): "Introducción de la MT — Profesor Bob Roth" (4 min).
  - `[PLACEHOLDER: video del Drive — decisión editorial A o B]`
- **Fondo:** beige.

### 1.5 — CUADRO DE BENEFICIOS CON CARRUSEL DE INVESTIGACIÓN
- **Componente:** carrusel de pestaña movible (§0.5-H) con 5–7 imágenes de investigación científica.
  - `[PLACEHOLDER: 5–7 imágenes carpeta "investigación científica" del Drive]`
- **Texto bajo el carrusel:** "Más de 800 estudios realizados en 250 universidades e instituciones de 35 países, publicados en revistas como Science, The American Journal of Cardiology y el Journal of Clinical Psychology."
- **Lista de beneficios documentados** (tarjetas o lista con icono, 5 ítems):
  - Reducción del estrés y la ansiedad (icono escudo/onda).
  - Mejora del funcionamiento cerebral (icono cerebro).
  - Reducción del insomnio y mejor calidad del sueño (icono luna).
  - Salud cardiovascular (icono corazón).
  - Impacto social — efecto Maharishi (icono personas/comunidad).
- **Fondo:** blanco.

### 1.6 — ¿QUÉ ES LA MEDITACIÓN TRASCENDENTAL?
- **Componente:** split imagen + texto.
- **Imagen:** `[PLACEHOLDER: imagen definitiva — reemplaza la marcada para cambio]`.
- **Cita destacada (Playfair Display, dorada o azul):** "Es una técnica natural, sin esfuerzo y científicamente validada para nutrir todos los aspectos de la vida."
- Párrafos de cuerpo (Lora): herramienta de desarrollo integral; técnica universal sin creencias previas; no es religión; se practica 20 minutos, dos veces al día.
- **Detalle visual:** badge/píldora con icono reloj "20 min · 2 veces al día".
- **Fondo:** beige.

### 1.7 — ¿QUÉ LA HACE DIFERENTE?
- **Componente:** split imagen + texto (imagen al lado opuesto del bloque anterior).
- **Imagen:** `[PLACEHOLDER: imagen definitiva]`.
- H3: "¿Qué la hace diferente?"
- Cuerpo: contraste con prácticas de concentración/control mental; la MT permite que la mente se aquiete sin esfuerzo; estado de coherencia cerebral global.
- **Fondo:** blanco.

### 1.8 — RESPALDO CIENTÍFICO QUE INSPIRA CONFIANZA
- **Componente:** bloque de texto + video.
- **Imagen/fondo:** `[PLACEHOLDER: imagen definitiva]`.
- H3: "Respaldo científico que inspira confianza".
- Frase inspiracional (Playfair): "Sumérgete en el océano infinito de tu propia conciencia y descubre el silencio que transforma."
- Subtexto: "Descubra la Meditación Trascendental. Una práctica con respaldo científico. Un camino hacia lo mejor de uno mismo."
- **Video:** "Ondas cerebrales — Dr. Fred Travis" (componente §0.5-G).
- Párrafo "Universal y accesible": no pertenece a ninguna religión; más de seis millones de practicantes; adoptada por instituciones, empresas y gobiernos.
- **Fondo:** beige.

### 1.9 — DIAGRAMA DE LAS BURBUJAS
- **Componente:** gráfico/infografía interactiva o estática "diagrama de burbujas".
  - `[PLACEHOLDER: diagrama de burbujas — activo gráfico]`
- Texto de apoyo: "Conecta con tu bienestar a través de tecnologías avanzadas de la conciencia, respaldadas por la ciencia."
- Frase: "Todo está dentro de ti. Tu conciencia es el campo de todas las posibilidades. Descúbrelo hoy."
- **Fondo:** blanco.

### 1.10 — ¿QUÉ SUCEDE CUANDO MEDITAMOS?
- **Componente:** video + texto.
- **Video:** "¿Qué sucede cuando meditamos?" (§0.5-G).
- Cuerpo (Lora): proceso de trascendencia; descanso profundo más reparador que el sueño; cerebro más coherente; claridad mental.
- **Fondo:** beige.

### 1.11 — HERRAMIENTA PARA DISMINUIR EL ESTRÉS
- **Componente:** gráfico científico + texto + video.
- H3: "Una herramienta efectiva para disminuir el estrés".
- **Gráfico científico de manejo del estrés** `[PLACEHOLDER: gráfico]`.
- Cuerpo: el estrés crónico como factor de riesgo; la investigación demuestra reducción efectiva y sostenible.
- **Video:** "Maharishi — Lago en Canadá" (§0.5-G).
- **Fondo:** blanco.

### 1.12 — CIERRE / CTA FINAL
- **Componente:** banda CTA ancho completo, fondo azul profundo, texto blanco.
- Título inspiracional + botón primario "Aprende Meditación Trascendental".
- Nota: el contenido extenso de cada tema enlaza a su página de menú correspondiente.

---

## PÁGINA 02 · MEDITACIÓN TRASCENDENTAL (MT)  `/meditacion-trascendental`

**Objetivo:** página de profundidad — toda la información completa de la técnica MT.
**Fondo dominante:** alternancia blanco / beige.

### 2.1 — HERO SECUNDARIO
- Banda de altura media (40–50 vh), imagen serena + overlay azul.
- H1: "Técnica de Meditación Trascendental (MT)".
- Subtítulo de una línea.
- Breadcrumb: Inicio › Meditación Trascendental.

### 2.2 — QUÉ ES LA TÉCNICA
- Bloque de texto de lectura (Lora): técnica natural y sin esfuerzo; 20 minutos, dos veces al día, ojos cerrados; no es religión; práctica universal.
- **Subbloque "A diferencia de otras meditaciones":** la mente se aquieta de forma espontánea hasta la "conciencia trascendental".
- **Detalle visual:** badge "20 min · 2 veces al día · ojos cerrados".
- **Fondo:** blanco.

### 2.3 — RESPALDO CIENTÍFICO
- H3: "Respaldo científico".
- Texto: más de 50 años de investigación; universidades e instituciones médicas; estudios con EEG y alta coherencia cerebral.
- **Fondo:** beige.

### 2.4 — BENEFICIOS ADICIONALES DE APRENDER MT
- **Componente:** grilla de tarjetas con icono (5 tarjetas):
  - Mayor energía y vitalidad (icono sol).
  - Mejora en la calidad del sueño (icono luna).
  - Reducción del envejecimiento prematuro (icono hoja).
  - Mayor estabilidad emocional (icono balanza).
  - Desarrollo del potencial humano en todas las áreas (icono gráfico ascendente).
- **Gráficos científicos** de inteligencia, creatividad y memoria `[PLACEHOLDER: gráficos]`.
- **Fondo:** blanco.

### 2.5 — EVIDENCIA CIENTÍFICA Y BENEFICIOS COMPROBADOS
- **Componente:** acordeón (§0.5-I) o pestañas, una fila por área temática:
  1. **Salud cardiovascular** — ensayos en *American Journal of Hypertension*; revisión en *Advances in Integrative Medicine*; reconocimiento de la American Heart Association.
  2. **Manejo del estrés, ansiedad y depresión** — *The Permanente Journal*; mejor regulación del sistema nervioso.
  3. **Salud integral y prevención** — reducción de inflamación, regulación de cortisol, factores de envejecimiento.
  4. **Función cognitiva, inteligencia y creatividad** — claridad mental, coherencia cerebral, rendimiento cognitivo.
  5. **Impacto en el comportamiento social** — menos agresividad, mejor comunicación, más empatía.
- **Fondo:** beige.

### 2.6 — REFERENCIAS CIENTÍFICAS
- **Componente:** lista de referencias con enlaces externos (se abren en pestaña nueva).
  - Incluye estudios clásicos (Schneider 2009/2014, Ooi 2017, Bai 2015, Fox 2016, Rainforth 2007).
  - Bloque destacado "Estudios recientes (2022–2025)": Nidich 2022 (JAMA Network Open), Kjellgren 2025 (Journal of Clinical Medicine), Orme-Johnson & Barnes 2025 (Medicina).
- **Estilo:** texto pequeño Poppins, enlaces en dorado, icono de enlace externo.
- **Fondo:** blanco.

### 2.7 — CTA
- Banda azul profundo: "Aprende la Meditación Trascendental" + botón primario al formulario.

---

## PÁGINA 03 · NOSOTROS  `/nosotros`

**Objetivo:** presentar a la Fundación Maharishi de Colombia: identidad, misión, visión.
**Fondo dominante:** alternancia blanco / beige.

### 3.1 — HERO SECUNDARIO
- Banda media con imagen institucional serena + overlay.
- H1: "Nosotros — Fundación Maharishi de Colombia".
- Breadcrumb: Inicio › Nosotros.

### 3.2 — QUIÉNES SOMOS
- **Componente:** split imagen + texto.
- Cuerpo: organización dedicada al desarrollo del pleno potencial humano; Ciencia de la Inteligencia Creativa de Maharishi Mahesh Yogi; integra conocimiento tradicional y validación científica; promueve la MT y programas complementarios.
- Subtexto: más de 800 estudios; entidad oficial sin ánimo de lucro autorizada en Colombia; instructores certificados internacionalmente.
- **Fondo:** blanco.

### 3.3 — PROGRAMAS QUE OFRECEMOS (avance)
- **Componente:** grilla de tarjetas con icono, enlazan a la página Programas:
  - Técnicas Avanzadas de MT · Programa de Sidhis MT · Yoga Maharishi · Ayurveda Maharishi · Terapia de Luz y Gemas.
- **Fondo:** beige.

### 3.4 — MISIÓN
- **Componente:** bloque destacado, fondo azul profundo / texto blanco, con icono.
- Texto de misión: desarrollo del pleno potencial humano; vida en armonía con las leyes de la naturaleza; tecnologías para el desarrollo de la conciencia y el bienestar.
- **Sublista** "Mediante la aplicación sistemática es posible:" (4 ítems con icono):
  - Expandir el funcionamiento total del cerebro.
  - Desarrollar estados superiores de conciencia.
  - Incrementar creatividad, inteligencia y felicidad.
  - Construir una vida libre de estrés y conflictos.
- Cierre: alianza con el País Global de la Paz Mundial.

### 3.5 — VISIÓN
- **Componente:** bloque destacado fondo beige, con icono.
- Texto de visión: desarrollo integral del individuo y la sociedad; vida en equilibrio con las leyes naturales; paz estable y duradera; respaldo de más de 800 investigaciones.
- **Fondo:** beige.

### 3.6 — BENEFICIOS RESPALDADOS CIENTÍFICAMENTE
- **Componente:** 3 tarjetas con icono:
  - Expansión del potencial cerebral (coherencia EEG, función ejecutiva).
  - Reducción del estrés y mejora de salud (cortisol, presión arterial).
  - Impacto social (disminución de violencia, mejor calidad de vida).
- Nota al pie: referencias en *Journal of Clinical Psychology*, *American Journal of Hypertension*, *Journal of Conflict Resolution*.
- **Fondo:** blanco.

### 3.7 — CTA
- Banda azul: invitación a conocer la charla informativa gratuita + botón.

---

## PÁGINA 04 · PROGRAMAS Y TECNOLOGÍAS  `/programas-y-tecnologias`

**Objetivo:** catálogo completo de tecnologías védicas Maharishi.
**Estructura:** índice de anclas arriba + una sección por programa.
**Fondo dominante:** alternancia blanco / beige.

### 4.1 — HERO SECUNDARIO
- Banda media con imagen + overlay.
- H1: "Programas y Tecnologías".
- Subtítulo: "Tecnologías védicas Maharishi para el bienestar integral".
- Breadcrumb: Inicio › Programas y Tecnologías.

### 4.2 — ÍNDICE DE PROGRAMAS (navegación interna)
- **Componente:** grilla de tarjetas-ancla (cada una lleva a su sección):
  Terapia de Sonido · Terapia de Marmas · Terapia de Luz y Gemas · Yoga Maharishi · Pranayama · Aromaterapia · Diagnóstico del Pulso · Jyotish y Yagya · Técnicas Avanzadas de MT · Programa Sidhis MT.

### 4.3 a 4.12 — SECCIONES DE PROGRAMA (plantilla repetida)

> **Plantilla estándar por programa** (se repite para cada uno, alternando fondo blanco/beige
> y alternando el lado de la imagen en el split):
> - Ancla con `id`.
> - **Componente:** split imagen + texto.
> - Imagen: `[PLACEHOLDER: imagen del programa]`.
> - H3: nombre del programa.
> - Párrafo descriptivo (Lora).
> - H4: "Beneficios" + lista con iconos.

**4.3 · Terapia de Sonido (Gandharva Veda)** — `id="gandharva-veda"`
- Descripción: música védica que sincroniza la fisiología con los ritmos de la naturaleza.
- Beneficios: estados de calma · reduce estrés y ansiedad · claridad y equilibrio · descanso reparador · armonización del sistema nervioso.

**4.4 · Terapia de Marmas** — `id="marmas"`
- Descripción: técnica ayurvédica que estimula puntos energéticos (marmas) con presión suave y aceites herbales; correlación con plexos nerviosos.
- Beneficios: libera tensiones · relajación profunda · mejora circulación y vitalidad · equilibrio cuerpo-mente · bienestar integral.

**4.5 · Terapia de Luz y Gemas** — `id="luz-gemas"`
- Descripción: combina luz, color y gemas para la armonía física, mental y emocional.
- Beneficios: estabilidad emocional · equilibrio de la energía personal · calma y claridad · complemento meditativo · armonía integral.

**4.6 · Yoga Maharishi** — `id="yoga-maharishi"`
- Descripción: posturas suaves, respiración consciente y relajación profunda; secuencia sistemática de asanas; aplicación universal.
- Beneficios: mejora postura y flexibilidad · reduce tensión · equilibrio emocional · disminuye estrés · más energía e integración mente-cuerpo.

**4.7 · Pranayama** — `id="pranayama"`
- Descripción: técnicas de respiración para regular el prana y estabilizar el sistema nervioso.
- Beneficios: disminuye ansiedad · claridad y concentración · equilibrio emocional · mejora oxigenación · relajación profunda.

**4.8 · Aromaterapia** — `id="aromaterapia"`
- Descripción: aceites esenciales naturales que influyen en el bienestar a través del olfato.
- Beneficios: relajación y bienestar emocional · manejo del estrés · ambientes armónicos · mejor descanso · equilibrio y confort.

**4.9 · Diagnóstico del Pulso (Nadi Vigyan)** — `id="diagnostico-pulso"`
- Descripción: observación ayurvédica del pulso para identificar tendencias de desequilibrio.
- Beneficios: visión integral del bienestar · recomendaciones personalizadas · prevención y autocuidado · detección temprana · conexión con el propio cuerpo.

**4.10 · Jyotish y Yagya** — `id="jyotish-yagya"`
- Descripción: astrología védica y tecnologías de armonización; observación de ciclos naturales para el autoconocimiento.
- Beneficios: claridad y reflexión interior · comprensión de ciclos personales · decisiones conscientes · desarrollo personal y espiritual.

**4.11 · Técnicas Avanzadas de MT** — `id="tecnicas-avanzadas"`
- Descripción: desarrolladas por Maharishi para acelerar estados superiores de conciencia; se aprenden tras al menos tres meses de práctica regular de MT.
- **Efectos comprobados** (lista con icono): incremento de coherencia cerebral · experiencias más profundas de trascendencia · mayor integración mente-cuerpo · aumento de creatividad, inteligencia y bienestar emocional.

**4.12 · Programa de Sidhis MT** — `id="sidhis-mt"`
- Descripción: tecnología avanzada de la conciencia para desarrollar el potencial creativo al máximo.
- **Beneficios principales** (lista con icono): estados superiores de conciencia · mayor creatividad e intuición · eficiencia mental y rendimiento · plenitud y realización.
- **Subbloque "¿Cómo actúa?"** (acordeón o columnas): integra pensamiento y acción · reduce dispersión mental · aumenta coherencia EEG · integra áreas cerebrales.
- **Video:** "Programa de Sidhis — Edith Nye" (§0.5-G).
- Cierre: la integración de MT + Técnicas Avanzadas + Sidhis + Ayurveda + Yoga Maharishi constituye un sistema completo.

### 4.13 — CTA
- Banda azul profundo con invitación a la charla informativa + botón.

---

## PÁGINA 05 · PROYECTOS  `/proyectos`

**Objetivo:** mostrar la dimensión social y educativa de la Fundación.
**Fondo dominante:** alternancia blanco / beige.

### 5.1 — HERO SECUNDARIO
- Banda media con imagen + overlay.
- H1: "Proyectos".
- Breadcrumb: Inicio › Proyectos.

### 5.2 — EDUCACIÓN BASADA EN LA CONCIENCIA (EBC)
- **Componente:** split imagen + texto + bloques de apoyo. `id="educacion-conciencia"`.
- Cuerpo: ciencia fundada por Maharishi en 1972; estructura unificada del conocimiento; sistema educativo innovador con técnicas validadas.
- **Subbloque "Marco normativo":** concordancia con el Plan Nacional de Desarrollo, CONPES 140 de 2019, estrategias PTAFI 3.0 y educación CRESE del Ministerio de Educación.
- **Subbloque "Beneficios"** (tarjetas con icono): mejora de atención, memoria, inteligencia y creatividad · regulación emocional y rendimiento académico · mejor sueño · mejor comunicación.
- **Subbloque "Reducción significativa de":** estrés crónico · hipertensión · ansiedad · depresión e insomnio.
- **Fondo:** blanco.

### 5.3 — PROGRAMAS DESARROLLADOS EN COLOMBIA
- **Componente:** timeline / línea de tiempo con foto por hito:
  - 2016 · Antioquia — Colegio La Estrella.
  - 2018 · Cúcuta — Colegio San José de Cúcuta.
  - 2020 · Bogotá — Colegio Japón.
  - 2024 · Piedecuesta, Santander — Colegio Centro de Comercio (Cedeco).
  - `[PLACEHOLDER: fotos de los grupos de estudiantes por institución]`
- **Fondo:** beige.

### 5.4 — PROGRAMAS DE FORMACIÓN Y EXPANSIÓN DIGITAL
- **Componente:** texto + tarjetas. `id="expansion-digital"`.
- Cuerpo: plataformas online de formación (presencial + virtual); Maharishi Foundation for Programs in Latin America.
- **Tarjetas de oferta digital:** cursos de salud y estrés · programas de conciencia · formación en Ayurveda · módulos teóricos de mente y conciencia.
- **Subbloque "Plataformas":**
  - Plataforma de cursos — enlace externo `cursos-programasmaharishi.org` (cursos modulares 30–70 lecciones, formación progresiva, varios idiomas).
  - Thinkific — plataforma e-learning para escalar contenido a Latinoamérica.
- **Fondo:** blanco.

### 5.5 — PROGRAMAS DE COHERENCIA SOCIAL · EFECTO MAHARISHI
- **Componente:** split imagen + texto + diagrama. `id="coherencia-social"`.
- Cuerpo: sistema que entrena la regulación neuronal en grupo para generar orden social.
- **Subbloque "El Efecto Maharishi":** cuando el 1% de una población practica Sidhis MT o grupos practican MT — efectos reportados: disminución de violencia, crimen y estrés colectivo.
- **Gráfico del efecto** `[PLACEHOLDER: gráfico del efecto Maharishi]`.
- **Subbloque "Tres niveles"** (3 tarjetas con icono):
  - Individual — regulación del sistema nervioso.
  - Grupal — sincronización de estados fisiológicos.
  - Social — impacto en variables colectivas.
- **Subbloque "Espacio y logística":** lugar fijo · horarios sincronizados · ambiente silencioso y constante.
- **Video:** "La Paz / Sidhis" (§0.5-G).
- **Fondo:** beige.

### 5.6 — CTA
- Banda azul: invitación a participar o conocer más + botón.

---

## PÁGINA 06 · ACTIVIDADES  `/actividades`

**Objetivo:** mostrar el Centro MT Colombia y su agenda de actividades.
**Fondo dominante:** alternancia blanco / beige.

### 6.1 — HERO SECUNDARIO
- Banda media con imagen del centro + overlay.
- H1: "Actividades".
- Subtítulo: "Centro de Meditación Trascendental Colombia".
- Breadcrumb: Inicio › Actividades.

### 6.2 — PROGRAMA DE COHERENCIA SOCIAL EN BOGOTÁ
- **Componente:** split imagen + texto.
- Cuerpo: infraestructura especializada en Bogotá; capacidad para 40 participantes; espacios para instrucción personalizada; equipo de instructores certificados en varias ciudades.
- **Fondo:** blanco.

### 6.3 — FORMACIÓN PERSONALIZADA
- **Componente:** bloque con tarjetas.
- **Subbloque "Cursos de Meditación Trascendental":** instrucción individual guiada · seguimiento personalizado · verificación de la práctica correcta.
- **Beneficios** (lista con icono): reducción profunda del estrés · claridad mental · mejor toma de decisiones · equilibrio emocional.
- **Fondo:** beige.

### 6.4 — TÉCNICAS AVANZADAS Y TECNOLOGÍAS VÉDICAS
- **Componente:** tarjetas.
- Oferta: técnicas avanzadas de MT · conocimiento védico aplicado · programas de desarrollo de la conciencia.
- **Beneficios:** mayor estabilidad interna · expansión del potencial mental · refinamiento mente-cuerpo.
- **Fondo:** blanco.

### 6.5 — ACTIVIDADES GRUPALES · JORNADAS DE BIENESTAR
- **Componente:** bloque destacado con icono de calendario "cada 15 días".
- Actividades: verificación de los mecanismos de la MT · resolución de dudas · práctica grupal · ejercicios de integración neuromuscular · yoga · aromaterapia · técnicas de respiración.
- **Beneficios:** profundización de la experiencia · coherencia mental y emocional · sentido de comunidad.
- **Fondo:** beige.

### 6.6 — CURSOS DE RESIDENCIA (RETIROS)
- **Componente:** split imagen + texto.
- Cuerpo: se realizan en distintos lugares de Colombia, fines de semana, en entornos para el descanso e introspección.
- **Características:** programa estructurado e intensivo · alternancia práctica/descanso · acompañamiento especializado.
- **Beneficios:** descanso profundo acumulado · liberación de estrés arraigado · claridad mental · experiencia estable de la práctica.
- `[PLACEHOLDER: imágenes de retiros]`.
- **Fondo:** blanco.

### 6.7 — BARRA DE TESTIMONIOS
- **Componente:** carrusel de testimonios en video.
- **Regla crítica:** los videos se ajustan al tamaño del contenedor — **sin espacio negro**.
- Cada testimonio: video o foto + nombre + breve cita.
- **Fondo:** beige.

### 6.8 — BARRA DE INFORMACIÓN DE PROFESORES
- **Componente:** grilla de tarjetas de profesor.
- Tarjeta: foto con fondo claro + nombre + rol.
- Directora Nacional: María Teresa Acosta. Profesores: Carolina Quintana, Giovanni Vega, Leonor Rodríguez.
- `[CONTENIDO PENDIENTE: completar lista de profesores activos y solicitar fotos recientes, fondo claro, alta resolución]`.
- **Fondo:** blanco.

### 6.9 — FORMULARIO DE INSCRIPCIÓN A CHARLA INFORMATIVA GRATUITA
- **Componente:** formulario destacado (ver especificación completa en §4 — Componente de conversión).
- **Fondo:** beige o banda azul como contenedor del formulario.

---

## PÁGINA 07 · BLOG  `/blog`

**Objetivo:** artículos divulgativos positivos sobre Meditación Trascendental y ciencia.
**Fondo dominante:** blanco con tarjetas.

### 7.1 — HERO SECUNDARIO
- Banda media + H1: "Blog".
- Subtítulo: "Artículos sobre Meditación Trascendental, ciencia y bienestar".
- Breadcrumb: Inicio › Blog.

### 7.2 — ARTÍCULO DESTACADO
- **Componente:** tarjeta grande horizontal (imagen + título + extracto + botón "Leer más").

### 7.3 — GRILLA DE ARTÍCULOS
- **Componente:** grilla de tarjetas de artículo (3 columnas desktop / 1 móvil).
- Tarjeta: imagen de portada · categoría (píldora) · título (Poppins) · extracto (Lora) · fecha · "Leer más".
- **Artículos base identificados:**
  1. La Ciencia Moderna y la Meditación Trascendental: bienestar para mente y cuerpo.
  2. Meditación Trascendental y Resiliencia Mental.
  3. Meditación y Cambios en el Cerebro.
  4. Meditación Trascendental y Ciencia Moderna: el creciente interés mundial por el bienestar interior.
  5. Deportistas, Artistas y Líderes que practican Meditación Trascendental.
  6. Meditación Trascendental, Insomnio y Ansiedad: lo que revela la ciencia moderna.

### 7.4 — FILTRO / CATEGORÍAS (opcional)
- Píldoras de categoría: Ciencia · Estrés y Ansiedad · Sueño · Cerebro · Bienestar.

### 7.5 — PLANTILLA DE ARTÍCULO INDIVIDUAL  `/blog/{articulo}`
- **Encabezado:** imagen de portada ancho completo + título (Playfair) + fecha + tiempo de lectura.
- **Cuerpo:** texto Lora, ancho de lectura ~720 px; subtítulos H3 en Poppins.
- **Bloques de cita científica:** caja destacada (fondo beige, borde dorado a la izquierda) con el nombre del estudio + enlace externo. Ejemplos de estudios citados: *Scientific Reports — Transcendental Meditation Study (2025)*, metaanálisis en *The Journal of Alternative and Complementary Medicine*, *Effect of Meditation on Heart Rate Variability*, entre otros.
- **Final del artículo:** bloque "Artículos relacionados" (3 tarjetas) + CTA al formulario.

### 7.6 — CTA
- Banda azul al pie del listado y de cada artículo.

---

## PÁGINA 08 · CONTACTO  `/contacto`

**Objetivo:** facilitar el contacto y la inscripción.
**Fondo dominante:** blanco / beige.

### 8.1 — HERO SECUNDARIO
- Banda media + H1: "Contacto".
- Subtítulo: "Estamos para acompañarte en tu práctica".
- Breadcrumb: Inicio › Contacto.

### 8.2 — DATOS DE CONTACTO
- **Componente:** dos columnas — información a la izquierda, formulario a la derecha.
- **Bloque de datos (lista con icono):**
  - Oficina Nacional — WhatsApp: 315 215 55 86 (icono WhatsApp, enlace `wa.me`).
  - WhatsApp Business: 312 674 26 12 (icono WhatsApp).
  - E-mail: meditaciontrascendental1917@gmail.com (icono sobre, enlace `mailto:`).
- **Botón primario flotante/visible:** "Escríbenos por WhatsApp".

### 8.3 — REDES SOCIALES Y ENLACES OFICIALES
- **Componente:** fila de iconos sociales grandes:
  - Facebook → facebook.com/meditaciontrascendentalcol
  - Instagram → instagram.com/meditacion_trascendental_col
  - YouTube → canal @meditaciontrascendentalcol5205
- **Enlaces institucionales:** miu.edu · maharishiveda.com (icono enlace externo, abren en pestaña nueva).

### 8.4 — DIRECTORA Y PROFESORES
- **Componente:** grilla de tarjetas (reutiliza el componente §6.8).
- Directora Nacional: María Teresa Acosta. Profesores: Carolina Quintana, Giovanni Vega, Leonor Rodríguez.
- `[CONTENIDO PENDIENTE: completar lista + fotos fondo claro alta resolución]`.

### 8.5 — FORMULARIO DE INSCRIPCIÓN A CHARLA INFORMATIVA GRATUITA VIRTUAL
- **Componente:** formulario destacado (especificación en §4).

### 8.6 — MAPA / UBICACIÓN (opcional)
- Mapa embebido del Centro MT Bogotá si se desea exponer la dirección física.

---

# 4. COMPONENTE DE CONVERSIÓN — FORMULARIO DE CHARLA INFORMATIVA

Componente clave reutilizado en Inicio (CTA), Actividades (§6.9) y Contacto (§8.5).

- **Encabezado:** título "Charla informativa gratuita y virtual" + texto breve de invitación.
- **Campos:**
  - Nombre completo (texto, requerido).
  - Correo electrónico (email, requerido).
  - Teléfono / WhatsApp (tel, requerido).
  - Ciudad (texto, opcional).
  - Mensaje o consulta (textarea, opcional).
  - Casilla de aceptación de tratamiento de datos personales (checkbox, requerido — ley colombiana de habeas data).
- **Botón de envío:** primario dorado — "Reservar mi lugar".
- **Estados:** validación inline; mensaje de éxito tras envío; estado de carga en el botón.
- **Estilo:** contenedor con fondo blanco sobre banda azul/beige, radio 16 px, sombra sutil; labels en Poppins, campos con borde azul claro.

---

# 5. ESPECIFICACIÓN RESPONSIVE

| Breakpoint | Ancho | Comportamiento |
|------------|-------|----------------|
| Desktop | ≥ 1024 px | Grilla 12 col, splits 50/50, menú horizontal completo. |
| Tablet | 768–1023 px | Grillas de 3 col → 2 col; splits se mantienen o apilan según contenido. |
| Móvil | < 768 px | Todo a 1 columna; splits apilan imagen sobre texto; menú hamburguesa; Hero 70 vh. |

- Imágenes con `srcset` para servir resolución según dispositivo.
- Áreas táctiles mínimas de 44×44 px en móvil.
- Videos siempre 16:9 fluido, sin recortes ni franjas negras.

---

# 6. CHECKLIST DE ACTIVOS PENDIENTES (para el cliente)

Reúne con el cliente, desde el Drive, los siguientes activos antes de maquetar:

- [ ] 4 fotos del Hero de Inicio: Bogotá, Valle del Cocora, Tayrona, Cartagena (alta resolución).
- [ ] Video introductorio: decidir entre opción A (Inteligencia Creativa y MT, 6 min) y opción B (Bob Roth, 4 min).
- [ ] 5–7 imágenes de la carpeta "investigación científica" para el carrusel de Inicio.
- [ ] Videos: ondas cerebrales Dr. Fred Travis · "¿Qué sucede cuando meditamos?" · Maharishi Lago en Canadá · Sidhis Edith Nye · Paz/Sidhis.
- [ ] Imágenes definitivas que reemplazan las marcadas "cambiar esta imagen" en Inicio (secciones 1.6, 1.7, 1.8).
- [ ] Gráficos científicos: manejo del estrés · inteligencia/creatividad/memoria · diagrama de burbujas · gráfico del efecto Maharishi.
- [ ] Fotos de los grupos de estudiantes por institución (Antioquia, Cúcuta, Bogotá, Piedecuesta).
- [ ] Imágenes de retiros / cursos de residencia.
- [ ] Lista completa y actualizada de profesores activos + fotos recientes con fondo claro, alta resolución.
- [ ] Videos de testimonios ajustados a 16:9 (verificar que no queden con espacio negro).
- [ ] Logos oficiales de la Fundación en versiones para fondo claro y oscuro.

---

# 7. RESUMEN DE COHERENCIA (verificación final del manual de marca)

Antes de publicar, verificar que toda la web cumpla:

- [ ] Solo se usan los 5 colores de la paleta; ningún negro puro; ningún color saturado.
- [ ] Solo 3 tipografías: Playfair Display (títulos), Poppins (interfaz), Lora (cuerpo).
- [ ] "Meditación Trascendental" y "MT" siempre con iniciales en mayúscula.
- [ ] El Hero comunica qué es, qué hace y cómo te hace sentir en 3 segundos.
- [ ] Espacios en blanco amplios; ritmo visual lento; una idea por bloque.
- [ ] Fotografía real, luz natural, expresiones serenas; naturaleza de Colombia presente de forma sutil.
- [ ] Sin exceso de texto, sin promesas exageradas, con estructura clara en cada página.
- [ ] Todos los videos sin espacio negro; todas las imágenes en alta resolución.
- [ ] CTA visible y consistente: "Aprende Meditación Trascendental" → formulario de charla informativa.

---

*Fin del blueprint. Documento listo para entregar al equipo de diseño y desarrollo.*
