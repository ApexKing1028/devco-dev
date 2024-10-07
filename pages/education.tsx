import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Software Development for Education",
        content: [
            "Colleges and universities drive progress worldwide. The quality and reach of education shape all parts of society. As an educational software development company, we craft unique solutions tailored to help these institutions flourish further. Our custom services in education software development pave the way for more students to access top-notch learning experiences crucial for their growth.",
        ]
    }

    const second = {
        title: "Why Higher Education Companies Need Custom Software",
        description: [
            "Over the past ten years, a huge shift has swept through our educational institutions. The change is still happening and will surely continue into future. A major part of this transformation? Schools are going digital.",
            "Online learning used to be just a tiny slice of education industry’s pie. But today it’s served up at thousands of schools throughout the nation as standard fare! That means traditional classroom teaching now comes with a side order of virtual lessons in many cases – we call that hybrid learning.",
            "All these changes mean there’s growing demand for new, advanced education software solutions too – both from universities themselves and companies specializing in edtech services & products developed by clever teams of educational software developers!",
            "Building innovative mobile learning or computer-based tools requires expertise; thankfully more than one savvy software development company exists ready to fill those shoes- driving evolution further within increased improvements on students’ online experiences during their learning process.",
        ],
        content: [
            "Here are some of the common reasons institutions of higher learning approach us for custom software development:",
            "We’re passionate about designing unique enrollment systems. These not only streamline the process but also pump up productivity levels.",
            "Creating custom mobile apps is another area we excel in. We aim for these to enhance students’ campus life and learning journeys.",
            "Moreover, our focus extends towards fostering robust bonds between teachers and pupils with our interactive educational platforms.",
            "Connecting potential students effectively remains a priority as well; guiding them gently through application procedures right till admissions.",
            "In today’s rapidly changing academic environment, colleges, universities along with education companies face countless challenges daily – which makes providing software development services absolutely crucial!",
            "By incorporating “knowledge management system” into everyday use or by crafting innovative solutions like ‘educational apps’, we try making this landscape more navigable.",
            "Whether it’s an online platform or mobile educational app that you need – rest assured! You’re at the right place where technology meets academics seamlessly!",
        ]
    }

    const third = null

    const forth = null

    const fifth = {
        title: "Common Types of Education Software",
        description: [
            "Don’t see what you’re looking for on the list?",
            "At Dev.co, we act as your custom software development team.",
            "If you’re able to articulate what you want, we can create it.",
            "We’ll work hand-in-hand to ensure you get precisely what you need.",
            "Here are some of the different education software development services we frequently offer.",
        ],
        content: [
            {
                title: "Customized education systems",
                content: "Customized education systems that fit your school’s precise needs."
            },
            {
                title: "Comprehensive e-learning platforms",
                content: "Comprehensive e-learning platforms that are designed to facilitate virtual learning and remote classes, either as a supplement to classroom teaching or a replacement."
            },
            {
                title: "Skills assessment solutions",
                content: "Skills assessment solutions to help students uncover their talents and pursue the right classes, majors, and professions."
            },
            {
                title: "Self-learning management systems",
                content: "Self-learning management systems to assist students as they progress through their classes and degree programs."
            },
            {
                title: "Machine learning and AI chatbots",
                content: "Machine learning and AI chatbots that engage students and prospective students online via websites, social media, and other internet platforms."
            },
            {
                title: "School management systems",
                content: "School management systems to handle the back end responsibilities of managing and growing institutions of higher education."
            },
        ]
    }

    const sixth = null

    const seventh = null

    const eighth = [
        {
            title: "Understanding",
            content: "Background details vision & values target personas Stakeholder insights"
        },
        {
            title: "Research & Discovery",
            content: "Customer research Competitive analysis Expert audits & insights Current market Positioning"
        },
        {
            title: "Strategy",
            content: "Story & personality Market opportunities Positioning & messaging Creative brief development"
        },
        {
            title: "Creative",
            content: "Naming Logo development Graphics standards Verify function Messaging framework"
        },
        {
            title: "Deliver",
            content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
        }
    ]

    const nineth = {
        title: "Connect With DEV.co Today",
        content: [
            "At DEV.co, we’re proud to design custom software solutions that empower educational organizations to thrive in today’s dynamic marketplace.",
            "Please contact us today to find out more about our custom software development services!"
        ]
    }

    const tenth = null

    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;