import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "El Paso"
    const first = {
        title: "El Paso Custom Software Development Company",
        content: [
            "In today’s digital age, being visible online is crucial. Why? Because a majority of customers use the web to find local businesses like yours in El Paso TX.",
            "If you want your brand at their fingertips on major search engines such as Google and Bing, then getting an expert website design agency from El Paso on board can be game-changing.",
            "At Dev.co we’ve got just what you need! We concentrate not only on helping brands edge out stiff competition but also on boosting overall visibility online; this means more prospects which leads to greater sales and revenue opportunities for them!",
            "Do keep in mind though that having defined technical documentation templates is key when creating a highly successful site – these help plan and implement technical solutions smoothly.",
            "You see, crafting powerful websites isn’t all about aesthetics or how well they rank (though both indeed matter). It’s equally important to maintain this valuable tool through regular updates using proper guidelines outlined through maintain technical documents.",
        ]
    }

    const second = {
        title: "Web Design in El Paso",
        description: [""],
        content: [
            "El Paso is famous in Texas for its vibrant southern culture. People have been increasingly attracted to it as a holiday spot and an affordable place to settle.",
            "The city also thrives with numerous small businesses, all competing for prime visibility among their target customers. How visible is your website on search engine result pages (SERPs)?",
            "If you’re not appearing high up or at least on Google’s first page, then this could be worrying news. Why? Because most of the audience considers only those first few results while ignoring other websites below them – pushing towards your rivals instead of you.",
            "Getting help from a skilled El Paso web developer can turn things around by securing a substantial online existence for yourself today!",
            "Incorporating “Deploy technical solutions”, focusing on connecting to software developer jobs that apply responsive web design principles. These are mastered by versatile software developers adept in backend software development criteria.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Unquestionably, having a website is vital today. But surprisingly, many individuals turn to DIY website creators instead of professionals – not the best move.",
                "Creating a site isn’t an easy task and really should belong in the hands of experts with equivalent technical degrees. Firmly based in El Paso, certain web design firms are familiar with Google’s rigid guidelines for top-tier websites resulting from proper change control processes that can push your ratings sky-high online.",
                "So remember when developing your site- go pro! It helps incredible clients achieve more than they could alone by offering well-crafted technical solutions designed by functional business analysts. Shorter projects done solo might be tempting but think long term: being professional pays off plenty.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Here at Dev.co, we’re pretty proud of our work. With us, your website is in the best hands. We’ve got technical processes nailed down and offer vibrant software engineering solutions – no long or complex sentences involved! Want to stay updated? You can create a job alert. Our experts have mastered various technical disciplines and are ready to inform you about any required updates on all things tech – from regular fixes through detailed technical documentation.",
                "Here are some additional benefits you can expect:",
            ],
            other: [
                "We have a team of more than 250+ developers. You are bound to be paired with a professional that knows your industry inside and out.",
                "We have access to additional staff to take on extensive website design projects.",
                "All of our developers have been properly vetted before working with us.",
                "We have direct experience in working with both local and Fortune 500 companies.",
                "We will assign you a project manager to help keep your website project on task.",
                "We have the expertise in creating a website that delivers desirable results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Founded in 2008, we have been operating successfully in the web development industry for more than 12 years. Our team of more than 500+ professionals have the combined tools, resources, and expertise to handle all website development requests.",
            "This means you can count on us to deliver a website that will improve your ROI and send qualified leads directly to your business. Hire us today to take your online presence to the next level.",
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

    const seventh = null


    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;