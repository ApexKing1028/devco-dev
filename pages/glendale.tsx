import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Glendale"
    const first = {
        title: "Glendale Custom Software Development Company",
        content: [
            "The team at DEV.co is a leader in website design & development. Let us make your business the best it can be with our web and custom programming services in Glendale, Arizona.",
            "We can build and manage any type of site you need. For over 10 years we’ve been creating functional websites and custom software that turn visitors into clients for our web design company customers in the Glendale, AZ area.",
        ]
    }

    const second = {
        title: "Web Design in Glendale",
        description: [""],
        content: [
            "Glendale, Arizona-based DEV.co is a website and custom software development agency that delivers effective and affordable websites, mobile app development, and",
            "With our creative team of designers, developers, and online marketing experts, we provide the most modern custom software solutions in the industry. We are focused on helping businesses develop an online presence that meets and exceeds today’s consumers’ heightened expectations.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "We will take your Glendale business online and get you noticed today! Whether you are an existing local business or a new start-up, DEV.co has a solution for you. Our team is proud to offer you the best custom solutions and Website Design in Glendale, Arizona at an all-inclusive price.",
                "When you choose the DEV.co team as your web design Glendale provider, we’ll work with our clients to create branding that represents their unique value, develop a user experience that makes the website easy to use and maintain, and deploy the website using the latest programming languages and libraries.",
                "At DEV.co, we aren’t just developers or designers. We specialize in a range of services to help drive your business like user acceptance testing. From eCommerce solutions, and mobile solutions to to premium website design, our digital services will set your small businesses apart from your competition, while our WordPress tailored solutions support guarantees the growth of your online presence.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Our Glendale web design company offers free website consultations with CRM systems. Our web designers are highly trained, have years of experience in creating small business websites & eCommerce stores, and we collaborate directly with clients to build their own custom websites tailored to their business requirements and business models.",
                "These Glendale website designers create stunning designs in digital marketing that will make your website stand out from the crowd and get you more business. We help clients to start small and grow big on the internet, offering unique websites that streamline operations. We work with businesses, real estate agents, and entrepreneurs to build a brand presence online.",
                "From start to finish, DEV.co will be your primary resource for brand strategy, operating efficiency, quality assurance, creative design, development, digital marketing, SEO / PPC, and hosting services for your next project with a competitive edge. Placing your business online and creating web applications is the first step in promoting your products and services to the rest of the world.",
                "DEV.co Glendale offers a wide variety of digital services that achieve your business goals including website design, mobile app design and development, eCommerce shopping carts, website hosting and maintenance, email marketing, search engine optimization, social media marketing, fully responsive mobile sites, custom software development, and eCommerce solutions. Whatever your business needs are, we can help make them happen. Reach out today to learn more about our digital solutions.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a full-service digital agency in Glendale, Arizona that provides award-winning creative development services including website design, graphic design and custom software development for nearly any application. DEV.co creates a unique online presence for your business by developing a customized mobile app, website, or digital development strategy – all tailored to fit your specific needs.",
            "We create beautiful designs that are perfect for your business. Their main focus is on building websites for businesses that want to thrive in the online marketplace. Created by web developers who have a design background, they create sites that are easy to navigate and find information on. They are dedicated to offering clients quality web services without outsourcing.",
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