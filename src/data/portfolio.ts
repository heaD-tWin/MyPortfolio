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
    liveUrl: '',
    images: [
      '/programming-portfolio/images/projects/FretStudioScreen01.png',
      '/programming-portfolio/images/projects/FretStudioScreen02.png',
      '/programming-portfolio/images/projects/FretStudioScreen03.png',
      '/programming-portfolio/images/projects/FretStudioScreen04.png',
      '/programming-portfolio/images/projects/FretStudioScreen05.png',
    ],
    featured: true,
    },
    {
        id: '2',
        title: 'Weather View',
        description: 'A sleek, interactive desktop weather dashboard built with Python, Tkinter, and the OpenWeatherMap API. Displays current weather, a 5-day forecast with icons, and dynamically changes background themes based on weather conditions. Includes geolocation, temperature charting, and favourite city support. Built as a personal portfolio project.',
        technologies: [
            { name: 'Python', icon: 'SiPython', category: 'language' },
            { name: 'Tkinter', icon: 'SiPython', category: 'framework' },
            { name: 'OpenWeatherMap API', icon: 'SiOpenweathermap', category: 'other' },
            { name: 'Geopy', icon: 'SiPython', category: 'framework' },
            { name: 'JSON', icon: 'SiJson', category: 'database' },
        ],
        githubUrl: 'https://github.com/heaD-tWin/WeatherView',
        liveUrl: '', // Remove since it's a desktop app
        images: [
            '/programming-portfolio/images/projects/WVScreenshot1.png',
            '/programming-portfolio/images/projects/WVScreenshot2.png',
        ],
        featured: true,
    },
  // Add more projects here
];

// TODO: Add your actual technologies
export const technologies: Technology[] = [
  // Programming Languages
  { name: 'JavaScript', icon: 'SiJavascript', category: 'language', iconPath: '/programming-portfolio/images/icons/JavaScript.png' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'language', iconPath: '/programming-portfolio/images/icons/TypeScript.png' },
    { name: 'HTML5', icon: 'SiHtml5', category: 'language', iconPath: '/programming-portfolio/images/icons/HTML5.png' },
    { name: 'CSS3', icon: 'SiCss3', category: 'language', iconPath: '/programming-portfolio/images/icons/CSS3.png' },
    { name: 'Python', icon: 'SiPython', category: 'language', iconPath: '/programming-portfolio/images/icons/Python.png' },
    { name: 'Java', icon: 'SiJava', category: 'language', iconPath: '/programming-portfolio/images/icons/Java.png' },
    { name: 'SQL', icon: 'SiMysql', category: 'language', iconPath: '/programming-portfolio/images/icons/MySQL.png' },
  
  // Frontend Frameworks & Libraries
    { name: 'React', icon: 'SiReact', category: 'framework', iconPath: '/programming-portfolio/images/icons/React.png' },
  { name: 'React Router', icon: 'SiReactrouter', category: 'framework' },
    { name: 'Vite', icon: 'SiVite', category: 'framework', iconPath: '/programming-portfolio/images/icons/Vite.png' },
  
  // Backend Frameworks
  { name: 'FastAPI', icon: 'SiFastapi', category: 'framework' },
  { name: 'Django', icon: 'SiDjango', category: 'framework' },
    { name: 'Node.js', icon: 'SiNodedotjs', category: 'framework', iconPath: '/programming-portfolio/images/icons/NodeJS.png' },
    { name: 'Pydantic', icon: 'SiPydantic', category: 'framework', iconPath: '/programming-portfolio/images/icons/Pydantic.png' },
  
  // Tools & Version Control
  { name: 'Git', icon: 'SiGit', category: 'tool' },
    { name: 'GitHub', icon: 'SiGithub', category: 'tool', iconPath: '/programming-portfolio/images/icons/GitHub.png' },
    { name: 'Bitbucket', icon: 'SiBitbucket', category: 'tool', iconPath: '/programming-portfolio/images/icons/BitBucket.png' },
    { name: 'Uvicorn', icon: 'SiUvicorn', category: 'tool', iconPath: '/programming-portfolio/images/icons/Uvicorn.png' },
    { name: 'Vitest', icon: 'SiVitest', category: 'tool', iconPath: '/programming-portfolio/images/icons/Vitest.png' },
  
  // Testing
    { name: 'React Testing Library', icon: 'SiTestinglibrary', category: 'tool', iconPath: '/programming-portfolio/images/icons/ReactTestingLibrary.png' },
  
  // Database
    { name: 'MySQL', icon: 'SiMysql', category: 'database', iconPath: '/programming-portfolio/images/icons/ReactTestingLibrary.png' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'database' },
    { name: 'SQLite', icon: 'SiSqlite', category: 'database', iconPath: '/programming-portfolio/images/icons/SQLite.png' },
    { name: 'JSON', icon: 'SiJson', category: 'database', iconPath: '/programming-portfolio/images/icons/JSON.png' },
  
  // Cloud & Infrastructure
    { name: 'Google Cloud', icon: 'SiGooglecloud', category: 'other', iconPath: '/programming-portfolio/images/icons/GoogleCloud.png' },
    { name: 'Azure AD', icon: 'SiMicrosoftazure', category: 'other', iconPath: '/programming-portfolio/images/icons/AzureAD.png' },
    { name: 'VMware', icon: 'SiVmware', category: 'other', iconPath: '/programming-portfolio/images/icons/Vmware.png' },
  
  // Enterprise & Networking
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
    name: 'Desktop Applications',
    level: 'Intermediate',
    technologies: technologies.filter(t => ['Python', 'Tkinter', 'Geopy'].includes(t.name)),
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
    {
        id: '2',
        title: 'Complete Python Mastery',
        institution: 'Code with Mosh',
        completionDate: '2025',
        description: 'A project-based Python programming course designed to take learners from beginner to advanced levels. The curriculum covers Python fundamentals, automation, web development with Django, and machine learning, featuring hands-on projects in each area. By the end of the course, students gain practical experience and confidence using Python for backend development, data science, and automation.',
    },
    {
        id: '3',
        title: 'Data Analytics Professional Certificate',
        institution: 'Google (Coursera)',
        completionDate: '2025',
        description: 'The Google Data Analytics Professional Certificate is an intensive program covering the fundamentals of data analytics. It teaches practical skills such as data cleaning, analysis, and visualization using tools like spreadsheets, SQL, and Tableau. The curriculum emphasizes real-world problem solving, preparing learners to collect, organize, and interpret data to drive informed business decisions.',
    },
    {
        id: '4',
        title: 'Java Programming and Software Engineering Fundamentals',
        institution: 'Duke Duke University (Coursera)',
        completionDate: '2025',
        description: 'An in-depth program covering the essentials of Java programming and software engineering. The course focuses on core concepts such as problem-solving, object-oriented programming, algorithms, and data structures. Learners gain hands-on experience building robust applications and develop foundational skills in software development, testing, and project management.',
    },
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