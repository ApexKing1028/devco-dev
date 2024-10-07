import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Indianapolis"
    const first = {
        title: "Indianapolis Custom Software Development Company",
        content: [
            "Are you looking to improve your overall web presence with a stellar new website? If so, then you’ve come to the right place. Dev.co specializes in building top-quality websites that rank well on major search engines like Google and Bing.",
            "As one of the top software development companies, we realize how complicated it can be to choose a website development agency in Indianapolis that’s on your side. There are numerous agencies in the area that all promise the same thing, and that’s to create the perfect website for your business.",
            "Unlike our competitors, we have proven experience in all aspects of web design. You can rely on us to create a website that will properly showcase your products or services.",
        ]
    }

    const second = {
        title: "Web Design in Indianapolis",
        description: [""],
        content: [
            "Having an established web presence is not only important, but it’s also crucial to the success of your business. Most consumers use the internet to find a local business. With Indianapolis being an epicenter for local and small businesses, it’s all the more important to have a website that will generate business for you. If not, then you’re going to miss out on tons of valuable business. Also, potential customers may just end up working with your competitors if they can’t find your business.",
            "This is why it’s essential to hire a web design agency in Indianapolis to help produce the website of your dreams. A professional agency can offer custom software solutions tailored to your specific needs. Additionally, they can assist with mobile app development, ensuring that your business can reach customers on the go.",
            "Indianapolis software developers are known for their expertise and can provide managed services to keep your website running smoothly. Whether you need a new website or enhancements to your existing one, working with a team that understands mobile apps and the local market is key to your business success.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "While having a website is important, you shouldn’t resort to just any method of producing one for your business. For example, there are multiple DIY website builders that promise anyone can create a fully functional website for their brand.",
                "This isn’t always true. While you may end up with a completed website, it will usually have numerous technical issues, while its quality suffers. You could end up spending a lot of your time, effort, and money on a website that won’t do anything for your business.",
                "For this reason, hiring a web developer in Indianapolis is always in your best interest. Dev.co is one of the top software development agencies in the country you can trust. They specialize in digital transformation and offer a range of services provided by top software developers.",
                "By partnering with reputable software companies, you ensure that your website not only looks great but also functions perfectly, driving business growth and customer satisfaction.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take enormous pride in the work we do here at Dev.co. When you choose to work with us, here are all of the benefits you can take advantage of:",
            ],
            other: [
                "We have a team of more than 250+ developers. This makes it more likely for one of our developers to have the expertise you’re looking for.",
                "We also have access to additional teams of more than 500+ people. You can take solace in the fact that we can handle any web development project, no matter how large it is.",
                "All of our developers have been vetted to ensure that we supply only the most remarkable web design services.",
                "From local businesses to Fortune 500 companies, we have the experience you need to help your website thrive on major search engines like Google and Bing.",
                "We will assign you a project manager to help your project stay coordinated and focused.",
                "We will help deliver tremendous results through your website.",
            ],
            additional: "There are so many benefits you can enjoy when you choose to work with us. Thousands of clients trust us everyday to build their websites."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We have more than 12 years of experience in our niche, helping countless businesses take their digital presence to the next level. What we bring to the table is our commitment to uphold the highest standards of customer satisfaction and service.",
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