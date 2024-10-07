import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Lincoln"
    const first = {
        title: "Lincoln Custom Software Development Company",
        content: [
            "DEV.co is a company of engineers, designers, developers, and entrepreneurs all coming together to offer custom web and software design and development.",
            "From our wide variety of plans, you can choose the service most appropriate for your project.",
            "So, whether it’s a simple WordPress site or a full e-commerce solution, DEV.co will have the most efficient team for your needs. ",
        ]
    }

    const second = {
        title: "Web Design in Lincoln",
        description: [""],
        content: [
            "No matter what size your business is or the type of service you need, DEV.co has a plan that will fit your needs. With a wide array of features ranging from responsive web design to e-commerce capabilities, we’ve got a plan that’s right for you.",
            "DEV.CO offers Development, Design, and Marketing plans for high-growth companies as well as a unique service plan that allows individual freelancers or agencies to use the tools they want on their own terms. With 3 tiers of service and over 130 features packed into our plans, we’re confident you’ll find the right mix of custom software development services for your company.",
            "Get all the features you want from your development team ― plus a whole lot more. We started DEV.co to create an agency that crafts websites that not only look great but work seamlessly for customers and business owners alike. We’re a small team of passionate developers, designers, and customer care professionals with varied experience in agencies, startups, and established companies ― and we’re here to serve you. ",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Do you need a website for your business today but don’t want to make long-term commitments? DEV.co’s platform allows you to take advantage of the latest technologies and industry-leading tools at an affordable price, all backed by our standard 30-day money-back guarantee.",
                "With DEV.co, you get a dedicated team driving user adoption and engagement with your brand through purposeful and innovative digital strategies. By leveraging deep expertise in mobile app development and website design, we can help companies efficiently create custom software solutions that bring them closer to their goals.",
                "We customize your web experience to solve your business problems and meet its unique needs. From a simple mobile responsive website design to full development services, we’re ready to meet your needs with our personalized web solutions. DEV.co is headquartered in Hialeah, FL, and serves clients nationwide with our digital solution expertise for small business clients.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "DEV.co provides website design, online marketing, app development, and e-commerce innovative solutions. Our focus is to provide a low-stress approach to site creation and develop content-rich websites for our clients. When you work with us, you are working with one of the premier web design and development companies in Lincoln, Nebraska. We approach every project individually for maximum results.",
                "With over a decade of experience coupled with ongoing training and mentoring from some of the most well-known experts in the industry, our team is prepared to help grow your business online in any sphere.  We are the leading software development company, focusing on the design, web development, and maintenance of fully functional, secure, and search-friendly websites for small businesses and startups.",
                "From designing your logo to implementing a large project, our team is ready to help you create a site that will represent your company in the best way possible. We specialize in working with clients to not only build a website from scratch but to develop the right site for the business given their needs. ",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a small team that specializes in the design, development and maintenance of fully functional and search-friendly websites for both small businesses and start-ups. We offer responsive web design so whatever device you’re reading this on, you will have a good experience.",
            "We here at DEV.co know what it takes to create a fully functional and search-friendly site for your business processes or projects. We’ve been converting our ideas into marketable products since 2008, so we have the proven track record needed to help you bring your ideas into the real world of digital media. ",
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