import type { Post } from '../lib/types'

export const posts: Post[] = [
  {
    slug: 'against-the-poster',
    index: '001',
    title: 'Against The Poster',
    category: 'Essay',
    author: 'Iris Vandel',
    date: 'March 2024',
    cover: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=1200&q=80',
    excerpt:
      'Why the most durable graphic systems resist the single-image instinct.',
    body: [
      'There is a persistent fantasy in branding that the poster is the unit of design. One image, one message, one moment. It photographs well in a case study and it wins awards. It also ages badly.',
      'The alternative is a system: typography, grids, ratios, motion primitives. Systems do not photograph well. They require demonstration, patience, and trust that the client will use them correctly.',
      'We have found that the clients who ask for posters end up with posters that embarrass them in eighteen months. The clients who ask for systems end up with brands that survive their own founders.',
    ],
    pullQuote:
      'A brand is not the thing you see. It is the set of rules that produces the things you see.',
  },
  {
    slug: 'the-editor-as-designer',
    index: '002',
    title: 'The Editor As Designer',
    category: 'Process',
    author: 'Marcus Yeung',
    date: 'January 2024',
    cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80',
    excerpt:
      'What design studios can learn from the discipline of cutting a manuscript.',
    body: [
      'Editors do not add. They remove, order, and re-frame. Design, at its best, is the same discipline applied to visual material.',
      'When we begin a project, the first tool is not Figma. It is a document of constraints: what the client cannot say, what cannot be shown, what cannot be repeated.',
      'The work that emerges is smaller, sharper, and more durable. It reads as if it always existed.',
    ],
    pullQuote:
      'The editor’s job is to make the reader forget there was ever another version.',
  },
  {
    slug: 'notes-on-monochrome',
    index: '003',
    title: 'Notes On Monochrome',
    category: 'Craft',
    author: 'Sofia Aran',
    date: 'November 2023',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    excerpt:
      'A short defense of working in black, white, and the greys between them.',
    body: [
      'Monochrome is not a palette. It is a discipline. It forces every decision to be made on form, weight, and rhythm rather than color.',
      'When color finally enters the system — a single accent, a photograph at 30% saturation — it carries meaning because it has been earned.',
      'Most brands use color to signal personality. The better move is to earn color first, then spend it carefully.',
    ],
    pullQuote:
      'Color used without discipline is decoration. Color used with discipline is language.',
  },
]