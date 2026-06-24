export interface Skill {
  name: string
  level: "Avançado" | "Intermediário" | "Básico"
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoLink: string
  codeLink: string
  featured: boolean
}
