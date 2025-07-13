export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Picha Zangu',
    description: 'A platform for photographers to store and sell images and event videos',
    liveUrl: 'https://www.pichazangu.store',
    imageUrl: '/pichazangu.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
  },
  {
    id: '2',
    title: 'AMKA Kijana',
    description: 'An NGO website focused on reproductive and mental health education',
    liveUrl: 'https://www.amkakijana.org',
    imageUrl: '/amka.jpg',
    technologies: ['React', 'Express', 'MySQL', 'Sass']
  },
  {
    id: '3',
    title: 'Four Freyn',
    description: 'A company profile site for an agriculture business',
    liveUrl: 'https://www.fourfreyn.com',
    imageUrl: '/fourfreyn.jpg',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: '4',
    title: 'KKK Tyombo',
    description: 'A church management system for a Lutheran congregation',
    liveUrl: 'https://www.kkktyombo.org',
    imageUrl: '/yombo.jpg',
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Bootstrap']
  },
  {
    id: '5',
    title: 'FutureHolders',
    description: 'Company website for FutureHolders Company Limited',
    liveUrl: 'https://blog-nextjs-app-puce.vercel.app',
    imageUrl: '/fh.jpg',
    technologies: ['React', 'GraphQL', 'Node.js', 'Material UI']
  }
];