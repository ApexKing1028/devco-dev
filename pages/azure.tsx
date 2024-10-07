import * as React from "react";
import Skill from "@/components/skills";
import { m } from "framer-motion";

const Page = () => {
    const first = {
        title: "Azure Development Services",
        content: [
            "Cloud computing was once a luxury that larger businesses tinkered with to gain a competitive edge. Today, it’s the gold standard for multinational organizations and small businesses alike.",
            "And if your company is looking for a powerful platform that enables you to deploy solutions across a variety of languages, our Microsoft Azure cloud development and engineering services have been designed with you in mind."
        ]
    }

    const second = {
        title: "Azure Development & Consulting",
        description: [
            "The Microsoft Azure cloud based platform is one of the go-to solutions for businesses that proactively pursue growth. But if you’re like most businesses, you don’t have the time, expertise, or internal resources to manage this aspect of your overall strategy."
        ],
        content: [
            "At Dev.co, we’re proud to offer industry-leading Azure development services for small businesses and large organizations alike. ",
            "We also have Azure consultants who are fully prepared to guide and assist you with any needs or pain points you may have."
        ]
    }

    const third = {
        title: "Why Choose Azure?",
        description: [
            "Azure makes deploying a diverse array of solutions across a variety of languages a breeze.",
            "Whether it’s PHP, Java, .Net, Python, or Node.js, Azure is fully equipped to offer these platforms as a service so they can easily scale to meet any demand at a cost-effective price point (when compared to traditional hosting). Benefits of using Azure include:"
        ],
        content: [
            {
                title: "Flexible",
                content: "Tired of rigid solutions? Azure offers a level of flexibility that’s unmatched across the industry. And because you pay as you consume, you’re able to easily accommodate business fluctuations in a cost-effective manner"
            },
            {
                title: "High-level security",
                content: "Not only is all data stored in compliance with the most rigorous regulations in the industry, but Azure’s two data centers look like something out of a Hollywood spy thriller. They even have a global incident response team that’s trained to handle any issues that may emerge."
            },
            {
                title: "Global scale",
                content: "You can choose to host apps both manually and automatically on Microsoft’s global data center infrastructure. Plus, the Azure web app service ensures SLA uptime up to 99.5 percent."
            },
            {
                title: "SaaS app integration",
                content: "For businesses, the ability to create secure integration of web apps with other SaaS apps (like Salesforce or Office 365) is a very attractive and practical benefit."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co SolidWorks Development Process",
        description: [],
        content: [
            {
                title: "Discovery",
                content: "The discovery phase is arguably the most critical aspect of this entire process - yet it’s one that most other developers ignore. During this stage, we’ll uncover your company’s big picture goals so that we can develop solutions that align with your vision"
            },
            {
                title: "Plan",
                content: "This is a pragmatic part of the process where we figure out how we’re going to help you get from where you are to where you want to be. We do so by outlining the rest of the development journey in a step-by-step fashion."
            },
            {
                title: "Develop",
                content: "Our team of world-class Azure developers will take this plan and execute to produce solutions that are functional, beautiful, and intuitive."
            },
            {
                title: "Test",
                content: "It’s not enough to develop a solution. The real magic happens during testing and optimization. With each new iteration, key improvements lead to enhanced results."
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
        title: "Partner With DEV.co",
        content: [
            "At Dev.co, Azure development and engineering services are one of our specialties.",
            "If you’d like to learn more about how the Azure cloud platform can be leveraged to grow your business and/or expand your service offerings, please don’t hesitate to contact us!"
        ]
    }


    const eighth = {
        title: "Interesting Facts About Azure",
        content: [
            "Microsoft Azure is a cloud Based computing service that was created by Microsoft for the purpose of building, testing, deploying, and managing applications via managed data centers",
            "Microsoft Azure was released on February 1, 2010. It was originally named Windows Azure before being renamed to Microsoft Azure in 2014.",
            "The original project for Microsoft Azure was code-named “Project Red Dog.”",
            "There are 20,000+ Microsoft Azure customers.",
            "85% of Fortune 100 companies are on the Microsoft Cloud.",
            "Microsoft Azure has a 15.5% share of the global IaaS market.",
            "Microsoft Azure enjoys 31% of the entire cloud market.",
            "There are 6 million Microsoft Azure Government Cloud users.",
            "More than 300k developers use the Microsoft Azure Bot Service.",
            "Microsoft Azure is currently in 140 countries and counting.",
            "The Microsoft Cloud is HUGE. It’s connected by enough fiber to stretch from earth to the moon and back three times!",
            "The Microsoft Azure Cloud global infrastructure is 100% carbon neutral.",
            "44% of Microsoft Datacenter Energy is derived from wind, solar, and hydropower."
        ]
    }

    const nineth = {
        title: "Frequently Asked Questions (FAQs)",
        description: "",
        content: [
            {
                title: "What are Azure development services?",
                content: "Azure development services are a collection of tools that live in the cloud and help developers create, launch and maintain applications on Microsoft’s Azure platform. These services cover everything from handling compute tasks (basically crunching data), storing information securely, and networking (so your app can talk to other apps), all the way up to advanced areas like analytics for data interpretation or machine learning tools for AI-based projects."
            },
            {
                title: "What are the benefits of using Azure development services?",
                content: "If you’re considering using Azure development services for your apps, you’ll be pleased to know that they come with a ton of benefits. First off, these services can increase your agility by letting you quickly and easily build and deploy applications. That means less time spent wrestling with technology and more time actually getting stuff done! Another great perk is the scalability – since Azure development services can adjust resources based on how much (or little) you need them, it’s easy to keep things running smoothly no matter what size project you’re working on.  Plus, reliability is key when it comes to any kind of tech – but luckily, Azure development services have got your back in this department too. With high levels of uptime and performance tuning optimization built right in, you can trust that your apps will be ready to go whenever you need them. Lastly, security. Of course, we all want our data kept safe from prying eyes or malicious hackers – which is why it’s reassuring that Azure development services prioritize safety measures like encryption protocols, identity management features, and threat detection tools."
            },
            {
                title: "What are some of the most popular Azure development services?",
                content: "Here are some of the most popular Azure development services: Azure App Service: It’s an all-in-one platform for web applications and APIs, with full management included. Azure SQL Database: This one’s a fully managed relational database service. Azure Cosmos DB: Offers distributed and multi-model databases on a global scale. Azure Storage: If you’re looking for data storage options solutions, check this out. It’s durable, scalable, and highly available. Azure Functions: If you want to run code without having to fuss around with servers too much (who doesn’t?), give Azure Functions a spin. It makes use of serverless technology so you can focus more on programming and less on server maintenance tasks."
            },
            {
                title: "What are some of the challenges of using Azure development services?",
                content: "It’s important to be aware of a few challenges when using Azure development services: First off, these tools and technologies can be pretty intricate – so don’t be surprised if it takes some time for you to get the hang of everything. With enough patience and practice (and maybe a little guidance from helpful resources), though, you’ll become an Azure pro before you know it! Another factor is cost. Depending on your needs, certain Azure offerings may be pricier than others. It’s crucial to take a close look at what exactly each service offers ahead of time so that you can select those that best align with your budget. And while security-wise, Azure services have got your back covered by design, and it’s still important to do your part when it comes to maintaining data safety. Staying alert and following cyber-security best practices will help ensure that all your valuable info remains secure from any possible vulnerabilities or cyberattacks out there."
            },
            {
                title: "How do I find a good Azure development services company?",
                content: "If you’re on the hunt for an Azure development services company, there are a few key factors to keep in mind: Experience matters – so look for a company that has some solid experience and strong knowledge of developing and deploying applications specifically on Azure. You want a team that knows what they’re doing and can tackle any challenges that might come up. Expertise is another important consideration. Make sure the company you choose has particular expertise in the specific Azure services tailored to your needs. Whether it’s data analytics or virtual machines, you’ll want specialists who have deep knowledge of the tools relevant to your project. Capabilities are crucial too! Not all companies will be able to accommodate everything on your wishlist – maybe scalability, security, or compliance is particularly important for your project’s success. Be sure any potential partners have not just technical know-how but also practical capabilities when it comes to meeting these requirements. Finally, don’t forget about checking references! Ask around with previous clients so that you can get firsthand accounts from others who’ve worked with this company before. It’s always great to hear reviews from other people before making final decisions!"
            },
            {
                title: "What are the future trends in Azure development services?",
                content: "Here are a few trends we can expect in the near future: First off, it looks like serverless computing is about to have its moment. If you’re not familiar, this cutting-edge approach allows developers to run code without having to fuss over managing servers themselves (which means faster deployment times and way less stress). Next up is machine learning. This technology already powers loads of cloud-based apps out there, but signs point to it becoming even more influential as time goes by. Lastly, as more and more people rely on cloud-based applications for their day-to-day needs, security is going to be top-of-mind for everyone involved – from clients all the way up to app developers themselves. So keeping those systems locked down against potential threats will remain just as vital as ever!"
            },
            {
                title: "What are the different pricing options for Azure development services?",
                content: "If you’re thinking about utilizing Azure development services, it’s good to know that their pricing structure is based on a pay-as-you-go model. This means that you’ll only be charged for the resources that you actually use. Now, there are different pricing options available depending on what specific service(s) you’re interested in. Here’s a quick breakdown: For compute services (aka when you need virtual machines), your final cost will depend on how many machines you utilize, how much memory they require, and how much storage space they take up. If it’s storage services you need, Azure prices its offerings according to both the amount of space required and the type of storage utilized. Azure networking costs vary based on bandwidth usage as well as which particular type of networking service is being used. Database-related needs come with their own set of factors to consider when calculating price – like database size, type, and volume of traffic. Finally, if analytics services are what brings you knocking at Azure’s door, then we’re looking at fees calculated against the data stored or analyzed via those tools, plus processing demands required by your organization."
            },
        ]
    }

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;