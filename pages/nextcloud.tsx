import * as React from "react";
import Skill from "@/components/skills";
import { m } from "framer-motion";

const Page = () => {
    const first = {
        title: "Nextcloud Development Services",
        content: [
            "Are you looking for custom development or consultative services related to Nextcloud? You’ve come to the right place.",
            "At DEV.co, our team of Nextcloud professionals can help you design, develop, and deploy the Nextcloud solutions you need."
        ]
    }

    const second = {
        title: "What Is Nextcloud?",
        description: [
            "However, for some businesses, Nextcloud simply isn’t enough. It doesn’t offer all the features you need, doesn’t have the interface you want, and/or doesn’t have the level of security you need in your organization.",
            "That’s where custom Nextcloud developers come into play.",
            "Nextcloud is an open source file hosting service, designed to help you store and access the files your company needs to remain productive."
        ],
        content: [
            "With Nextcloud, you’ll have access to dozens of built-in features to help you keep your files secure and improve your team’s productivity.",
            "For example, you’ll be able to tag files with custom tags, search for files, and even name favorites so you can find them easily. ",
            "You can also share files between team members and with people from other organizations.",
            "Default security features also give you administrative control over your users—all while your data is protected with antivirus scanning and encryption."
        ]
    }

    const third = {
        title: "Nextcloud Development Services",
        description: [
            "With Nextcloud development services, you’ll have the ability to custom design and develop your own Nextcloud features.",
            "These could be replacement features, overwriting what Nextcloud already offers, supplementary features to enhance Nextcloud’s core product, or ways to integrate with other products.",
            "For example, Nextcloud development can help you get access to:"
        ],
        content: [
            {
                title: "More robust search features",
                content: "More robust search features"
            },
            {
                title: "Smart folders",
                content: "Which allow you to link different documents together, and manage different versions conveniently."
            },
            {
                title: "Better mobile access",
                content: "So your team can access files on the go"
            },
            {
                title: "Stricter permissions",
                content: "so you can establish better security and access protocols within your organization."
            },
            {
                title: "Custom workflows",
                content: "streamlining your team’s productivity and allowing you to create custom forms."
            },
            {
                title: "Tighter version control",
                content: "so it’s clearer who’s edited which files and when."
            },
            {
                title: "Specific folder rules",
                content: "so you can create how the content of each individual folder is managed."
            },
            {
                title: "Compliance features",
                content: "including transparent records management."
            }
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co Develop for Nextcloud",
        description: [
            "When we start a new Nextcloud development project, we follow these phases:"
        ],
        content: [
            {
                title: "Discovery",
                content: "First, we’ll get to know more about your business, including how you plan to use Nextcloud and which features you need most."
            },
            {
                title: "Brainstorming and prototyping",
                content: "Together, we’ll brainstorm the possible solutions and begin designing functional prototypes to test our ideas"
            },
            {
                title: "Agile development",
                content: "Through agile development methodologies, we’ll iteratively bring your features to life."
            },
            {
                title: "Testing and deployment",
                content: "After a few thorough rounds of testing, we’ll be ready to deploy your products to a live environment."
            },
            {
                title: "Ongoing support",
                content: "From there, we’ll make sure your custom Nextcloud project continues to work as intended."
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
        title: "Contact DEV.co today!",
        content: [
            "With the right Nextcloud development partner, you can improve productivity, assure compliance, and get access to all the features you need to succeed.",
            "If you’re ready for a free quote or consultation"
        ]
    }


    const eighth = {
        title: "Interesting Facts About Nextcloud",
        content: [
            "Nextcloud is entirely open source as a hosting service, designed to help you remain efficient and productive.",
            "Nextcloud started with employee funding only.",
            "Today, Nextcloud has more than 250,000 servers online.",
            "Nextcloud is modular, granting users the ability to add new and augmented functions. The app store currently has more than 200 extensions.",
            "Some of the most popular add-ons include: contacts (CardDAV) RSS feed readers streaming media apps (Ampache) browser-based text editors a URL shortening suite calendars (CalDAV) integration of content management systems (like Pico) galleries document viewer tools from within Nextcloud connection to Dropbox, Google Drive, Amazon S3, and other services bookmarking services web analytics (Matomo) weather forecasting viewer for DICOM map viewers",
            "Nextcloud’s architecture is written in PHP and JavaScript. It also employs the use of sabre/dav, which is an open source WebDAV server.",
            "Nextcloud is compatible with SQLite, MariaDB, MySQL, Oracle Database, and PostgreSQL, as well as several other database management systems.",
            "Nextcloud’s goal is to scale to reach hundreds of millions of users in the next several years.",
            "Recently, Nextcloud announced the deployment of version 18, known as Nextcloud Hub. This version offers an office package (OnlyOffice), and is designed to compete with products like Microsoft Office and Google Docs.",
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;