import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Oklahoma City"
    const first = {
        title: "Oklahoma City Custom Software Development Company",
        content: [
            "If you are looking for a custom software development company in Oklahoma City that can help your business achieve its goals, then you need to look no further than the team at DEV.co.",
            "We have 12 years of experience in the industry, and we are dedicated to helping our clients succeed. We specialize in creating software that is tailored specifically to our clients’ needs, and we always put the customer first.",
            "Contact us today to learn more about how we can help you!",
        ]
    }

    const second = {
        title: "Software Engineers in Oklahoma City",
        description: [""],
        content: [
            "The software engineering services we provide to Oklahoma City businesses include:",
            "Custom software development: We can create custom software solutions that are created specifically to your business’ needs. This can help you save time and money, and improve your overall productivity.",
            "Software consulting: We can help you understand your specific needs and requirements, and then we will create a custom software solution that is customized specifically for your business.",
            "Software training: We can provide you with the training that you need to use our software effectively. This can help you get the most out of our software, and ensure that you are using it correctly.",
            "Software support: We offer full support for our software. This can help you troubleshoot any issues that you may have and ensure that you are always using our software correctly.",
        ],
    }

    const third = [
        {
            title: "Superior Software Development Services",
            content: [
                "Software development companies can provide a wide range of solutions for businesses. Some of the most common problems that are solved by custom software include:",
                "1. Increased efficiency – Custom software can help businesses become more efficient by automating tasks and processes that are currently being done manually. This can save the business time and money, and improve its overall productivity.",
                "2. Improved customer service – Custom software can also help businesses improve their customer service by providing them with tools that make it easier to track and manage customer data. This can help businesses better understand their customers and provide them with better service.",
                "3. Enhanced security – Custom software can also help businesses enhance their security by providing them with features that help protect their data from theft or unauthorized access. This can help businesses keep their confidential information safe and secure.",
                "4. Reduced costs – Custom software can also help businesses save money by reducing the need for expensive hardware and software licenses. This can help businesses reduce their overall IT costs and improve their bottom line.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "With over a decade in the trenches, developing custom software for clients, the team at DEV.co has the experience and expertise that you need to find the right solution for your business.",
                "We will work with you to understand your specific needs and requirements, and then we will create a custom software solution that is tailored specifically for your business.",
                "Contact us today to learn more about how we can help you!",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "Our Capabilities",
        content: [
            "With over a decade in the trenches, developing custom software for clients, the team at DEV.co has the experience and expertise that you need to find the right solution for your business.",
            "We will work with you to understand your specific needs and requirements, and then we will create a custom software solution that is tailored specifically for your business.",
            "Contact us today to learn more about how we can help you!",
        ]
    }

    const fifth = [
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

    const sixth = {
        title: "Contact Us Today!",
        content: [
            "If you’re looking for a custom software development company that can help your business grow, you’ve come to the right place.",
            "Our team of experienced developers can create anything you need, from simple software to complex enterprise solutions.",
            "We’re based in Oklahoma City, Oklahoma, but we’re happy to work with clients anywhere in the world. Contact us today to learn more about our services!"
        ]
    }

    const seventh = null

    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;