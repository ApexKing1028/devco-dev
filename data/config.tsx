import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Saas UI',
    description: 'The React component library for startups',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  footer: {
    links: {
      services: [
        {
          label: "Website Development",
          href: "/webs"
        },
        {
          label: "Mobile Development",
          href: "/mobile"
        },
        {
          label: "UX/UI Design",
          href: "/ux-ui"
        },
        {
          label: "Technology Architecture",
          href: "/technology-architecture"
        },
        {
          label: "Software/IT Staffing",
          href: "/staffing"
        },
        {
          label: "DevOps Services",
          href: "/devops"
        },
        {
          label: "Quality Assurance Testing",
          href: "/testing"
        },
        {
          label: "MVP Development",
          href: "/mvp"
        },
        {
          label: "SaaS Development",
          href: "/saas"
        },
        {
          label: "API Development",
          href: "/api"
        },
        {
          label: "Project Management",
          href: "/project-management"
        },
      ],
      skill1: [
        {
          label: "Java",
          href: "/java"
        },
        {
          label: "Javascript",
          href: "/javascript"
        },
        {
          label: "Next.js",
          href: "/next-js"
        },
        {
          label: "Node.js",
          href: "/nodejs"
        },
        {
          label: "React.js",
          href: "/react"
        },
        {
          label: "Electron.js",
          href: "/electron"
        },
        {
          label: "Laravel",
          href: "/laravel"
        },
        {
          label: "HTML5",
          href: "/html5"
        },
        {
          label: "PHP",
          href: "/php"
        },
        {
          label: "Python",
          href: "/python"
        },
        {
          label: "C#/.NET",
          href: "/c-sharp-dot-net"
        },{
          label: "Labview",
          href: "/labview"
        },
        {
          label: "Unity",
          href: "/unity"
        },
        {
          label: "Webflow",
          href: "/webflow"
        },
        {
          label: "Shopify",
          href: "/shopify"
        },
        {
          label: "SAP",
          href: "/sap"
        },
        {
          label: "Kubernetes",
          href: "/kubernetes"
        },
      ],
      skill2: [
        {
          label: "iOS",
          href: "/ios"
        },
        {
          label: "Android",
          href: "/android"
        },
        {
          label: "Solidworks",
          href: "/solidworks"
        },
        {
          label: "Azure",
          href: "/azure"
        },
        {
          label: "Sitefinity",
          href: "/sitefinity"
        },
        {
          label: "OpenCV",
          href: "/opencv"
        },
        {
          label: "AWS",
          href: "/aws"
        },
        {
          label: "Wordpress",
          href: "/wordpress"
        },
        {
          label: "Salesforce",
          href: "/salesforce"
        },
        {
          label: "Oracle",
          href: "/oracle"
        },
        {
          label: "Nextcloud",
          href: "/nextcloud"
        },
        {
          label: "Netsuite",
          href: "/netsuite"
        },
        {
          label: "SQL",
          href: "/sql"
        },
        {
          label: "SQL Server",
          href: "/sql-server"
        },
        {
          label: "Tableau",
          href: "/tableau"
        },
      ],
      technologies: [
        {
          label: "Artificial Intelligence",
          href: "/ai"
        },
        {
          label: "Cybersecurity",
          href: "/cybersecurity"
        },
        {
          label: "Robotic Process Automation",
          href: "/robotic-process-automation"
        },
        {
          label: "Blockchain (DLT)",
          href: "/blockchain"
        },
        {
          label: "Extended Reality (AR/VR)",
          href: "/vr"
        },
        {
          label: "ERP",
          href: "/erp"
        },
        {
          label: "CRM",
          href: "/crm"
        },
        {
          label: "Online Storage",
          href: "/online-storage"
        },
        {
          label: "Big Data",
          href: "/big-data"
        },
        {
          label: "Business Intelligence",
          href: "/bi"
        },
        {
          label: "Internet of Things (IOT)",
          href: "/iot"
        },
      ],
      industries: [
        {
          label: "Enterprise",
          href: "/enterprise"
        },
        {
          label: "Government",
          href: "/government"
        },
        {
          label: "Education",
          href: "/education"
        },
        {
          label: "Small Business",
          href: "/small-business"
        },
        {
          label: "Marketing",
          href: "/marketing"
        },
        {
          label: "Finance",
          href: "/finance"
        },
        {
          label: "Healthcare",
          href: "/healthcare"
        },
        {
          label: "Agriculture",
          href: "/agriculture"
        },
        {
          label: "eCommerce",
          href: "/ecommerce"
        }
      ]
    }
  },
}

export default siteConfig
