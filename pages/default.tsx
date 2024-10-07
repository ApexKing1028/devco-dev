import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = ""
    const first = {
        title: "",
        content: []
    }

    const second = {
        title: "",
        description: [""],
        content: [
            "",
        ],
    }

    const third = [
        {
            title: "",
            content: [
                "",
            ],
            other: [],
            additional: ""
        },
        {
            title: "",
            content: [
                "",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "",
        content: [
            "",
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
            "We’d love for you to work with us and take your online presence to the next level. To learn more about how you can work with us, click here to speak to a member of our team.",
        ]
    }

    const seventh = {
        title: "",
        description: "",
        content: [
            {
                title: "",
                content: [
                    "",
                ]
            },

        ]
    }

    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;