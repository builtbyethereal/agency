export interface Project {
  slug: string
  title: string
  year: string
  client: string
  role: string
  services: string[]
  category: 'Branding' | 'Editorial' | 'Direction'
  cover: string
  gallery: string[]
  summary: string
}

export interface Post {
  slug: string
  index: string
  title: string
  category: string
  author: string
  date: string
  cover: string
  excerpt: string
  body: string[]
  pullQuote: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  avatar: string
}

export interface Service {
  number: string
  title: string
  category: string
  description: string
}

export interface Client {
  name: string
  logo: string
}