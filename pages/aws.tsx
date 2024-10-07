import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "AWS Development Services",
        content: [
            "When it comes to current application infrastructure needs, Amazon Web Services (AWS) is one of the most popular and powerful options on the market. It’s leveraged by more than 1 million customers across more than 190 countries – numbers that continue to grow on a monthly basis. And with companies like Netflix, SAP, Pinterest, Expedia, and Dow Jones relying on it, you can rest assured that it’ll perform up to your standards.",
            "Amazon Web Services (AWS) is a cloud computing platform that offers a broad set of global compute, storage, database, analytics, application services, and deployment options. AWS is designed to make it easy for you to run your business on the cloud. You can use AWS services to power your distributed applications, store and manage your data, or extend your enterprise IT infrastructure.",
            "We offer a customized AWS developer or development team to each project, giving you the firepower you need to complete the most complex and interesting projects in the cloud."
        ]
    }

    const second = {
        title: "AWS Developer & AWS Cloud Services Consulting",
        description: [],
        content: [
            "We understand that you don’t have the time or expertise to handle AWS development in-house – and that’s okay! We have a carefully selected team of AWS developers with years of experience who are ready and able to create the right architecture for your specific needs.",
            "Already have AWS application project plan or AWS service APIs that you need guidance on? Our AWS developer team would be glad to walk alongside you to optimize and improve the existing technology so that it satisfies all of your needs and wants."
        ]
    }

    const third = {
        title: "Why Choose AWS Development?",
        description: [
            "AWS is a preferred platform for a variety of reasons. Our core AWS services and AWS certified developer team will work with you every step of the way. AWS is a place where you can go to develop custom applications. Amazon Web Services’ (AWS) cloud computing platform offers an extensive amount of worldwide compute, storage, database, analytics and deployment options. AWS is designed to make it easy for you to operate your business on the cloud. You can use AWS services to power your applications store data or manage enterprise IT infrastructure. You can use AWS to create a custom application for your business. And while every company has its own unique needs, here’s a look at some of the most common benefits"
        ],
        content: [
            {
                title: "Intuitive",
                content: "Appearances aren’t everything, but it’s nice to have a solution that looks good. Software and cloud native applications developed with Laravel are known for being aesthetically pleasing and highly intuitive. AWS is designed in such a way that application providers and vendors can easily host applications without having to go through some of the complex processes that other web service providers require. For instance, AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. OpsWorks lets you use Chef and Puppet to automate how you install, operate, and manage applications on AWS, including AWS CLI (command line interface). When you hire an in-house or contract AWS DevOps engineer, you will get the technical skills you need to offload your AWS cloud computing needs to someone who talks the AWS talk."
            },
            {
                title: "Reliable",
                content: "Consider, for a moment, that AWS serves as the backbone for the entire Amazon.com business - a multi-billion dollar operation that’s experienced tremendous year-over-year growth for more than a decade. When you leverage AWS, it’s that same reliability that you get. AWS is reliable because it has a number of features that help ensure your applications are always up and running. These features include: AWS offers multiple Availability Zones in each region, providing you with redundancy and high availability. AWS supports a variety of programming languages, frameworks, and applications. AWS provides a wide range of services and features that help you build robust applications. AWS is constantly adding new features and services, so you can always find the right solution for your needs."
            },
            {
                title: "Flexible",
                content: "AWS is a versatile web environment that allows you freedom of choice in the operating system, web application platform, programming language, server environment, etc. AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration."
            },
            {
                title: "Scalable",
                content: "Features and tools like Elastic Load Balancing and Auto Scaling make AWS highly scalable for businesses and teams of any size. AWS can automatically adjust how much compute power and storage you need based on how busy your site is. This happens with something called Elastic Load Balancing (ELB) and Auto Scaling.  AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java , .NET, PHP, Node.js, Python, Ruby, and Docker on familiar servers such as Apache, Nginx, passenger, and IIS. AWS CloudFormation gives developers and businesses an easy way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable way across a distributed systems architecture."
            },
            {
                title: "Cost-effective",
                content: "Only pay for the computing power, storage, and resources that you use. And with no up-front commitments or long-term contracts, you can save money today and in the future. AWS is cost effective because it offers a pay-as-you-go pricing model. With this model, you only pay for the resources you use, so you can scale your applications up and down as needed. AWS also offers a wide range of services and features that help you keep your costs down."
            },
            {
                title: "Secure",
                content: "AWS security is renowned for implementing industry-leading security best practices. This allows you to rest easy knowing that your applications and data are protected from would-be hackers. Amazon Web Services (AWS) provides a highly secure platform with multiple layers of protection. AWS is compliant with the most stringent security and privacy requirements, including the Health Insurance Portability and Accountability Act (HIPAA), the Payment Card Industry Data Security Standard (PCI DSS), and the Federal Information Security Management Act (FISMA). AWS has a comprehensive security program that includes features such as firewalls, intrusion detection systems, and multi-factor authentication. AWS also undergoes regular audits by independent third parties to ensure that its security controls meet or exceed industry standards. To learn more about Amazon Web Services security, visit the Amazon Web Services Security website."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "Our AWS Developer Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "Our AWS development process begins with a discovery phase where your AWS developer and project manager get a better understanding of your business, your goals, and the specific expectations for your software, application, or service."
            },
            {
                title: "Plan",
                content: "With all of the necessary insights, we begin planning your AWS development project so that we’re able to meet (and exceed) your expectations. During this phase, your AWS developer--experienced in a serverless application model-- will come up with lots of ideas, filter them through your desired outcomes, and only move forward with the best structure that fits in complex or basic AWS architecture scenarios."
            },
            {
                title: "Develop",
                content: "Because of the rigorous discovery and planning, we’re typically able to execute the development phase with minimal friction. During this part of the process, we bring your ideas to fruition in the form of a functional and high-performing solution that’s ready to be implemented right away."
            },
            {
                title: "Test",
                content: "Your AWS developer or AWS certified developer associate will follow up by careful testing and optimization to ensure all of the wrinkles are ironed out before they have a chance to cause any issues. This leads to superior results immediately at launch!"
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
            "AWS is a place where you can go to develop custom applications. You can use different programming languages and tools to make your applications work well. AWS has many security features to make sure your applications are safe. It also has a pricing model that lets you pay for the resources you use.",
            "At Dev.co, we’re proud to offer a cutting-edge AWS certified developer that meets and exceeds our client’s high expectations every step of the way. Contact us today to learn more about the process!"
        ]
    }


    const eighth = {
        title: "Interesting Facts About AWS",
        content: [
            "AWS started out as Merchant.com. It was originally launched as an ecommerce platform for retailers like Target.",
            "Contrary to popular belief, AWS makes the money.",
            "Amazon.com just spends it. Amazon, which has a market cap of $750 billion, generates the bulk of its revenue from AWS. The website side of things actually isn’t profitable.",
            "AWS has more than 70 different services, including networking, analytics, database, mobile, and software.",
            "Aurora is the fastest-growing product in the AWS lineup.",
            "While AWS is primarily an IaaS, it also has a variety of office collaboration apps.",
            "AWS services up to millions of requests per second.",
            "AWS uses 143 million hours a month of services from 2,500 different third-party software services.",
            "AWS revenue in 2019 was $35 billion.",
            "AWS enjoyed 45% IaaS market share in 2019.",
            "AWS has more than 1 million active users in 190 countries.",
            "AWS has 5x more deployed cloud infrastructure as the next 14 competitors have in aggregate.",
            "AWS has lowered prices of its services by a multiple of 60x since launch.",
            "1 in 3 internet users accesses a website powered by AWS on a daily basis.",
            "AWS adds as much new infrastructure on a daily basis as they used to run in total 7 years ago.",
            "AWS data services have increased by a whopping 96% in just the past year."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;