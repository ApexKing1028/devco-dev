import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Node.Js Development Services",
        content: [
            "Node.js is one of the newer server-side platforms around. It’s experiencing rapid adoption among large organizations and is renowned for being simple and easy to use. It’s powered by JavaScript and can be utilized in a variety of environments.",
            "Contrary to what many assume, Node.js is not a framework or library. It’s actually a runtime environment, based entirely on Chrome’s V8 JavaScript engine. First introduced in 2009 at the annual European JSConf, Node.js was immediately billed as “the most exciting single piece of software in the current JavaScript universe.” And more than a decade later, it’s still living up to the hype."
        ]
    }

    const second = {
        title: "Node.js Consulting & Development",
        description: [
            "Because of our extensive experience with Node.js, we’re also able to offer consulting, frameworks, and education to guide you through your own journey."
        ],
        content: [
            "At Dev.co, we’re proud to offer industry-leading Node.js planning, development, and deployment. ",
            "Not only do we use the top technologies in the industry, but we also employ rigorous testing and continual optimization and iteration.",
            "The result is advanced Node.js applications that your users will extract maximum value from."
        ]
    }

    const third = {
        title: "Why Choose Node.js?",
        description: [
            "Node.js might not get talked about as much as some other platforms, but it’s quietly relied on by dozens of tech giants and large enterprises, including Intel, NASA, Walmart, and Twitter. Here are a few of the reasons why they’re choosing Node.js:"
        ],
        content: [
            {
                title: "Scalability",
                content: "Thanks to powerful features like the Cluster module - which enables load balancing over multiple CPU cores - and tools such as the PM2 process manager - which makes it easy to optimize and deploy Node applications - Node.js is highly scalable. This makes it ideal for growing organizations and environments."
            },
            {
                title: "Superior support",
                content: "It’s difficult for a developer to write an app with confidence if there’s no guarantee that the language will still be relevant in the near future. The beauty of Node.js is that every major release is guaranteed to be actively maintained for at least 18 months (after which it enjoys an additional 12 months in maintenance mode)."
            },
            {
                title: "Cross-platform development",
                content: "Want to build cross-platform desktop apps? Electron and NW.js let you do just this. As a result, Node.js is one of the more versatile platforms around."
            },
            {
                title: "Plenty of free tools",
                content: "Versatility is always something developers look for in platforms they use. Node.js integrates with lots of free tools, which makes it more useful in a variety of settings and scenarios. "
            }
        ],
        other: [],
        additional: "The beauty of Node.js is that you don’t have to be a Fortune 500 company to use it. The platform works just as well for smaller businesses and ventures. But the fact that some of the world’s most successful organizations rely on it should tell you something about its features and reliability."
    }

    const forth = {
        title: "The DEV.co Node.js Development Process",
        description: [],
        content: [
            {
                title: "Learn",
                content: "We begin every process with discovery. We want to know who you are, what makes you tick, what your strengths are, where you can improve, and what you want to accomplish with this project."
            },
            {
                title: "Plan",
                content: "The next step is to create a plan that allows us to take you from where you are to where you want to be. If Node.js can help us get there, great! If not, we’ll suggest another platform."
            },
            {
                title: "Execute",
                content: "Now it’s time for us to roll up our sleeves and get dirty. We’ll get busy executing so that we can quickly provide you with a usable version to gather feedback."
            },
            {
                title: "Test",
                content: "Once the first version of the application is produced, we’ll work with your team to test and gather feedback on what works, what doesn't, and where changes can be made."
            },
            {
                title: "Iterate",
                content: "With testing and feedback in hand, we’ll iterate until we deliver the best possible application for your end-user."
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
        title: "Contact Dev.co Today",
        content: [
            "Want to learn more about how Dev.co can help your business leverage Node.js to reach your goals?",
            "Contact us today and we’ll be happy to discuss in further detail."
        ]
    }


    const eighth = {
        title: "Interesting Facts About Node.Js",
        content: [
            "Node.js is a server-side platform. This means JavaScript isn’t limited to only working in the browser.",
            "Node.js is powered by Google V8 engine, which is the same runtime as Google Chrome uses to execute JavaScript in the front-end.",
            "Some of the world’s largest businesses use Node.js, including Amazon, Netflix, eBay, LinkedIn, Reddit, and PayPal.",
            "43% of Node.js developers use it for enterprise applications. 85% use it primarily for web app development.",
            "PayPal saw a 35% decrease in their average response time after deploying Node.js.",
            "Node.js is known to increase application performance by 50% and reduce dev costs by 58%.",
            "The United States represents Node.js’ largest custom base – more than 36,000 websites.",
            "Russia and China each have 10,000+ websites (coming in second and third, respectively).",
            "Node.js is shown to consistently boost business productivity. (Just 4% of companies say Noe.js has no impact.)",
            "The typical Node.js user is a male, 31-year-old, college educated, white developer.",
            "Node.js is used in more than 85 countries across 45 different native languages.",
            "The most popular industry verticals for Node.js include computers and electronics, law and government, lifestyle, and arts and entertainment."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;