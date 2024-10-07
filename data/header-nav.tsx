import { NavLinkProps } from 'components/nav-link'

const headerNav: (NavLinkProps & { authenticated?: boolean })[] = [
  { id: 'services', label: 'Services' },
  {
    href: '/staffing',
    label: 'Software/ IT Staffing',
  },
  {
    href: '/project-management',
    label: 'Project Management',
  },
  {
    href: '/technology-architecture',
    label: 'Technology Architecture',
  },
  {
    href: '/app',
    label: 'App Development',
  },
  {
    href: '/ux-ui',
    label: 'UI/ UX Design'
  },
  {
    href: '/mvp',
    label: 'MVP Development',
  },
  {
    href: '/saas',
    label: 'Saas Development',
  },
  {
    href: '/api',
    label: 'API Development',
  },
  {
    href: '/testing',
    label: 'QA & Testing',
  },
  { id: 'skill', label: 'Skills' },
  {
    href: '/java',
    label: 'Java',
  },
  {
    href: '/javascript',
    label: 'Javascript',
  },
  {
    href: '/nodejs',
    label: 'Node.js',
  },
  {
    href: '/react',
    label: 'React',
  },
  {
    href: '/electron',
    label: 'Electron',
  },
  {
    href: '/laravel',
    label: 'Laravel',
  },
  {
    href: '/html5',
    label: 'HTML5',
  },
  {
    href: '/php',
    label: 'PHP',
  },
  {
    href: '/python',
    label: 'Python',
  },
  {
    href: '/php',
    label: 'PHP',
  },
  {
    href: '/c-sharp-dot-net',
    label: 'C#/.NET',
  },
  {
    href: '/labview',
    label: 'LabVIEW',
  },
  {
    href: '/unity',
    label: 'Unity',
  },
  {
    href: '/webflow',
    label: 'Webflow',
  },
  {
    href: '/shopify',
    label: 'Shopify',
  },
  {
    href: '/ios',
    label: 'iOS',
  },
  {
    href: '/android',
    label: 'Android',
  },
  {
    href: '/solidWorks',
    label: 'SolidWorks',
  },
  {
    href: '/azure',
    label: 'Azure',
  },
  {
    href: '/aws',
    label: 'AWS',
  },
  {
    href: '/sitefinity',
    label: 'Sitefinity',
  },
  {
    href: '/wordpress',
    label: 'Wordpress',
  },
  {
    href: '/opencv',
    label: 'OpenCV',
  },
  {
    href: '/salesforce',
    label: 'Salesforce',
  },
  {
    href: '/oracle',
    label: 'Oracle',
  },
  {
    href: '/oracle',
    label: 'Oracle',
  },
  {
    href: '/nexxtcloud',
    label: 'Nextcloud',
  },
  {
    href: '/netsuite',
    label: 'NetSuite',
  },
  {
    href: '/sql',
    label: 'SQL',
  },
  {
    href: '/sql-server',
    label: 'SQL Server',
  },
  {
    href: '/tableau',
    label: 'Tableau',
  },
  {
    href: '/sap',
    label: 'SAP',
  },
  {
    href: '/kubernetes',
    label: 'Kubernetes',
  },
  {
    href: '/elasticSearch',
    label: 'ElasticSearch',
  },
  {
    href: '/portfolio',
    label: 'Our Work',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  }
]

export default headerNav
