import { Project, Technology, Skill, Course, ContactInfo } from '../types';
import { bioContent } from './bio';

// TODO: Add your actual project data
export const projects: Project[] = [
  {
    id: '1',
    title: 'Fret Studio',
    description: 'A comprehensive web-based guitar learning and music theory application that provides interactive fretboard visualization, scale exploration, chord analysis, and custom voicing creation tools.',
    technologies: [
      { name: 'React', icon: 'SiReact', category: 'framework' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'language' },
      { name: 'Vite', icon: 'SiVite', category: 'framework' },
      { name: 'React Router', icon: 'SiReactrouter', category: 'framework' },
      { name: 'FastAPI', icon: 'SiFastapi', category: 'framework' },
      { name: 'Python', icon: 'SiPython', category: 'language' },
      { name: 'Uvicorn', icon: 'SiUvicorn', category: 'tool' },
      { name: 'Pydantic', icon: 'SiPydantic', category: 'framework' },
    ],
    githubUrl: 'https://github.com/heaD-tWin/fret-studio',
    liveUrl: 'https://fret-studio-demo.com',
    imageUrl: '/programming-portfolio/images/projects/FretStudioScreen02.png', // Added base path
    featured: true,
  },
  // Add more projects here
];

// TODO: Add your actual technologies
export const technologies: Technology[] = [
  // Programming Languages
  { name: 'JavaScript', icon: 'SiJavascript', category: 'language' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'language' },
  { name: 'HTML5', icon: 'SiHtml5', category: 'language' },
  { name: 'CSS3', icon: 'SiCss3', category: 'language' },
    { name: 'Python', icon: 'SiPython', category: 'language' },
    { name: 'Java', icon: 'SiJava', category: 'language' },
  { name: 'SQL', icon: 'SiMysql', category: 'language' },
  
  // Frontend Frameworks & Libraries
  { name: 'React', icon: 'SiReact', category: 'framework' },
  { name: 'React Router', icon: 'SiReactrouter', category: 'framework' },
  { name: 'Vite', icon: 'SiVite', category: 'framework' },
  
  // Backend Frameworks
  { name: 'FastAPI', icon: 'SiFastapi', category: 'framework' },
  { name: 'Django', icon: 'SiDjango', category: 'framework' },
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'framework' },
  { name: 'Pydantic', icon: 'SiPydantic', category: 'framework' },
  
  // Tools & Version Control
  { name: 'Git', icon: 'SiGit', category: 'tool' },
  { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'tool' },
  { name: 'GitHub', icon: 'SiGithub', category: 'tool' },
  { name: 'Bitbucket', icon: 'SiBitbucket', category: 'tool' },
  { name: 'Uvicorn', icon: 'SiUvicorn', category: 'tool' },
  { name: 'Vitest', icon: 'SiVitest', category: 'tool' },
  
  // Testing
  { name: 'React Testing Library', icon: 'SiTestinglibrary', category: 'tool' },
  
  // Database
  { name: 'MySQL', icon: 'SiMysql', category: 'database' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'database' },
  { name: 'SQLite', icon: 'SiSqlite', category: 'database' },
  { name: 'JSON', icon: 'SiJson', category: 'database' },
  
  // Cloud & Infrastructure
  { name: 'AWS', icon: 'SiAmazonaws', category: 'other' },
  { name: 'Google Cloud', icon: 'SiGooglecloud', category: 'other' },
  { name: 'Azure AD', icon: 'SiMicrosoftazure', category: 'other' },
  { name: 'VMware', icon: 'SiVmware', category: 'other' },
  
  // Enterprise & Networking
  { name: 'Active Directory', icon: 'SiMicrosoft', category: 'other' },
  { name: 'Office 365', icon: 'SiMicrosoft365', category: 'other' },
  { name: 'Cisco IOS', icon: 'SiCisco', category: 'other' },
  { name: 'RESTful API', icon: 'SiPostman', category: 'other' },
  { name: 'VOIP', icon: 'SiWebrtc', category: 'other' },
  { name: 'Hyper-V', icon: 'SiMicrosoft', category: 'other' },
  
  // Add more technologies here
];

// TODO: Add your actual skills
export const skills: Skill[] = [
  {
    name: 'Frontend Development',
    level: 'Advanced',
    technologies: technologies.filter(t => ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'React Router'].includes(t.name)),
  },
  {
    name: 'Backend Development',
    level: 'Advanced',
    technologies: technologies.filter(t => ['Python', 'FastAPI', 'Django', 'Node.js', 'RESTful API', 'Pydantic'].includes(t.name)),
  },
  {
    name: 'Testing & Quality Assurance',
    level: 'Intermediate',
    technologies: technologies.filter(t => ['Vitest', 'React Testing Library'].includes(t.name)),
  },
  {
    name: 'Database Management',
    level: 'Intermediate',
    technologies: technologies.filter(t => ['SQL', 'MySQL', 'PostgreSQL', 'SQLite', 'JSON'].includes(t.name)),
  },
  {
    name: 'Cloud & DevOps',
    level: 'Intermediate',
    technologies: technologies.filter(t => ['AWS', 'Google Cloud', 'Azure AD', 'Git', 'GitHub', 'Uvicorn'].includes(t.name)),
  },
  {
    name: 'System Administration',
    level: 'Advanced',
    technologies: technologies.filter(t => ['Active Directory', 'Office 365', 'VMware', 'Hyper-V'].includes(t.name)),
  },
  {
    name: 'Network Engineering',
    level: 'Intermediate',
    technologies: technologies.filter(t => ['Cisco IOS', 'VOIP'].includes(t.name)),
  },
  // Add more skills here
];

// TODO: Add your actual courses
export const courses: Course[] = [
  {
    id: '1',
    title: 'Diploma of IT (Networking)',
    institution: 'TAFE (NSW)',
    completionDate: '2019',
        description: 'This comprehensive course covered essential aspects of enterprise networking and IT systems. Key topics included configuring and troubleshooting WAN links, routers, and switches; designing and managing medium to complex ICT networks; installing and maintaining network servers and authentication processes; implementing enterprise virtual computing environments and server virtualization; and producing network architecture designs. The curriculum also emphasized workplace sustainability, ICT policies, security management, and aligning technology solutions with organizational strategy and industry standards.',
  },
  // Add more courses here
];

// TODO: Add your actual contact information
export const contactInfo: ContactInfo = {
  email: 'danwhite1984@live.com.au',
  socialLinks: [
      { name: 'GitHub', url: 'https://github.com/heaD-tWin', icon: 'SiGithub' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-white-09168a260/', icon: 'SiLinkedin' },
    // Add more social links here
  ],
};

// TODO: Add your bio
export const bio = {
  name: 'Dan White',
  title: 'Full Stack Developer',
  description: bioContent,
  avatarUrl: '/programming-portfolio/images/avatar/meCropped.png', // Corrected path
};