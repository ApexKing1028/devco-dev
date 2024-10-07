import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Salesforce Development Services",
        content: [
            "When it comes to trust and brand recognition, few names are more powerful than Salesforce. At DEV.co, we’re proud to offer cutting-edge, industry-leading development services that are designed to help you take your business to the next level.",
            "As Salesforce Silver Partners, your custom Salesforce development project will include a dedicated Salesforce developer who will act as a project manager, getting you the custom features, functions and workflows your CRM needs to be the engine for business growth for many years to come!"
        ]
    }

    const second = {
        title: "Salesforce Development & Consulting",
        description: [],
        content: [
            "At DEV.co, we implement an agile methodology of software development that helps our clients achieve their goals and objectives in a fraction of the time. Our team of salesforce developers can help you plan, design, configure, and deploy your app with minimal friction. Our team also consists of experienced Salesforce consultants who can help you improve, optimize, or manage your existing Salesforce solutions.",
            "When you are in the market for a Salesforce developer or team of Salesforce developers, get in touch with our team to discuss your project goals and requirements. "
        ]
    }

    const third = {
        title: "Why Choose Salesforce?",
        description: [
            "The Salesforce developer platform attracts businesses and developers for a variety of reasons, but one of the most compelling benefits is found in the ability to extend the core platform via custom Salesforce application development. Read on to learn more about why you should consider selecting Salesforce as your platform of choice:"
        ],
        content: [
            {
                title: "App development",
                content: "The ability to develop standalone apps for Salesforce - apps that work on top of your existing Salesforce developer implementation - is an incredible opportunity. It enables you to improve existing applications, move other existing applications over to the Salesforce platform, and integrate features to establish even more robust solutions with a dedicated Salesforce developer."
            },
            {
                title: "Salesforce customizations",
                content: "You can customize and modify applications on Salesforce developer cloud (including App, Service, Marketing, and Community). Our Salesforce developer team will also provide the on-going support post-project to ensure your custom-developed applications work flawlessly."
            },
            {
                title: "Salesforce app integration",
                content: "With the capability to integrate Salesforce.com into your social media, website, ERP, Google Analytics, and other third-party applications, total versatility and flexibility are within reach. Your efficient Salesforce developer will add API integrations and custom applications seamlessly with your Salesforce administrator account."
            },
            {
                title: "Robust analytics",
                content: "A good platform is useless without an advanced analytics engine attached to it. And while there are plenty of good systems out there, Salesforce Wave Analytics Cloud (and other third-party analytics solutions built for a Salesforce administrator) are among the best. Tap into them to gain powerful insights and data modeling across your business. Your Salesforce administrator will integrate the Salesforce Wave Analytics to provide the business intelligence insights your organization needs to succeed."
            },
        ],
        other: [],
        additional: "These are just a few of the perks. Salesforce is also backed by an active and engaged community of users and Salesforce developers (including Salesforce consultant teams who hold applicable Salesforce certification), which makes it easy to gather support and insights as you move forward."
    }

    const forth = {
        title: "The DEV.co Development Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "Every Salesforce software development process begins with an emphasis on understanding your business at a core level. We want to get familiar with the DNA of your organization so that our project managers and team of Salesforce developers can uncover your true objectives, needs, and wants."
            },
            {
                title: "Plan",
                content: "With a thorough understanding of your business and brand, our Salesforce developers transition into the planning phase. It’s during this process that we create a loose framework for how we’ll achieve your goals. You can be as involved or hands-off in the planning process as you’d like"
            },
            {
                title: "Develop",
                content: "Now comes the fun part: developing your Salesforce apps. And because our Salesforce developers do such a thorough job on the front end, our software engineering process is typically very efficient. The Salesforce developer you hire will be dependent on the specific features you want in your application or how you want us developing customer facing interfaces."
            },
            {
                title: "Test",
                content: "No Salesforce app development process is complete without some testing and optimization. We’ll continue to improve upon the app until our Salesforce developers are convinced it’s bug-free and up to your standards. Subsequent to testing and launch, a Salesforce developer will also be available for providing technical training, giving you the advanced knowledge you need for managing your Salesforce application going forward."
            }
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
        title: "Partner With DEV.co",
        content: [
            "help you achieve your goals in minimal time and at a cost-effective price point?",
            "Contact us today and we’d be happy to answer any questions you might have."
        ]
    }


    const eighth = {
        title: "Interesting Facts About Salesforce",
        content: [
            "The Salesforce platform dominates the CRM industry – capturing one-third of all users.",
            "Salesforce is considered the number one CRM in the world.",
            "Salesforce was launched in 1999.",
            "Roughly 34% of Salesforce revenue comes from Sales Cloud sales.",
            "Salesforce invented the App Store before Apple. While they called it the AppExchange (launched in 2005), it was originally intended to be called the App Store and the name was trademarked by Salesforce. CEO Marc Benioff eventually gifted the name to Steve Jobs as a thank you for his support over the years.",
            "Salesforce generated $13.3 billion in 2019.",
            "Salesforce currently has 150,000+ customers.",
            "83% of Fortune 500 companies are Salesforce customers.",
            "The Salesforce Tower, also known as the Transbay Tower, is the tallest building in San Francisco (and the second-tallest in the United States).",
            "There are more than 3,500 apps on the Salesforce AppExchange.",
            "Salesforce is often ranked #1 on the Fortune 100 Best Companies to work for."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;