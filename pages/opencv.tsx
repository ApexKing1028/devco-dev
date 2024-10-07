import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "OpenCV Development Services",
        content: [
            "OpenCV is basically a library of programming functions that you can use in real-time for common image processing. It’s an open source platform that’s equipped with hundreds of powerful features that make it perfect for versatile projects.",
            "From simple image processing to complex machine learning, OpenCV is optimized for performance. And if you’re looking to hit your next project out of the proverbial ballpark, we’re here to help."
        ]
    }

    const second = {
        title: "OpenCV Development & Consulting",
        description: [],
        content: [
            "Are you looking for OpenCV development services? We have a team of skilled developers on standby, ready to assist you with your next project.",
            "Simply looking for some assistance or guidance on an existing project? Our OpenCV consultants can walk you through the process."
        ]
    }

    const third = {
        title: "Why Choose OpenCV?",
        description: [
            "OpenCV was designed for image processing. Every single function, feature, and data structure is built on this foundation.",
            "With that in mind, you can expect an array of benefits, including:"
        ],
        content: [
            {
                title: "Speed",
                content: "OpenCV is written in optimized C/C++. Sounds great, but what does that mean in practical terms? Well, one key benefit is speed. Machine language code is provided directly to the computer and is immediately executed. This results in faster image processing (as opposed to a platform like Matlab, which requires lots of interpretation prior to processing)."
            },
            {
                title: "Efficiency",
                content: "OpenCV is incredibly lean. In fact, it’s so efficient that it’s possible to get away with as little as 10mb RAM for a real-time application. RAM isn’t really a factor these days, but the fact that you can run it in such a restrictive environment says a lot."
            },
            {
                title: "Open source",
                content: "The open source nature of OpenCV means there’s far more versatility than most image processing platforms. The result is a more robust and updated option that’s continually evolving over time."
            },
            {
                title: "Supportive community",
                content: "As is the case with most open source solutions, OpenCV is backed by a very supportive community that’s always standing by to answer questions, offer solutions, and help."
            },
        ],
        other: [],
        additional: "Each of these native benefits allows us to approach OpenCV client projects with a full suite of robust tools. The result is better quality solutions that are built to last."
    }

    const forth = {
        title: "The DEV.co OpenCV Development Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "Every OpenCV development process begins with a discovery phase where we dive in and get to know your business. These insights allow us to develop solutions that satisfy all core objectives and goals."
            },
            {
                title: "Plan",
                content: "Once we unearth your goals, we begin developing a strategic plan that allows us to take you from where you are to where you want to be."
            },
            {
                title: "Develop",
                content: "The development phase is where we get to work. Our team of OpenCV developers work together to create solutions that are both functional and aesthetically pleasing."
            },
            {
                title: "Test",
                content: "No development process is complete without first testing and optimizing. We’ll iterate as many times as necessary to get the result you need"
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
        title: "Partner With Dev.co",
        content: [
            "At Dev.co, it’s our mission to help clients develop solutions that meet their needs – and the needs of their clients – in an efficient and cost-effective manner.",
            "For further information on our OpenCV development services, please contact us today!"
        ]
    }


    const eighth = {
        title: "Interesting Facts About OpenCV",
        content: [
            "OpenCV stands for Open Source Computer Vision Library.",
            "OpenCV is a library of programming functions that’s aimed at real-time computer vision. (Which is a field of study where computers seek to understand digital images.)",
            "OpenCV was originally developed by Intel.",
            "OpenCV is a cross-platform product and free under the open source BSD license.",
            "OpenCV was originally released in 2000.",
            "OpenCV is written in C++.",
            "The essential features of the OpenCV library include: open source, fast speed, easy to integrate, ease of coding, and fast prototyping.",
            "OpenCV enjoys a market share of 26.3% in the machine learning category.",
            "The most popular industries for OpenCV include computer software, higher education, and information technology.",
            "The United States represents the largest user base for OpenCV, with India, the United Kingdom, and Canada trailing."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;    