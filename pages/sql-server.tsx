import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "SQL Server Development Services",
        content: [
            "SQL servers are the preferred way to manage databases and data in the IT world.",
            "If your business needs a custom SQL database management platform, we can build you a custom SQL server that includes any features you need."
        ]
    }

    const second = {
        title: "Make Dev.co your SQL Server Development Partner",
        description: [],
        content: [
            "Launch your mission-critical website, mobile, and desktop applications with world-class SQL Server Development services from Dev.co.",
            "Our expert developers will build you a custom SQL server that can transform complex data into shareable information that you can publish virtually anywhere.",
        ]
    }

    const third = {
        title: "Our expert SQL developers have a wide range of skills",
        description: [
            "At Dev.co, our development teams consist of experts in a variety of programming languages that ensure our clients get top-notch applications.",
            "On the depth of your project, you might also need custom PHP applications that connect to your SQL database, or you might need a custom website built from scratch. Whatever you need, our development teams can handle your entire project from start to finish"
        ],
        content: [
            {
                title: "We take security seriously",
                content: "All Dev.co SQL developers put security first so you can scale your business with ease."
            },
            {
                title: "We’ll build the SQL back-end to support your applications",
                content: "Custom analytics solutions Custom data dashboards for you and your clients Online applications (for jobs, college admissions, grants, etc.) Contact databases (for business professionals, faculty, etc.) Personal record keeping for any industry, including healthcare and education A system for tracking borrowed items like books or equipment And more!"
            },
            {
                title: "SQL is an excellent way to manage big data",
                content: "SQL is a powerful programming language designed to manage data within relational databases, and it’s far more powerful for manipulating big data than other databases. If you’ve got big data to manage and you’re not using SQL databases, now is the time to start."
            },
            {
                title: "We can work with businesses in any industry",
                content: "At Dev.co, we work with businesses and enterprise brands from across the world in industries like healthcare, education, real estate, eCommerce, and government."
            },
            {
                title: "New to SQL? You’re making the right choice",
                content: "If you’re currently using MariaDB, Oracle Database, or IBM Db2, you’ll find SQL to be much easier to manage, more powerful, and cheaper. SQL can meet the needs of modern businesses of all sizes, from solopreneurs and startups to enterprise brands."
            }
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "Why use Dev.co for SQL server development?",
        description: [],
        content: [
            {
                title: "Fast time to market",
                content: "Our developers work quickly and efficiently; we’ll have your SQL project up and running in less time than it would take using other databases."
            },
            {
                title: "Consistent cross-platform experience",
                content: "No matter what device you’re using, you’ll get a consistent experience across all platforms."
            },
            {
                title: "Versatile deployment",
                content: "We’ll build SQL applications you can deploy anywhere."
            },

        ]
    }

    const fifth = null

    const sixth = [
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
            title: "Deliver & Integrate",
            content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
        }
    ]

    const seventh = {
        title: "We want to be your SQL server development partner",
        content: [
            "If you’re ready to partner with an industry-leading team of skilled developers, contact us to discuss your project. Let our SQL Server development & engineering services make your back-end software development project a success.",
            "Contact us today to hire one of our SQL Server development teams to complete your next project."
        ]
    }


    const eighth = {
        title: "Interesting Facts About SQL Server",
        content: [
            "Several companies provide SQL servers, including Microsoft, Oracle, and MySQL.",
            "Microsoft released its first SQL server in 1988 (version 1.0) and its code name was “Filipi”.",
            "Microsoft worked on the first SQL server with a company called Sybase.",
            "Microsoft’s SQL server version 15 was released in 2019 and was code named “Seattle”.",
            "SQL stands for Structured Query Language.",
            "SQL is pronounced “sequel”.",
            "SQL servers manage relational databases.",
            "56.5% of developers prefer using SQL databases.",
            "More than 151,000 people use Microsoft’s SQL Server.",
            "Microsoft SQL Server has 21.49% of the market share, while MySQL has 19.96%, Microsoft Access has 11.39%, and PostgreSQL has 5.67%.",
            "Computer software and IT services are the two industries that use Microsoft SQL Server the most.",
            "Microsoft SQL Server users are mostly from the US (47%) with 8% in the UK and 6% in India.",
            "36% of businesses that use Microsoft SQL Server have 10-50 employees.",
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;