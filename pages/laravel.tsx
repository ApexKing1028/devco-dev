import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Laravel Development Services",
        content: [
            "When it comes to custom software development, Laravel is a very popular option. It’s by far one of the most starred PHP frameworks on Github, with nearly 60,000 developers from around the world using it to build faster websites and more efficient web apps. And at Dev.co, we’re proud to offer custom Laravel development services to help you meet and surpass your goals.",
            "As the best Laravel development company, we provide expert Laravel developers who are dedicated to driving your business growth. Whether you’re looking to enhance web applications or streamline your development process, our team is here to deliver exceptional results."
        ]
    }

    const second = {
        title: "Laravel Development & Consulting",
        description: [
            "You can choose from any number of Laravel frameworks for your next development project, but Laravel is popular for a reason. And if you’re looking for high-level functionality without long delays, it’s an option worth considering.",
            "Laravel development companies often provide robust solutions for enterprise software development, making it a solid choice for businesses aiming to scale efficiently. Additionally, partnering with a reputable web development company for your website development needs ensures you leverage Laravel’s full potential to create dynamic, high-performance applications."
        ],
        content: [
            "At Dev.co, our deep understanding of Laravel architecture empowers us to create any custom solution or web application that you can dream up. Our developers have thousands of hours of collective experience building software in a variety of industries and niches. So whether you’re in education, finance, eCommerce, or some tiny industry in between, we can help. ",
            "With our dedicated development team, we offer tailored custom web application development and mobile app development services to meet your unique needs. From a skilled Laravel developer to a strategic project manager, we ensure that every aspect of your project is handled with expertise and precision."
        ]
    }

    const third = {
        title: "Why Choose Laravel?",
        description: [
            "It’s designed to be beautiful, engaging, and immersive. If you’re looking for an elegant, feature-rich application, this framework should certainly be at or near the top of your list. Benefits include:"
        ],
        content: [
            {
                title: "Gorgeous interfaces",
                content: "Appearances aren’t everything, but it’s nice to have a solution that looks good. Software and applications developed with Laravel are known for being aesthetically pleasing and highly intuitive."
            },
            {
                title: "Highly secure",
                content: "You need to be assured that your web application is safe and secure for users. A failure to do so could create serious financial and legal ramifications. Thankfully, Laravel features high-level security straight “out of the box.” It has a very simple method for sorting out authorization logic and control access. This makes security very easy to monitor and manage."
            },
            {
                title: "High-level email integration",
                content: "All Laravel web applications can easily be integrated with any mail service for email notifications. It also provides drivers for Mandrill, SMTP, Mailgun, SparkPost, and Amazon SES. This means any application can get started with a relatively small amount of effort."
            },
            {
                title: "Faster delivery",
                content: "Laravel applications can be created much faster and more efficiently than other frameworks. This ultimately streamlines the process and speeds up the process from idea to usable application."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co Laravel Development Process",
        description: [
            "We take the Laravel development process very seriously. Regardless of the industry or intended application, we promise to be thorough and strategic in our approach. This includes a four-part process where we:"
        ],
        content: [
            {
                title: "Discover",
                content: "Any developer who tries to create an application or software solution for you without first digging in and uncovering your expectations and goals is doing you a disservice. We believe this is one of the most important steps in the process and work hard to ensure we have all of the information we need to create a solution that adds value."
            },
            {
                title: "Plan",
                content: "Information is only useful if it’s used to create a plan. So in our second step, we develop a formulaic approach to bring your application to life. You can be as involved or hands-off in this process as you want to be."
            },
            {
                title: "Develop",
                content: "Now it’s time for the actual development to take place. Our Laravel development process involves a system of checks and balances to ensure you get the best possible end product."
            },
            {
                title: "Test",
                content: "No web development project is complete without rigorous testing and optimization to work out the bugs and smooth over any friction that may exist."
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
        title: "Contact Dev.co Today",
        content: [
            "Want to learn more about how Dev.co can help your business leverage Node.js to reach your goals?",
            "Contact us today and we’ll be happy to discuss in further detail."
        ]
    }


    const eighth = {
        title: "Interesting Facts About Laravel",
        content: [
            "There are more than 430,215 websites currently using Laravel.",
            "The United States is the number one user base for Laravel with 187k+ live sites.",
            "Laravel is the most popular development platform in the United States in the Web App category.",
            "Laravel enjoys 25% market share among PHP frameworks. This makes it the number one choice in the industry.",
            "The top three industry verticals where Laravel is used are: computers and electronics (6%), science and education (2.96%), and arts and education (2.67%).",
            "Through the use of an extremely simple syntax, Laravel makes seamless mapping object-oriented. This makes it highly compatible across nearly every platform.",
            "Laravel has a modular instinctive packaging system built in, which helps speed up development processes and saves significant time.",
            "Laravel features an MVC structure that splits every component of the web app into individual code. This makes it easy to control and modify without risking significant changes to the entire application.",
            "Laravel takes care of web app security from within its own framework. This makes it highly secure and reduces the security requirements of the end user."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;