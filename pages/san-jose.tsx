import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = ""
    const first = {
        title: "San Jose Custom Software Development Company",
        content: [
            "San Jose has a growing reputation among both home and business owners. If you are running a business in San Jose and want to improve your online presence, then you’ve come to the right place.",
            "At Dev.co, we specialize in creating top-notch websites for San Jose businesses. Our attention to detail and commitment to maintaining the highest standards of customer satisfaction are key in our delivery of masterful websites.",
            "Therefore, if you want to take your digital presence to the next level, look no further than Dev.co. We are the leading web design agency in San Jose for more than a decade.",
        ]
    }

    const second = {
        title: "Web Design in San Jose",
        description: [""],
        content: [
            "Having just an ordinary website isn’t going to suffice. San Jose is a popular business location. Many of your top competitors will likely have a professionally-built website. They may also work actively to improve their online presence.",
            "If you’re caught slacking, then you can miss out on valuable business. It’s no longer enough to just have a website. Ensuring that your website will rank well on major search engines like Google and Bing will only help your bottom line.",
            "If you are in need of outstanding web development services in San Jose, you can rely on us to deliver.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "There are so many different reasons why website quality is important. To begin, potential customers are very judgemental about the design of your website. If your site looks plain or stuck back in 2014, they’re going to leave and never come back.",
                "Also, if you attempt to build your own website, then you’ll succeed in reducing its quality and wasting your valuable time and money. The best websites are developed by highly-experienced professionals",
                "Without the proper experience, your website could struggle to rank on major search engines. If that’s the case, then it’s useless. Therefore, don’t believe the claims of DIY website builders.",
                "Not everyone can create the perfect website. This task is best left up to a professional San Jose web development company.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we take tremendous pride in the work we do. We offer significant benefits to our clients throughout San Jose, which include:",
            ],
            other: [
                "We have a team of more than 250 developers who specialize in numerous business industries.",
                "We also have access to both offshore and onshore teams to handle large web development projects.",
                "All of our developers are vetted before they are chosen to work with us.",
                "We provide web design services to both small businesses and corporate entities.",
                "Our project managers are assigned to ensure that our clients receive efficient and timely web development services.",
                "We have in-depth experience in producing real-time results for our clients.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We have more than a decade of experience in the website and software development industry. With humble beginnings as an advertising and financial software firm, we have quickly transitioned into one of the most trusted web design companies in the country.",
            "Our mission is to combine world-class technical support with actionable business applications to create products our clients will be proud of.",
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