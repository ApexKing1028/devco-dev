import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Fresnos"
    const first = {
        title: "Fresno Custom Software Development Company",
        content: [
            "Fresno CA is one of the most well-known cities in the United States. Running a successful business in Fresno requires having a stable online presence. This only comes by developing a fully-functional website for your business.",
            "At Dev.co, our team of seasoned software engineer–with more than 10 years under their belt in the web development realm right here in Fresno are eager to elevate your online visibility. Our experts’ proficiency with a wide array of programming languages and even nurturing entry level talent ensures we deliver top-tier results. Aiding us further is access to advanced tools like Ray ID for tech solution-finding.",
            "Our team specializes in developing high-quality websites for both local businesses and corporate enterprises. If you’re looking for a website for your business, then you’ve come to the right place.",
        ]
    }

    const second = {
        title: "Web Design in Fresno",
        description: [""],
        content: [
            "Fresno, a thriving business hub and Silicon Valley extension, is recognized as one of the entrepreneurial capitals in America. Many companies here are brimming with ambition; they’re not just jobs in Fresno CA but launching pads for exponential growth. These businesses aim to enhance their online visibility — an essential step forward amid today’s digital age.",
            "This expansion can be realized most effectively by positioning themselves on platforms where potential customers frequently visit – major search engines like Google and Bing. Incorporation of new features could potentially lead to more jobs too!",
            "With a well-crafted website showing off your offerings, prospective clients can easily do their homework and familiarize themselves with your brand. This task isn’t far-fetched for any committed stack engineer or software engineer aiming to elevate customer comfort levels around the business persona.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Not every website gets the privilege of a high ranking on significant search engines such as Google, despite each one among trillions striving for it. The secret lies in the intricate AI and machine-learning algorithms these giants employ.",
                "In today’s digital age, obtaining a website is no longer an exclusive feat – you can even build your own front end from scratch! But hold on; before you take that leap in just a few seconds, consider this: are you well-versed with how websites get ranked? If not accounted for strategically, all efforts could be futile at ensuring performance security or maintaining the security of your connection.",
                "So before venturing into designing yourself – which might seem like saving costs initially but may incur greater risks long-term – perhaps what needs to review here isn’t just why some sites rank better than others after all. Additionally, remember that having “verification successful waiting” is also an integral part in this process.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take pride in the work we do here at Dev.co. This means we are fully committed to helping Fresno businesses grow. When you choose to work with us, you can expect to receive a website that will help you outrank your competitors.",
                "You can also expect to receive the following benefits when you hire our Fresno website development agency:",
            ],
            other: [
                "We have a team of more than 250+ developers, which means that you will likely be paired with a developer that knows what’s best for your company.",
                "We have additional team members of more than 500+ people. No matter what your web development needs are, we’ve got you covered.",
                "All of our developers are vetted rigorously to ensure we only deliver quality web design services in Fresno.",
                "We take pride in working with both local businesses and corporate enterprises.",
                "We will assign you a project manager that will ensure that your project is completed on course.",
                "We have a deep expertise in delivering top-notch results for our clients.",
            ],
            additional: "As our client, you will receive access to our massive tools and resources and receive the perfect website for your brand."
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "A website is supposed to do more than look great on the internet. It’s supposed to improve your online visibility, promote your products or services, and increase your sales and revenue.",
            "When you work with us, we’ll make sure that your website maximizes your initial investment. This way, you can truly profit from your online presence and grow your business.",
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