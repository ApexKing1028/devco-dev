import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Fort Worth"
    const first = {
        title: "Fort Worth Custom Software Development Company",
        content: [
            "Looking for a city with unique attractions and flavors? Fort Worth, Texas might just be your kind of place. Here in Fort Worth TX , local businesses shine brighter if they’ve got strong online visibility.",
            "Simply put: to succeed in today’s market – you need a stellar website. Without one, potential customers may end up at the doorstep of competitors instead.",
            "Do you want software engineering solutions that stand out from the rest? At Dev.co we’re experts when it comes to crafting top-grade web development services right here in Fort Worth! You’re tasked as a software engineer or seeking “Software developer jobs” around town doesn’t matter because every business needs an impactful website regardless!",
            "So make sure not to miss any opportunity – create job alert notifications so whenever there is an opening; whether it is a computer engineering profile or another role relevant within our company’s spectrum – you can always stay updated about them.",
        ]
    }

    const second = {
        title: "Web Design in Fort Worth",
        description: [""],
        content: [
            "People mostly use Google or Bing when they’re on the hunt for local businesses. Why? Because it’s a breeze to find what you need! A quick search can pull up all nearby stores in your neighborhood, right there on Google Maps.",
            "When considering how to pop up at the top of these local searches, having an amazing website is key. The site needs not just look good but also reflect who you are as a brand perfectly – its quality ultimately being a pivotal part of making your marketing strategy work!",
            "Here’s where we come into play: We’re Dev.co team – folks that make sure websites shine bright like diamonds (or even brighter) among search engine results pages (SERPs).",
            "After verification successful waiting for just a few seconds, think about us similar way as the job alert system- letting software engineer job seekers know about their dream opportunities available in the computer science sector around them.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "The success of your website is all about its quality. Picture this, if you come across a site that screams 2011 vibes, what would you do? You’d likely exit and never return. Instead, consumers will turn to your competitors.",
                "So who else cares deeply about the state of your website? Search engines like Google are quite picky too! They have strict rules on how websites should appear and function – which means making one yourself might be out of question.",
                "It’s not wise either to rely on newbie software developers with no master’s degree for building such an important asset; they may lack expertise required in web development field given their inexperienced background. The solution: consider hiring skilled Fort Worth-based web design agencies offering competitive total rewards packages when looking for more jobs- because only then can great returns from investments can truly happen.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we take a lot of pride in the work we do here. When you choose to work with us, you’ll be able to take advantage of the following benefits:",
            ],
            other: [
                "We have a team of more than 250+ developers who are skilled in numerous industries and areas of web design.",
                "We have access to both offshore and onshore talent. This means we can handle large staffing requirements if we’re taking on an exceptionally lengthy web development project.",
                "All of our developers have been properly vetted to ensure the delivery of top-notch development services.",
                "We have actionable experience in working with both local businesses and Fortune 500 companies.",
                "We’ll assign you a project manager that will make sure your project is completed efficiently.",
                "We have direct experience in completing unique and successful web projects.",
            ],
            additional: "As you can see, there are a lot of tremendous benefits in working with us. We hope you make the right choice in selecting us as your web development agency in Fort Worth."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Launched in ’08, we’ve got a decade-plus of know-how with web development. We come loaded with an arsenal of tools and resources to nail the job.",
            "Details matter us as much as they do to you – that’s why we don’t stop until our clients are happy.",
            "With information systems at heart, all those years have been backed by proper education since many on the team boast bachelor’s degrees relevant fields. Just like when searching for jobs in Fort Worth , attention is needed every step particularly if it involves software applications or Microsoft Office work.",
            "‘Ray ID’ sounds technical but rest assured it doesn’t scare us one bit! Is equivalent experience also something thrown into your usual hiring mix? No bother – trust me; our experts manage similar responsibilities daily!",
            "Don’t forget about ‘Create Job Alert’. Let this offer serve just like another reminder alongside primary responsibility tasks even during busy days handled by proficient software engineers.",
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