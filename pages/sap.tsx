import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
     const first = {
        title: "SAP Development Services",
        content: [
            "Do you love SAP’s powerful data visualization abilities, but feel uncertain about how to maximize the platform’s impact?",
            "If so, you’re not alone. Many businesses use SAP’s library of business applications for their Enterprise Resource Planning (ERP) needs, but only ever scratch the surface when it comes to the full breadth of its functions. Now, it’s time to demand more."
        ]
    }

    const second = {
        title: "What Is SAP?",
        description: [
            ""
        ],
        content: [
            "The SAP ERP ecosystem is extensive, including platforms for major business processes like sales and distribution and quality management, financial management, human resources functions like training, and corporate services like health and safety and real estate management",
            "Of these many features, its data management features are among the most popular, but with the right development support, businesses can optimize almost every element of their operation.",
        ]
    }

    const third = null

    const forth = {
        title: "SAP Development Services",
        description: [
            "At Dev.co, we offer a wide array of SAP development services, including:"
        ],
        content: [
            {
                title: "Supply Chain Management",
                content: "SAP offers a variety of targeted supply chain analytics programs as part of its portfolio, with new offerings specifically focused on sustainability. As part of building targeted dashboards, we can help your business measure its carbon footprint across the supply chain, optimize sourcing and delivery for the greatest value with the lower environmental impact, and much more."
            },
            {
                title: "Workflow Development",
                content: "large companies, even skilled project managers can struggle to craft fully optimized workflows. By building out SAPs workflow management extension, we can help your business test various workflow models, while enabling automation throughout the project chain. Better workflows increase value, while decreasing time to final product, while various SAP functions offer real-time insights"
            },
            {
                title: "Advanced Analytics",
                content: "SAP was built for analytics, but without the right data extraction settings and targeted dashboard design, it can be hard to access and utilize all of that information. That’s why analytics is at the heart of our development services - smart business decisions start with access to all the informatione"
            },
            {
                title: "Connect With Clients",
                content: "SAP may not be your conventional CRM, but that’s because it can do so much more. Our optimization process aims to move your business to a “single face to customer” framework, so that customers get consistent information and service, regardless of contact channel. We can also automate CRM-linked analytics, linking interactions with sales and identifying places where your business can strengthen relationships and drive profits."
            },
            {
                title: "Enterprise Integration",
                content: "SAP may offer modules covering all of your business’s major functions, but that doesn’t mean you don’t have loyalties to other tools. At Dev.co, we can design a unique to you system in which SAP acts as the hub for all data inputs. Using an API-first approach, we can ensure all information flows into your main analytics system."
            },
        ]
    }


    const fifth = null

    const sixth = [
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
    
    const seventh = {
        title: "Achieve Omnichannel With SAP And Dev.co",
        content: [
            "Dev.co’s SAP development offerings touch on all aspects of the ERP suite, allowing us to develop a plan that meets your business’s unique needs.",
            "Don’t use the corporate services suite, but need help with financial management? We’ve got you covered.",
            "Or maybe you want to warehouse and supply chain issues – no problem. By building out the SAP ecosystem, we can help your business see the big picture or the finest details, with just a few simple clicks.",
            "You have the data; our job is to make it work for you.",
        ]
    }


    const eighth = {
        title: "Interesting Facts About SAP",
        content: [
            "SAP was founded in 1972 and is headquartered in Waldorf, Germany. The company makes a variety of software solutions, with an emphasis on Enterprise Resource Planning (ERP). SAP offers on-premises, cloud, and hybrid solutions.",
            "SAP is the third-largest software and programming company in the world.",
            "SAP is serious about innovation. They have over 100 R&D centers globally.",
            "SAP is listed on both the New York and Frankfurt Stock Exchanges. SAP is a global business with clients in over 190 countries.",
            "SAP acquired 70 other companies between 1991 and 2018, including Fieldglass, Ariba, Pilot Software, and – most recently – Qualtrics.",
            "Most of SAPs customers are SMEs, but they also serve 92% of the companies listed on the Forbes Global 2000.",
            "The Dow has ranked SAP as the #1 software company on their Sustainability Index for 13 years.",
            "SAP is committed to supporting global health efforts and has donated millions to groups like Product Red and the Global Fund. They also encourage staff volunteerism through social sabbaticals; staff are regularly dispatched to provide support to global non-profits.",
            "SAP serves customers in every industry. As a result, SAP’s customers are responsible for distributing 78% of the world’s food and 82% of all medical devices. Overall, 77% of all transactions have some contact with SAP systems.",
            "SAPs customers include agribusiness brands like Bumble Bee Seafood and Cargill, popular consumer goods brands like Hershey’s, Valora, and Natura, and key healthcare groups including Parkland Health, Providence St. Joseph Health, and Medtronic."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;