import * as React from "react";
import Service from "@/components/services";

const Page = () => {
    const first = {
        title: "Mobile Development Company",
        content: ["Today’s consumers are relying on mobile apps for nearly all their personal and professional needs. If your business doesn’t yet have a mobile app, or if you’re considering developing a mobile app as part of a new business venture, you’ll need an experienced mobile development company to help you construct the app you need."]
    }

    const second = {
        title: "Mobile Development: From Idea to Reality",
        description: [""],
        content: ["A mobile development company can help you take an initial idea, and turn it into a fully functioning mobile app."]
    }

    const third = [
        {
            title: "Mobile Development",
            description: ["Mobile apps come in a variety of forms, and serve a wide range of potential purposes.", "But successful mobile apps—which have yield a positive return on investment (ROI) or greatly improve your customers’ experience—have a few important qualities in common:"],
            content:
                [
                    {
                        title: "Creativity",
                        content: "Good mobile apps follow standard best practices, but also incorporate creative new elements. Creativity is present in both the aesthetics and the functionality of the app."
                    },
                    {
                        title: "Intuitiveness",
                        content: "Successful mobile apps are also easy to learn and use. Users should be able to understand how your app works almost immediately, with minimal instruction."
                    },
                    {
                        title: "Complete functionality",
                        content: "Obviously, your app should work as intended. It should be consistently functional across all supported platforms, with minimal bugs, glitches, or interruptions in use."
                    },
                    {
                        title: "Security",
                        content: "Even if you’re not actively gathering data from your users, your app could serve as a potential attack vector. It’s important to design and develop your app with security best practices in mind."
                    },
                    {
                        title: "Ongoing support",
                        content: "The best mobile apps enjoy the ongoing support of their developers, with new features, quality of life improvements, and security updates regularly deployed."
                    }
                ]
        },
    ]

    const forth = [
        {
            title: "Mobile Development Services",
            description: "Whatever your mobile app development needs are, we have services that can help you.",
            content: [
                "Mobile strategy and consulting.",
                "Cloud application support.",
                "Existing mobile app redesign.",
                "iOS and Android development support.",
                "Cross-platform development."
            ]
        },
        {
            title: "Mobile Development Company Capabilities",
            description: "Mobile Development Company Capabilities",
            content: [
                "iOS app development.",
                "Native and cross-platform app testing, maintenance, and support.",
                "Android app development.", 
                "Native and cross-platform app improvement.",
                "Windows app development.",
                "Data migration.",
                "Xamarin app development.",
                'PhoneGap app development.',
                "Mobile web app development.",
                "Progressive web app (PWA) development.",
                "Mobile platform migration.",
                "App reengineering.",
                "Custom reporting and integrated dashboards"
            ]
        }
    ]

    const fifth = null

    const sixth = {
        title: "The Agile Mobile Development Proces",
        description: [
            "At DEV.co, we follow agile software development methodologies for our mobile app development.",
            "That means our mobile apps evolve as a collaborative effort between developers and clients, and utilize adaptive planning—rather than working from a single, immutable outlined framework.",
            "We feel agile development lends itself to more innovative mobile apps, while also hastening the development process. Accordingly, we split our mobile app development into a handful of important phases:"
        ],
        content: [
            {
                title: "Discovery and research",
                content: "Our developers and team leaders work with you directly to learn more about your web application goals, your current assets, and which problems you’re trying to solve."
            },
            {
                title: "Planning and workshopping",
                content: "Together, we’ll begin to plan and workshop various ideas."
            },
            {
                title: "Design",
                content: "With the help of wireframing, we’ll put together an introductory design for your web app."
            },
            {
                title: "Development",
                content: "From there, we can begin coding and development."
            },
            {
                title: "Testing",
                content: "After the web application is completed, we’ll thoroughly test the app to make sure it works as intended."
            },
            {
                title: "Deployment",
                content: "With testing complete, we can go live."
            },
            {
                title: "Maintenance and support",
                content: "After launch, we continue to provide you with ongoing support, including regular maintenance and updates."
            }
        ]
    }

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
        title: "Contact DEV.co",
        content: ["Are you interested in developing a mobile app for your business?", "Or do you need advice on your current mobile technology?", "Contact DEV.co today for a free quote, or a free consultation!"]
    }

    const tenth = null

    return (
       <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;