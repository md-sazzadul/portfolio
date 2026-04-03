import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'SaaS Analytics Dashboard',
    description:
      'A real-time analytics platform for business intelligence, featuring interactive charts, custom date ranges, and exportable reports.',
    problem: 'Teams struggled to interpret raw metrics without context',
    solution: 'Built a dashboard with composable chart components and filters',
    impact: 'Reduced decision-making time by 40% for 200+ users',
    tech: ['React', 'TypeScript', 'Recharts', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce Storefront',
    description:
      'A high-performance product catalog and checkout flow with server-side rendering, optimistic UI updates, and Stripe integration.',
    problem: 'Legacy checkout had 60% cart abandonment rate',
    solution: 'Rebuilt with Next.js, reducing time-to-interactive by 3×',
    impact: 'Boosted conversions by 28% in the first month',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'Design System Library',
    description:
      'A comprehensive component library with 50+ accessible, themeable components documented in Storybook.',
    problem: 'Inconsistent UI across 5 internal products',
    solution: 'Created a shared design system with strict a11y standards',
    impact: 'Cut new feature development time by 35%',
    tech: ['React', 'TypeScript', 'Storybook', 'Radix UI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real-time Chat App',
    description:
      'A WebSocket-powered messaging platform with rooms, file sharing, and message threading built for remote teams.',
    problem: 'Remote teams lacked a lightweight communication tool',
    solution: 'Built with React + socket.io with optimistic message rendering',
    impact: 'Deployed to 500+ daily active users',
    tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
];
