import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Houston"
    const first = {
        title: "Houston Custom Software Development Company",
        content: [
            "Houston, also known as H-Town or Space City, is a popular hub for business and careers. If you’re here, then that means you need help establishing an online presence for your business.",
            "Whether you run a corporate or local business, the same principle applies. Most consumers use the internet to find businesses. If your website is nowhere to be found, then you will struggle to capture meaningful leads and convert them into paying customers.",
            "With that said, hiring Houston software developers with technical skills is the first step to building a solid online presence. As one of the top software development companies, Dev.co can help you create a website that perfectly complements your brand through custom software solutions, mobile app development, and digital transformation. ",
        ]
    }

    const second = {
        title: "Web Designer in Houston",
        description: [""],
        content: [
            "Again, Houston is one of the most popular centers for business and commerce. Standing out in this market without a website is impossible. Also, having an ordinary website isn’t going to suffice.",
            "A professionally built website will rank high on major search engines like Google and Bing over your competitors. This will allow you to show up first for industry-related searches in front of your target audience.",
            "For this reason, hiring a Houston software developer who will provide custom software development services and technical support is helpful in establishing your web presence and boosting sales and revenue. Additionally, they can optimize your business processes with tailored software development solutions and create mobile apps to further enhance your digital reach.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Website quality is extremely important and plays a huge factor in whether a potential customer will work with a business. Unfortunately, DIY website builders sell the pipe dream of an average person creating a stellar website that will generate millions of dollars.",
                "In reality, innovative solutions are required for truly effective website development. Professional developers excel in creating visually appealing websites and developing software that enhances functionality and user experience.",
                "This is, frankly, a pipe dream. Here are all of the disadvantages of building a website on your own:",
                "You’ll ultimately waste your valuable money and time building a website that won’t rank online.",
                "Your man-made website will typically have numerous technical issues that will hinder its performance and cause your website to bleed leads by the day.",
                "You could spend more money in the long run on maintenance and an eventual rebuild.",
                "As you can see, building a website for your brand is difficult. The best option is to hire a Houston web design agency to handle this process for you.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Are you wondering how we can help your business create the perfect website for your brand? We employ a strategic process to navigate the web development process and create outstanding products.",
                "Design is less about visuals and more about user experience. Our team will create a design that’s convenient and interactive for the web user. When they’re satisfied, your website will improve as a whole.",
                "After your website is done being designed, we’ll then undertake the development process and check off vital tasks such as QA testing, MVP sprints, and mock-ups. We’ll work tirelessly on your behalf to make sure this process is done correctly.",
                "The final step is arguably the most important. You can count on us to make sure that your website is ready to go and rank on major search engines before it goes live.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "With more than a decade of experience in web design, we possess the tools and resources to get the job done. We have worked with thousands of businesses, from healthcare professionals to contractors.",
            "As one of Houston’s most reputable web developers, you can receive the peace of mind you deserve as a business owner.",
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