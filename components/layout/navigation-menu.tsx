import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Box,
    chakra,
    HStack,
    Icon,
    IconButton,
    keyframes,
    Spacer,
    Tooltip,
    useDisclosure,
    useUpdateEffect,
    type HTMLChakraProps,
} from '@chakra-ui/react'
import {
    IconBadge,
    useHotkeys,
} from '@saas-ui/react'
import { useColorMode } from '@chakra-ui/react';
import { FaGithub, FaVideo } from 'react-icons/fa'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'
import { useTheme } from 'next-themes'
import { FaCode } from 'react-icons/fa6'
import Image from "next/image";
import { MobileNavButton, MobileNavContent } from '@/components/mobile-nav'

export const Navigation = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const mobileNav = useDisclosure()
    const { theme, setTheme } = useTheme();
    const { isOpen: isVideoOpen, onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure()
    const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

    useUpdateEffect(() => {
        mobileNavBtnRef.current?.focus()
    }, [mobileNav.isOpen])

    const { isOpen, onOpen, onClose } = useDisclosure()

    useHotkeys(['/', 'CMD+K'], () => {
        onOpen()
    })

    return (
        <NavigationMenuRoot>
            <NavigationMenuList>
                <NavigationMenu.Item>
                    <Link
                        href="/"
                        className='flex justify-center items-center h-full cursor-pointer'
                    >
                        <Image
                            src={colorMode === 'light' ? "/static/images/light.png" : "/static/images/dark.png"}
                            width={25}
                            height={25}
                            alt="Theme logo"
                        />
                    </Link>
                </NavigationMenu.Item>

                <HStack display={{ base: 'none', md: 'flex' }}>
                    <NavigationMenu.Item>
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <List
                                sx={{
                                    '@media only screen and (min-width: 600px)': {
                                        width: '700px',
                                        gridTemplateColumns: '2fr 2fr',
                                        gridTemplateRows: 'repeat(4, 3fr)',
                                    },
                                }}
                            >
                                <ListItem
                                    href="/staffing"
                                    title="Software / IT Staffing"
                                    gridArea="1 / 1 / 2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Software / IT Staffing
                                </ListItem>

                                <ListItem
                                    href="/devops"
                                    title="Devops"
                                    gridArea="2 / 1 / 3 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Devops
                                </ListItem>

                                <ListItem
                                    href="/project-management"
                                    title="Project Management"
                                    gridArea="3 / 1 / 4 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Project Management
                                </ListItem>

                                <ListItem
                                    href="/technology-architecture"
                                    title="Technology Architecture"
                                    gridArea="4 / 1 / 5 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Technology Architecture
                                </ListItem>

                                <ListItem
                                    href="/web"
                                    title="Web Development"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Web Development
                                </ListItem>

                                <ListItem
                                    href="/mobile"
                                    title="Mobile Development"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    App Development
                                </ListItem>

                                <ListItem
                                    href="/apps"
                                    title="App Development"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    App Development
                                </ListItem>

                                <ListItem
                                    href="/ux-ui"
                                    title="UI/ UX Design"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    UI/ UX Design
                                </ListItem>

                                <ListItem
                                    href="/mvp"
                                    title="MVP Development"
                                    gridColumn="3 / span 1"
                                    gridRow="1 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    MVP Development
                                </ListItem>

                                <ListItem
                                    href="/saas"
                                    title="SaaS Development"
                                    gridColumn="3 / span 1"
                                    gridRow="2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    SaaS Development
                                </ListItem>

                                <ListItem
                                    href="/api-development"
                                    title="API Development"
                                    gridColumn="3 / span 1"
                                    gridRow="3 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    API Development
                                </ListItem>

                                <ListItem
                                    href="/testing"
                                    title="QA & Testing"
                                    gridColumn="3 / span 1"
                                    gridRow="4 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    QA & Testing
                                </ListItem>
                            </List>
                        </NavigationMenuContent>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <List
                                sx={{
                                    '@media only screen and (min-width: 600px)': {
                                        width: '700px',
                                        maxWidth: '80vw',
                                        gridTemplateColumns: 'repeat(4, 1fr)', // 3 columns
                                        gridTemplateRows: 'repeat(8, 3fr)',    // 8 rows
                                    },
                                }}
                            >
                                <ListItem
                                    href="/java"
                                    title="Java"
                                    gridArea="1 / 1 / 2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Java
                                </ListItem>

                                <ListItem
                                    href="/javascript"
                                    title="Javascript"
                                    gridArea="2 / 1 / 3 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Javascript
                                </ListItem>

                                <ListItem
                                    href="/nodejs"
                                    title="Node.js"
                                    gridArea="3 / 1 / 4 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Node.js
                                </ListItem>

                                <ListItem
                                    href="/react"
                                    title="React"
                                    gridArea="4 / 1 / 5 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    React
                                </ListItem>

                                <ListItem
                                    href="/electron"
                                    title="Electron"
                                    gridArea="5 / 1 / 6 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Electron
                                </ListItem>

                                <ListItem
                                    href="/laravel"
                                    title="Laravel"
                                    gridArea="6 / 1 / 7 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Laravel
                                </ListItem>

                                <ListItem
                                    href="/html5"
                                    title="HTML5"
                                    gridArea="7 / 1 / 8 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    HTML5
                                </ListItem>

                                <ListItem
                                    href="/php"
                                    title="PHP"
                                    gridArea="8 / 1 / 9 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    PHP
                                </ListItem>

                                <ListItem
                                    href="/python"
                                    title="Python"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Python
                                </ListItem>

                                <ListItem
                                    href="/c-sharp-dot-net"
                                    title="C#/.NET"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    C#/.NET
                                </ListItem>

                                <ListItem
                                    href="/labview"
                                    title="LabVIEW"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    LabVIEW
                                </ListItem>

                                <ListItem
                                    href="/unity"
                                    title="Unity"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Unity
                                </ListItem>

                                <ListItem
                                    href="/webflow"
                                    title="Webflow"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Webflow
                                </ListItem>

                                <ListItem
                                    href="/shopify"
                                    title="Shopify"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Shopify
                                </ListItem>

                                <ListItem
                                    href="/ios"
                                    title="iOS"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    iOS
                                </ListItem>

                                <ListItem
                                    href="/android"
                                    title="Android"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Android
                                </ListItem>

                                <ListItem
                                    href="/solidworks"
                                    title="SolidWorks"
                                    gridColumn="3 / span 1"
                                    gridRow="1 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    SolidWorks
                                </ListItem>

                                <ListItem
                                    href="/azure"
                                    title="Azure"
                                    gridColumn="3 / span 1"
                                    gridRow="2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Azure
                                </ListItem>

                                <ListItem
                                    href="/aws"
                                    title="AWS"
                                    gridColumn="3 / span 1"
                                    gridRow="3 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    AWS
                                </ListItem>

                                <ListItem
                                    href="/sitefinity"
                                    title="Sitefinity"
                                    gridColumn="3 / span 1"
                                    gridRow="4 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Sitefinity
                                </ListItem>

                                <ListItem
                                    href="/wordpress"
                                    title="Wordpress"
                                    gridColumn="3 / span 1"
                                    gridRow="5 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Wordpress
                                </ListItem>

                                <ListItem
                                    href="/opencv"
                                    title="OpenCV"
                                    gridColumn="3 / span 1"
                                    gridRow="7 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    OpenCV
                                </ListItem>

                                <ListItem
                                    href="/salesforce"
                                    title="Salesforce"
                                    gridColumn="3 / span 1"
                                    gridRow="6 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Salesforce
                                </ListItem>


                                <ListItem
                                    href="/oracle"
                                    title="Oracle"
                                    gridColumn="3 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Oracle
                                </ListItem>


                                <ListItem
                                    href="/nextcloud"
                                    title="Nextcloud"
                                    gridColumn="4 / span 1"
                                    gridRow="1 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Nextcloud
                                </ListItem>

                                <ListItem
                                    href="/netsuite"
                                    title="NetSuite"
                                    gridColumn="4 / span 1"
                                    gridRow="2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    NetSuite
                                </ListItem>

                                <ListItem
                                    href="/sql"
                                    title="SQL"
                                    gridColumn="4 / span 1"
                                    gridRow="3 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    SQL
                                </ListItem>

                                <ListItem
                                    href="/sql-server"
                                    title="SQL Server"
                                    gridColumn="4 / span 1"
                                    gridRow="4 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    SQL Server
                                </ListItem>

                                <ListItem
                                    href="/tableau"
                                    title="Tableau"
                                    gridColumn="4 / span 1"
                                    gridRow="5 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Tableau
                                </ListItem>

                                <ListItem
                                    href="/sap"
                                    title="SAP"
                                    gridColumn="4 / span 1"
                                    gridRow="6 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    SAP
                                </ListItem>

                                <ListItem
                                    href="/kubernetes"
                                    title="Kubernetes"
                                    gridColumn="4 / span 1"
                                    gridRow="7 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Kubernetes
                                </ListItem>

                                <ListItem
                                    href="/elasticsearch"
                                    title="ElasticSearch"
                                    gridColumn="4 / span 1"
                                    gridRow="8 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    ElasticSearch
                                </ListItem>

                            </List>
                        </NavigationMenuContent>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <List
                                sx={{
                                    '@media only screen and (min-width: 600px)': {
                                        width: '600px',
                                        // maxWidth: '100vw',
                                        gridTemplateColumns: '2fr 2fr',
                                        gridTemplateRows: 'repeat(5, 3fr)',
                                    },
                                }}
                            >
                                <ListItem
                                    href="/ai"
                                    title="Artificial Intelligence"
                                    gridArea="1 / 1 / 2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Artificial Intelligence
                                </ListItem>

                                <ListItem
                                    href="/cybersecurity"
                                    title="Cybersecurity"
                                    gridArea="2 / 1 / 3 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Cybersecurity
                                </ListItem>

                                <ListItem
                                    href="/robotic-process-automation"
                                    title="Robotic Process Automation"
                                    gridArea="3 / 1 / 4 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Robotic Process Automation
                                </ListItem>

                                <ListItem
                                    href="/blockchain"
                                    title="Blockchain (DLT)"
                                    gridArea="4 / 1 / 5 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Blockchain (DLT)
                                </ListItem>

                                <ListItem
                                    href="/vr"
                                    title="Extended Reality (AR/VR)"
                                    gridArea="5 / 1 / 6 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Extended Reality (AR/VR)
                                </ListItem>

                                <ListItem
                                    href="/erp"
                                    title="ERP"
                                    gridArea="6 / 1 / 7 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    ERP
                                </ListItem>

                                <ListItem
                                    href="/crm"
                                    title="CRM"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    CRM
                                </ListItem>

                                <ListItem
                                    href="/online-storage"
                                    title="Online Storage"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Online Storage
                                </ListItem>

                                <ListItem
                                    href="/big-data"
                                    title="Big Data"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Big Data
                                </ListItem>

                                <ListItem
                                    href="/bi"
                                    title="Business Intelligence"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Business Intelligence
                                </ListItem>

                                <ListItem
                                    href="/iot"
                                    title="Internet of Things (IOT)"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Internet of Things (IOT)
                                </ListItem>
                            </List>
                        </NavigationMenuContent>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <List
                                sx={{
                                    '@media only screen and (min-width: 600px)': {
                                        width: '600px',
                                        // maxWidth: '100vw',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gridTemplateRows: 'repeat(3, 3fr)',
                                    },
                                }}
                            >
                                <ListItem
                                    href="/enterprise"
                                    title="Enterprise"
                                    gridArea="1 / 1 / 2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Enterprise
                                </ListItem>

                                <ListItem
                                    href="/government"
                                    title="Government"
                                    gridArea="2 / 1 / 3 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Government
                                </ListItem>

                                <ListItem
                                    href="/education"
                                    title="Education"
                                    gridArea="3 / 1 / 4 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Education
                                </ListItem>

                                <ListItem
                                    href="/small-business"
                                    title="Small Business"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Small Business
                                </ListItem>

                                <ListItem
                                    href="/marketing"
                                    title="Marketing"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Marketing
                                </ListItem>

                                <ListItem
                                    href="/finance"
                                    title="Finance"
                                    gridColumn="2 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Finance
                                </ListItem>

                                <ListItem
                                    href="/healthcare"
                                    title="Healthcare"
                                    gridColumn="3 / span 1"
                                    gridRow="span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Healthcare
                                </ListItem>

                                <ListItem
                                    href="/agriculture"
                                    title="Agriculture"
                                    gridColumn="3 / span 1"
                                    gridRow="1 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    Agriculture
                                </ListItem>

                                <ListItem
                                    href="/ecommerce"
                                    title="eCommerce"
                                    gridColumn="3 / span 1"
                                    gridRow="2 / span 1"
                                    icon={
                                        <IconBadge bg="white" _dark={{ bg: 'gray.900' }}>
                                            <Icon as={FaCode} boxSize="16px" />
                                        </IconBadge>
                                    }
                                >
                                    eCommerce
                                </ListItem>
                            </List>
                        </NavigationMenuContent>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenuLink href="/portfolio">Our Work</NavigationMenuLink>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenuLink href="/about">About</NavigationMenuLink>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
                    </NavigationMenu.Item>

                </HStack>

                <Spacer />

                <HStack spacing="0">
                    <Tooltip label="Github">
                        <IconButton
                            variant="ghost"
                            aria-label="github"
                            icon={<FaGithub size="14" />}
                            borderRadius="md"
                            as={Link}
                            href="https://github.com/devdotco"
                        />
                    </Tooltip>

                    <ThemeToggle />

                    <Tooltip label="Watch Video">
                        <IconButton
                            variant="ghost"
                            aria-label="video"
                            icon={<FaVideo size="14" />}
                            borderRadius="md"
                            onClick={onVideoOpen}
                        />
                    </Tooltip>
                </HStack>

                <Modal isOpen={isVideoOpen} onClose={onVideoClose}>
                    <ModalOverlay />
                    <ModalContent maxW="800px" backgroundColor={colorMode === 'dark' ? "#000000" : "#ffffff"} >
                        <ModalHeader>Introduction</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <div className='rounded-lg overflow-hidden'>
                                <iframe
                                    width="100%"
                                    height="415"
                                    src="https://www.youtube.com/embed/g65BIKLJXrE"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onVideoClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <MobileNavButton
                    ref={mobileNavBtnRef}
                    aria-label="Open Menu"
                    onClick={mobileNav.onOpen}
                />

                <MobileNavContent
                    isOpen={mobileNav.isOpen}
                    onClose={mobileNav.onClose}
                />

                <NavigationMenuIndicator></NavigationMenuIndicator>
            </NavigationMenuList>

            <ViewportPosition>
                <NavigationMenuViewport />
            </ViewportPosition>
        </NavigationMenuRoot>
    )
}

const enterFromRight = keyframes({
    from: { transform: 'translateX(200px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
})

const enterFromLeft = keyframes({
    from: { transform: 'translateX(-200px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
})

const exitToRight = keyframes({
    from: { transform: 'translateX(0)', opacity: 1 },
    to: { transform: 'translateX(200px)', opacity: 0 },
})

const exitToLeft = keyframes({
    from: { transform: 'translateX(0)', opacity: 1 },
    to: { transform: 'translateX(-200px)', opacity: 0 },
})

const scaleIn = keyframes({
    from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
    to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})

const scaleOut = keyframes({
    from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
    to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
})

const fadeOut = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
})

const NavigationMenuRoot = chakra(NavigationMenu.Root, {
    baseStyle: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'stretch',
        zIndex: 1,
        gap: '8',
        '& > div': {
            width: '100%',
        },
    },
})

const NavigationMenuList = chakra(NavigationMenu.List, {
    baseStyle: {
        display: 'flex',
        flex: 1,
        padding: 0,
        listStyle: 'none',
        margin: 0,
        gap: 4,
    },
})

const itemStyles = {
    px: 3,
    py: 2,
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 'md',
    fontSize: 'md',
    color: 'blackAlpha.800',
    _dark: {
        color: 'whiteAlpha.800',
    },
    _hover: {
        color: 'black',
        _dark: {
            color: 'white',
        },
    },
    _focus: {
        boxShadow: 'outline',
    },
    '&[data-state="open"]': {
        color: 'black',
        _dark: {
            color: 'white',
        },
    },
}

const NavigationMenuTrigger = chakra(NavigationMenu.Trigger, {
    baseStyle: {
        all: 'unset',
        ...itemStyles,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
})

const NavigationMenuLink = chakra(NavigationMenu.Link, {
    baseStyle: {
        ...itemStyles,
        display: 'block',
        textDecoration: 'none',
        fontSize: 'md',
        lineHeight: 1,
    },
})

const NavigationMenuContent = chakra(NavigationMenu.Content, {
    baseStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        '@media only screen and (min-width: 600px)': { width: 'auto' },
        '&[data-motion="from-start"]': { animation: `${enterFromLeft} 250ms ease` },
        '&[data-motion="from-end"]': { animation: `${enterFromRight} 250ms ease` },
        '&[data-motion="to-start"]': { animation: `${exitToLeft} 250ms ease` },
        '&[data-motion="to-end"]': { animation: `${exitToRight} 250ms ease` },
    },
})

const NavigationMenuIndicator = chakra(NavigationMenu.Indicator, {
    baseStyle: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: '10px',
        top: '100%',
        overflow: 'hidden',
        zIndex: 1,
        transition: 'width, transform 250ms ease',
        '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
        '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
    },
})

const NavigationMenuViewport = chakra(NavigationMenu.Viewport, {
    baseStyle: {
        position: 'relative',
        transformOrigin: 'top center',
        marginTop: 0,
        width: '100%',
        backgroundColor: 'whiteAlpha.700',
        backdropFilter: 'blur(20px)',
        borderBottomRadius: 'lg',
        overflow: 'hidden',
        borderWidth: '1px',
        boxShadow:
            'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
        height: 'var(--radix-navigation-menu-viewport-height)',
        transition: 'width, height, 300ms ease',
        '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
        '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
        '@media only screen and (min-width: 600px)': {
            width: 'var(--radix-navigation-menu-viewport-width)',
        },
        _dark: {
            backgroundColor: 'blackAlpha.700',
            boxShadow: 'dark-lg',
        },
    },
})

const List = chakra('ul', {
    baseStyle: {
        display: 'grid',
        p: 3,
        margin: 0,
        columnGap: 2,
        listStyle: 'none',
        gap: 2,
    },
})

const ListItem = React.forwardRef<
    HTMLAnchorElement,
    HTMLChakraProps<'a'> & { icon?: React.ReactNode }
>(function ListItem(
    { children, title, icon, gridRow, gridColumn, gridArea, ...props },
    forwardedRef
) {
    return (
        <chakra.li
            role="group"
            gridRow={gridRow}
            gridColumn={gridColumn}
            gridArea={gridArea}
        >
            <NavigationMenu.Link asChild>
                <ListItemLink {...props} ref={forwardedRef}>
                    <HStack alignItems="flex-start">
                        {icon}
                        <Box>
                            <ListItemHeading>{title}</ListItemHeading>
                            {children && <ListItemText>{children}</ListItemText>}
                        </Box>
                    </HStack>
                </ListItemLink>
            </NavigationMenu.Link>
        </chakra.li>
    )
})

const ListItemLink = chakra(Link, {
    baseStyle: {
        display: 'block',
        height: '100%',
        outline: 'none',
        textDecoration: 'none',
        userSelect: 'none',
        padding: 4,
        borderRadius: 'md',
        fontSize: 'md',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        _hover: {
            bg: 'blackAlpha.50',
        },
        _focus: {
            bg: 'blackAlpha.50',
        },
        _dark: {
            _hover: {
                bg: 'whiteAlpha.100',
            },
            _focus: {
                bg: 'whiteAlpha.100',
            },
        },
    },
})

const ListItemHeading = chakra('div', {
    baseStyle: {
        fontWeight: 'medium',
        lineHeight: 1.2,
        color: 'blackAlpha.800',
        _dark: {
            color: 'whiteAlpha.800',
        },
        transition: 'color 0.2s ease',
        _groupHover: {
            color: 'black',
            _dark: {
                color: 'white',
            },
        },
    },
})

const ListItemText = chakra('p', {
    baseStyle: {
        all: 'unset',
        lineHeight: 1.4,
        fontSize: 'sm',
        fontWeight: 'initial',
        color: 'blackAlpha.600',
        transition: 'color 0.2s ease',
        _dark: {
            color: 'whiteAlpha.600',
        },
        _groupHover: {
            color: 'blackAlpha.800',
            _dark: {
                color: 'whiteAlpha.800',
            },
        },
    },
})

const Callout = chakra('a', {
    baseStyle: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // background: 'blackAlpha.50',
        borderRadius: 'md',
        padding: 3,
        textDecoration: 'none',
        outline: 'none',
        userSelect: 'none',
        transition: 'background-color 0.2s ease',
        _hover: {
            background: 'blackAlpha.50',
        },
        _focus: {
            background: 'blackAlpha.50',
        },
        _dark: {
            _hover: {
                background: 'whiteAlpha.100',
            },
            _focus: {
                background: 'whiteAlpha.100',
            },
        },
    },
})

const CalloutHeading = chakra('div', {
    baseStyle: {
        fontSize: 'md',
        fontWeight: 'medium',
        lineHeight: 1.4,
        color: 'blackAlpha.800',
        _dark: {
            color: 'whiteAlpha.800',
        },
        transition: 'color 0.2s ease',
        _groupHover: {
            color: 'black',
            _dark: {
                color: 'white',
            },
        },
    },
})

const CalloutText = chakra('p', {
    baseStyle: {
        all: 'unset',
        lineHeight: 1.4,
        fontSize: 'sm',
        fontWeight: 'initial',
        color: 'blackAlpha.600',
        transition: 'color 0.2s ease',
        _dark: {
            color: 'whiteAlpha.600',
        },
        _groupHover: {
            color: 'blackAlpha.800',
            _dark: {
                color: 'whiteAlpha.800',
            },
        },
    },
})

const CalloutLink = chakra(Link, {
    baseStyle: {
        display: 'block',
        height: '100%',
        outline: 'none',
        textDecoration: 'none',
        userSelect: 'none',
        px: 3,
        py: 1,
        borderRadius: 'full',
        fontSize: 'sm',
        fontWeight: 'medium',
        cursor: 'pointer',
        bg: 'blackAlpha.50',
        transition: 'background-color 0.2s ease',
        _hover: {
            bg: 'blackAlpha.100',
        },
        _focus: {
            bg: 'blackAlpha.100',
        },
        _groupHover: {
            bg: 'blackAlpha.100',
        },
        _dark: {
            bg: 'whiteAlpha.200',
            _hover: {
                bg: 'whiteAlpha.300',
            },
            _focus: {
                bg: 'whiteAlpha.300',
            },
            _groupHover: {
                bg: 'whiteAlpha.300',
            },
        },
    },
})

const ViewportPosition = chakra('div', {
    baseStyle: {
        display: 'content',
        position: 'absolute',
        mt: 2,
        justifyContent: 'flex-start',
        width: '100%',
        top: '100%',
        left: 0,
        perspective: '2000px',
    },
})
