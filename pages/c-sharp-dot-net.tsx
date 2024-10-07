import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "C#/.NET Development Services",
        content: [
            "Microsoft's .NET platform allows C# software developers to build stunning applications that can run on any device (including mobile and desktop).",
            "With a robust library and framework, it can handle virtually any task thrown its way. And because it was originally developed in response to existing programming languages, C#/.NET is much more intuitive and user-friendly than some of the ones that came before."
        ]
    }

    const second = {
        title: "C#/.NET Development & Consulting",
        description: [],
        content: [
            "We also have .NET consultants available to help analyze existing applications and identify areas for improvement. We can recommend new opportunities and provide strategic recommendations.",
            "As simple as C#/.NET is to use, it still requires extensive experience and familiarity to be successful.",
            "At Dev.co, we take pride in our understanding of the framework and promise the techniques and skills required to deliver an end product that exceeds your expectations."
        ]
    }

    const third = {
        title: "Why Choose C#/.NET?",
        description: [
            "For many years, developers searched for a framework that would enable them to create applications with ease.",
            "So, Microsoft finally developed .NET to make developing, running, and maintaining both modern-day apps and XML web services a breeze.",
            "Here are some of the reasons you may consider selecting this framework for your next project:"
        ],
        content: [
            {
                title: "Versatile business uses",
                content: "Whether it's sales, finance, accounting, supply chain management, or something in between, this framework is versatile enough to support a variety of software and applications."
            },
            {
                title: "Cross-platform functionality",
                content: "One of the best aspects of the .NET framework is that it supports the development of cross-platform apps that can smoothly operate across several different server platforms, including Windows, Linux, and MAC."   
            },
            {
                title: "Rich class library",
                content: "As developers, we love the .NET framework because it includes one of the best class libraries around. It's consistent, rich, and easy to work with. On the client side, you can rest easy knowing you have access to all the best features and capabilities, which typically results in a superior application."
            },
            {
                title: "Less friction",
                content: "If we could use one word to describe C#/.NET, it would be “smooth.” All of the traditional hurdles and friction that exists with other frameworks all but disappears. This means fewer problems and delays in development."
            }
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "Our C#/.NET Development Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "The Dev.co process starts with a discovery phase where you get to know your business and the core objectives and goals you have for your software or application. This helps us determine the best path forward."
            },
            {
                title: "Plan",
                content: "Based on your goals, we can head to the drawing table and figure out the best way to develop an application that will make the most sense for you. We attempt to do so in a way that prioritizes both quality and cost."
            },
            {
                title: "Develop",
                content: "This is the part we love. The development phase is all about taking your idea and turning it into a reality. We'll work hand-in-hand to ensure everything aligns with your wants, needs, and expectations."
            },
            {
                title: "Test",
                content: "No application is complete without first conducting some tests to ensure there are no bugs, errors, or mistakes. We'll continue to test and iterate until it runs smoothly."
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
            "When you partner with Dev.co on your next C#/.NET project, you can rest assured that you'll get only the best quality and service.",
            "Not only do we have years of collective experience developing software and applications, but we're well-versed in the softer side of development.",
            "We promise exceptional service and will gladly hold your hand each step of the way."
        ]
    }


    const eighth = {
        title: "Interesting Facts About C#/.NET",
        content: [
           ".NET Core means .Net is no longer only reserved for Windows or PC users. Developers can now create apps that run on Windows, Mac OS X, and Linux.",
           ".NET is a framework that can work with several programming languages, including C#.",
           "C# is an object-oriented programming language which speeds up productivity in development.",
           "The .NET framework has a massive collection of predefined class libraries - which are basically pre-written code - from hundreds of developers.",
           "Many major companies use .NET, including Dell, Accenture, Epic Systems HCL, and TCS.",
           "C# is pronounced just like the musical note (“C-Sharp”).",
           "C# is suitable for writing applications in embedded systems."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;