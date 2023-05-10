export interface ContactMean {
  name: string;
  icon: string;
  redirect: string;
  style?: string;
}

export const contacts:ContactMean[] = [
  {
    name: 'Email',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    redirect: 'mailto:leonardo.a.alvarenga@gmail.com'
  },
  {
    name: 'LinkedIn',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg',
    redirect: 'https://www.linkedin.com/in/leonardo-a-alvarenga/'
  },
  {
    name: 'GitHub',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
    redirect: 'https://github.com/leo-alvarenga/',
    style: 'svg-foreground'
  },
];

