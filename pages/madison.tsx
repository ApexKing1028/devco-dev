import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Madison"
    const first = {
        title: "Madison Custom Software Development Company",
        content: [
            "DEV.co has been designing and developing custom software and fully functional websites and mobile-friendly sites based on the latest application frameworks for more than a decade, designing and making them production-ready at every step."
        ]
    }

    const second = {
        title: "Web Design in Madison",
        description: [""],
        content: [
            "DEV.co has the best team for designing and developing fully functional responsive sites based on the latest application frameworks like PHP, Java, .NET, etc. We have a dedicated team for each platform who are well educated and highly qualified in their respective fields to provide quality services overall client requirements.",
            "We guarantee that you will get highly skilled and experienced developers from our team who are professional working staff in well-known companies.",
            "DEV.co is a customized service giving company established to fulfill the long-standing need for freelance software development with an exclusively focused approach to providing top of the line solutions by unmatched professionals within a short deadline period.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Established in 2008, DEV.co is a privately owned web development company with an agile approach to website and mobile application development. Unlike typical agencies, DEV.co does not design websites or mobile apps. DEV.co develops fully functional sites and mobile applications based on the latest application frameworks for the web and smartphones. DEV.co builds full feature web and mobile-friendly sites for startups and companies.",
                "We build advanced systems that allow our customers to make changes to content, provide customer service, or whatever job the startup might have, and we do it using the latest tools and technology available.",
                "We are a small team of super excited developers with a combined experience of over 25 years building web applications. We offer the Best Design and Best Functionality which makes us unique from other web developers. DEV.co is your one-stop-shop for all your media and web needs. With over 1000 clients and we are the leaders in trends, design, and marketing.​",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "DEV.co is a professional development company that provides web application and mobile app development using the latest technologies such as Ruby on Rails CMS, AngularJS, Ionic Framework. We have been designing and developing fully functional websites and mobile-friendly sites based on the latest application frameworks. Today, most small to medium-sized businesses and startups trust DEV.co to build their websites or mobile-friendly site or native applications for their business.",
                "DEV.co is a unique, Web Design and Development company. We give our customers what they want in a website or web application. We are based on the latest application frameworks: Bootstrap, Angular, jQuery Mobile, Sencha Touch, etc.",
                "DEV.co designs and develops sites based on current development methodologies to the highest standards in modern web development practice; we are experts in Drupal 7/8 ‘bakery’ configuration with a proven track record in developing and maintaining large and complex websites. Dev.co is the online marketplace that connects small businesses with sites still under development by top web developers.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Our mission at DEV.co is to understand your business, branding, and desired objectives before we initiate the concept development phase. It is at this point where Durability, Experience or Utility will create the first iteration of a product that is best suited for your users and consumers. We know how to get the best possible results. We work closely with you or your team through every stage of design, from initial brainstorming to technical development.",
            "Creating an online presence is the first step in getting your business off the ground. But when it comes to turning a popular website into an asset, or even something that generates passive income, it can be a challenging and daunting task. As seen with numerous examples over the years creating an eCommerce platform or community-driven website can be extremely rewarding. We are here to help you learn and grow the right way so you can expand your portfolio and online presence in a safe and meaningful way.",
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