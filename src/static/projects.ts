import { Skill } from "./skills";

export interface Project {
  name: string;
  description: string;
  repo: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: 'static.projects.crcalc.name',
    description: 'static.projects.crcalc.description',
    stack: ['javascript', 'react.js'],
    repo: 'https://github.com/leo-alvarenga/calculadora-cr'
  },
  {
    name: 'static.projects.dotfiles.name',
    description: 'static.projects.dotfiles.description',
    stack: ['linux', 'lua', 'bash'],
    repo: 'https://github.com/leo-alvarenga/dotfiles'
  },
  {
    name: 'static.projects.togo.name',
    description: 'static.projects.togo.description',
    stack: ['go', 'sqlite', 'html', 'css', 'javascript'],
    repo: 'https://github.com/leo-alvarenga/to-go'
  },
  {
    name: 'static.projects.uniguide.name',
    description: 'static.projects.uniguide.description',
    stack: ['javascript', 'react.js', 'node.js', 'express'],
    repo: 'https://github.com/leo-alvarenga/guia-do-universitario'
  }
];
