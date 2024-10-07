import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Unity Development Services",
        content: [
            "Unity is a game-engine that’s backed by a powerful software environment that makes it one of the preferred systems for producing beautiful, lifelike 3D games, scenes, and simulations.",
            "It’s an all-in-one platform that’s gained significant traction and attention throughout the game developer community over the past few years. And if you’re looking to design or develop a game, it’s a framework that should absolutely be on your radar."
        ]
    }

    const second = {    
        title: "Unity Development & Consulting",
        description: [],
        content: [
            "Already have a game and want help tweaking, improving, or creating a related game? Our Unity consultants would be happy to help you attack these challenges in a head-on fashion.",
            "While games are often intended to be lighthearted, fun, and exciting, we don’t let the levity of the end product impact our focus or attention to detail.",
            "We believe developing fun games is serious work, which is why we work hard to ensure our development process is top-notch each step of the way."
        ]
    }

    const third = {
        title: "Why Choose Unity?",
        description: [
            "Unity can handle graphics and rendering with ease. ",
            "It also has the ability to deploy to a variety of devices and operating systems mobile and desktop alike. Benefits of the platform include:"
        ],
        content: [
            {
                title: "Excellent platform support",
                content: "Unity supports 27 platforms in all. This makes it easy to share between a variety of systems including PC, mobile, and web. This agility typically speeds up the game development process and results in a smoother rollout with fewer delays."
            },
            {
                title: "Impressive graphics",
                content: "It’s hard to beat the visual effects (and audio). And because the visuals are adaptable to every screen and device, you don’t have to worry about distortion or loss of video quality across systems."
            },
            {
                title: "Simple debugging",
                content: "All game variables are conveniently displayed during gameplay. This allows developers to debug processes at runtime. (Ultimately, this means a faster debugging and tweaking process, which results in a better user experience.)"
            },
            {
                title: "Advanced options",
                content: "One of the more exciting aspects of Unity is how the game engine supports advanced technologies and innovative developments like extended reality (XR), virtual reality (VR), and augmented reality (AR)."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co Unity Development Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "We begin every Unity development process by getting to know you and carefully outlining each of your goals and expectations. This helps us get a better idea of how we can develop a game that you’ll be happy with."
            },
            {
                title: "Plan",
                content: "The key to a good game is to plan ahead and formulate a proactive plan. This plan must begin with the end in mind and then work backward."
            },
            {
                title: "Develop",
                content: "Few development processes are more interesting and rewarding than creating a game. We’ll live and breathe Unity development, which means you’ll get a game that you’re thrilled with."
            },
            {
                title: "Test",
                content: "No application is complete without first conducting some tests to ensure there are no bugs, errors, or mistakes. We’ll continue to test and iterate until it runs smoothly. The Unity platform makes debugging easy and intuitive. However, we’ll always work with you to ensure your game is running smoothly from start to finish."
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
            "At DEV.co, it’s our mission to provide our clients with maximum value at each step of the game development process. Interested in learning more about how we can use the Unity platform to produce a high-quality gaming experience?",
            "Please don’t hesitate to contact us!"
        ]
    }


    const eighth = {
        title: "Interesting Facts About Unity",
        content: [
            "Unity is a cross-platform game engine that was first released in 2005.",
            "Unity supports more than 25 different platforms.",
            "Unity allows users to create game experiences in 2D, 3D, VR, and AR.",
            "Unity has both free and paid licensing options.",
            "Users can buy and sell 2D and 3D assets via the Unity Asset Store.",
            "Unity has more than 2 million designers using the programming language.",
            "Unity enjoys more than 48% market share in the game engine industry.",
            "Famous games developed with Unity include Temple Run, Angry Birds, Super Mario Run, and Pokemon Go."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;