import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Detroit"
    const first = {
        title: "Detroit Custom Software Development Company",
        content: [
            "Looking for a software development firm in Detroit that can deliver personalized solutions? You’re at the right spot! We’ve got experienced developers ready to craft bespoke software just for you. Trust us, we’ve made it big in Detroit and take pride in providing top-shelf service. Want more info about what we offer? Hit us up!",
            "Our services extend beyond our beloved Motor City:",
            "– Crafting unique software tailored to your specifics",
            "– Empowering businesses with efficiency and increased productivity",
            "– Making transactions smooth as butter through specially developed software",
            "– Helping organizations keep their data game strong",
            "We also work magic on websites/apps design & development – plus have an around-the-clock team making sure existing systems are running perfectly.",
            "Keen on exploring some exciting software engineer jobs based out of Detroit MI? Got something specific like data validation providing feedback or dealing with external data providers? Our proficient team is well versed across diverse programming paradigms. Don’t hesitate; get involved today!",
        ]
    }

    const second = {
        title: "We Combine Custom Code with Unparalleled Creativity",
        description: [""],
        content: [
            "At our Detroit-based software hub, imagination is at the heart of what we do. Success for us hinges on creative spark and fresh thoughts. Our team excels in crafting unique solutions to your problems using Python test framework tools. Looking to meet an expert developer? Reach out now!",
            "Custom software development may appear daunting – but not when you’re working with us! We’ve aced it numerous times right here in Detroit, dealing actively with different database models along the way.",
            "Our active employee resource groups are always ready for new challenges. Serving clients like yourself well gives them great joy than anything else does around here.",
            "Dealing with data quality issues or stream processing systems? Collaborate with our skillful professionals who hold a track record that speaks volumes! Excited much about this journey together?",
            "Let’s get started soon then – drop us a message today!",
        ],
    }

    const third = [
        {
            title: "Who Are We and What We Do",
            content: [
                "At DEV.co, we’ve spent over ten years crafting tailor-made software for some of the biggest names worldwide. We have a wide array of services offering everything from application creation to handling AI and machine learning consulting.",
                "Our expertise includes: Creating personalized software just for you Developing unique applications exactly as per your needs Integrating systems smoothly Offering business insight through intelligence",
                "But it doesn’t stop there; we also offer specialized IT consultations and help with staffing related issues in the tech domain. In addition to these areas, project management is another feather in our cap along with ensuring quality at every step.",
                "Assisting clients when they encounter hiccups or need support regarding their existing software? Yep! That’s part of what makes us great too!",
                "We utilize large-scale data efficiently across all processes which involve detailed data management procedures including strict checks during ‘data validation.’",
                "And let’s not forget about code versioning tools – that’s an integral part of how we work here at DEV.co. Ensuring transparency while tracking changes becomes so much easier this way!",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Why Detroit Software Development Company?",
            content: [
                "",
            ],
            other: [
                "By selecting us, you become part of an established global company renowned for handling multiple data models. Our team knows how to tackle any data quality issues and collaborates efficiently on strategy consulting.",
                "One essential aspect that we take pride in is writing code – it’s our bread and butter! We offer mentorship programs where seasoned staff help the newbies understand intricate aspects such as creating efficient data mappings.",
                "We’re not just about codes; web development forms a considerable portion of our services too! Furthermore, if effective data storage gets your attention, wait until you meet our skilled batch of dedicated data engineers!",
                "To stay updated with all these exciting opportunities at your fingertips– simply create job alert.",
            ],
            additional: ""
        },
    ]

    const forth = null

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
            "Tackling custom software development? It can be tricky, no doubt. But hey, we love a good challenge! We’ve nailed it time and again in Detroit. Rest assured of top-notch service – you deserve nothing less.",
            "Eager to know more about what we do? Reach out now!",
            "Our expertise spans data architecture and tolerant distributed systems. Plus, our team is packed with strong data engineers who excel at big data consulting.",
            "And guess what’s the icing on the cake? A dash of ‘tea community service’ makes us unique! Can’t wait for your call!",
        ]
    }

    const seventh = null


    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;