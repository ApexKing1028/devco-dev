import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Electron Development Services",
        content: [
            "Electron might sound like a stable subatomic particle with a charge of negative electricity, but it’s also a popular open-source software framework that’s developed and maintained by GitHub.",
            "Regularly used to build desktop apps, it’s a strategic combination of Chromium and Node.js technologies. Node.js is used for the back-end operations, while Chromium assumes responsibility for the front-end.",
            "Electron enables developers to create cross-platform desktop apps using a variety of web technologies like Javascript, HTML, and CSS. This enables it to be effortlessly deployed to Windows, Mac, or Linux to meet any user need. It also lowers the overall cost of developing the app."
        ]
    }

    const second = {
        title: "Electron.js Consulting & Development",
        description: [
            "Whether you’re looking for Electron application development, consulting, or a hybrid of the two, we can help you from the starting blocks to the finish line."
        ],
        content: [
            "At Dev.co, we’re proud to be one of the industry leaders in Electron.js planning, development, and testing. We follow all industry best practices and lead the way in terms of innovation and advancement.",
            "Our team of developers have years of experience and are collectively committed to delivering on a wide range of custom features to satisfy your needs."
        ]
    }

    const third = {
        title: "Why Choose Electron.js?",
        description: [
            "Electron js is a preferred app framework for numerous reasons, including benefits such as the following:"
        ],
        content: [
            {
                title: "Simple to learn",
                content: "From a developer perspective, Electron is one of the easier frameworks to learn and deploy. This saves both the developer and client time and money."
            },
            {
                title: "Superior support",
                content: "It’s difficult for a developer to write an app with confidence if there’s no guarantee that the language will still be relevant in the near future. The beauty of Node.js is that every major release is guaranteed to be actively maintained for at least 18 months (after which it enjoys an additional 12 months in maintenance mode)."
            },
            {
                title: "Top-notch security",
                content: "All information is locally stored within the system. This makes the transferring of the existing app to a cross-platform applications using Electron highly safe and secure."
            },
            {
                title: "Reusable framework",
                content: "Electron.js apps tend to be developed much faster than native apps. That’s because only a single code is implemented into multiple platforms. This reusability saves time and money, resulting in a much more efficient process for all parties involved."
            },
            {
                title: "Chromium browser",
                content: "The fact that Electron.js uses chromium for UI display makes it easy to implant all of the latest updates and features of Chrome. And with hot reloading and live reloading features included, the process is quick and streamlined. (It’s also unnecessary to use an external debugger, as it’s able to detect errors and memory leakage on its own.)"
            },
            {
                title: "Efficient",
                content: "One of the biggest perks of Electron is that it’s highly efficient. This means you get your application in less time and at less cost."
            }
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co Electron.js Development Process",
        description: [],
        content: [
            {
                title: "Discovery",
                content: "It’s impossible to develop a useful application without first analyzing wants, needs, expectations, and outcomes. That’s why we begin every process with a detailed discovery phase."
            },
            {
                title: "Planning",
                content: "Armed with the information we need, our team of developers work together to create an actionable plan that will bring the best ideas to light."
            },
            {
                title: "Development",
                content: "Once the plan is approved, we quickly move into the design and development phase. This is the most exciting and transformational phase of the process."
            },
            {
                title: "Testing",
                content: "Once a viable product is brought forth, we can begin testing and gathering feedback. Based on this feedback, we iterate and optimize to achieve a final result that aligns with your overarching objectives."
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
        title: "Contact DEV.com Today",
        content: [
            "At DEV.co, we take pride in delivering tremendous value to our clients.",
            "We do so through world-class development, frictionless communication, and a collaborative spirit that believes in working together to innovate and advance new ideas.",
            "For more information on our Electron.js development process, please contact us today!",
            "We’d be happy to work together, or to steer you in the direction that’s most appropriate."
        ]
    }


    const eighth = {
        title: "Interesting Facts About Electron",
        content: [
           "Just 22% of developers surveyed say they’ve personally used Electron. More than 53% say they would like to learn.",
           "When asked to describe what they like about Electron, the three most common answers were: well-established, full-featured and powerful, and good documentation.",
           "Electron was formerly known as Atom Shell.",
           "Electron is an open-source software framework that’s developed and maintained by GitHub.",
           "Electron combines the Node.js runtime with Chromium rendering engine.",
           "Popular desktop applications use Electron include WebTorrent Desktop App, WordPress Desktop Apps, Ghost Desktop App, Beaker Browser Desktop App, Pexels Desktop Electron Apps, Slack Desktop Electron Apps, and WhatsApp Electron Apps."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;