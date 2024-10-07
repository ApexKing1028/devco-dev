import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Buffalo"
    const first = {
        title: "Buffalo Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Buffalo, New York",
        description: [""],
        content: [
            "For more than a decade, DEV.Co has strived to be the Best Web Design and Software Development Company in Buffalo NY. Clients come to us for our creative talent, modern solution design input, and responsive web innovative solutions that fit their unique corporate objectives.",
            "Our software engineers for Buffalo NY are extremely talented artisans who have gone through a rigorous vetting process before being considered the best of the best. After all, no other design team is going to create your business’ website!",
        ],
    }

    const third = [
        {
            title: "Website Development",
            content: [
                "Our mobile app development and software engineer team can create for you an exceptional modern website design or a fully functioning mobile apps that would perfectly fit your needs and customer requirements in Buffalo NY.",
                "Our various web design packages allow you to fully customize and personalize your new business site with an outstanding professional look. Let our professional software development team members with you to create a new website that effectively promotes your products, services, and employees and generates more online traffic to your website  (which in turn leads to more customers)."
            ],
            other: [],
            additional: ""
        },
        {
            title: "Mobile Development",
            content: [
                "At the DEV.co web design company, we believe in providing only the best mobile development in Buffalo NY. Our software engineer team are expert at iOS and HTML5 app development and offer the new technologies for your business or organization. We have a team of friendly and helpful customer service representatives who work diligently to ensure you receive fast and accurate results every step of the way.",
                "The web is not only a way of interacting with people but it has become a tool for various businesses to grow. You will need the right development company that understands the market trends and can adapt to changing technologies. DEV.Co is a well-recognized mobile design and development company in Buffalo NY that has been able to serve businesses of all sizes since its inception in 2007."
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Our software engineer team are perfectionist web designers & developers in Buffalo NY. We are experts in building and designing the most effective websites for our clients that yield long-term results. We provide professional web marketing services to help your website be found by more people so you can receive more leads. We develop useful, responsive websites using the latest technologies and CMS platforms in modern designs. We create websites that have friendly user interface and are superbly designed, whether it be for mobile devices,  e-commerce solutions, or even applications.",
                "We specialize in helping small to medium-sized businesses grow their online presence through new web development, search engine optimization (SEO), and social media management. Our software engineering team adheres to a custom-built approach to every new web major projects we take on, working with our clients to identify their needs and goals and creating a strategy tailor-made for them.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Expert Software Engineer in Computer Science",
            content: [
                "At Buffalo NY Custom Software Development Company, we are proud to have a specialized team of software engineers who have in-depth expertise in computer science. Our software engineers facilitate the building and designing of sophisticated websites with inspiring support  innovative solutions. ",
                'Computer science or related principles are fervently implemented for every project that our brilliant developers are assigned to; they ensure each task has unparalleled levels of excellence and efficiency.'
            ],
            other: [],
            additional: ""
        },
        {
            title: "Why Choose Our Software Engineers?",
            content: [
                "Our senior software engineers in Buffalo NY have strong, deep-seated foundations in the computer science or related field, where they are driven to consistently perform impressively and to take risks that extend beyond expectations. ",
                "When you become our partner, you will benefit from finding committed teams responsible for difficult assigned tasks and unraveling convoluted scenarios into customized software packages suitable for your needs.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Elevating Businesses through Custom Software",
            content: [
                "Technology is an integral part of the modern digital landscape. Our software developers have a unique understanding of computer science and software engineer jobs, meaning each project we take on is accomplished with precise attention to detail.",
                "No matter the challenge- whether needing lively software applications, creating intuitive interfaces, or digital technology lines- our team brings together cutting-edge aptitude and creative design in order to bring forth successful results that match your own ideal entity."
            ],
            other: [],
            additional: ""
        },
        {
            title: "The Fusion of Design and Functionality",
            content: [
                "We ensure that the design and implementation of our custom developing programs marry together perfectly, combining both artistry and technical specifications to maximize user experience.",
                "Our expert software developers and web designers bring their extensive computer science prowess to bear every time they embark on a new project, here in Buffalo NY; this transforms into software engineer jobs involving innovative website creations with strongly integrated features facilitating impressive performance results."
            ],
            other: [],
            additional: ""
        },
        {
            title: "Collaboration that Breeds Success",
            content: [
                "At our company in Buffalo NY, fostering strong partnerships is essential to achieving success. We pride ourselves on joining forces and collaborating closely with the software engineer team to leverage your sector’s knowledge in order to deliver distinct automation solutions configured specifically for your requirements.",
                "Our collaborative approach ensures that when it comes to software engineer jobs, the capabilities realized are only limited by what can be imagined—making the potential of major projects virtually endless.",
                "Our inventive software engineers will actively monitor and utilize recent technological innovations as well as both computer science and software development techniques to create pioneering software solutions for clients with Buffalo NY Custom Software Development Company.",
                "Together, we can revolutionize what is achievable in the realm of software service engineering! Don’t miss out – partner up with us to explore a world of unprecedented advantage today.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Our aim is to create beautiful and functional websites that work across all devices, from desktop computers and tablets to mobile phones. We use design patterns such as responsive web design and mobile-first, which means our websites are coded so they respond to the screen size of your device, implementing software solutions and excellent experience for visitors even on mobile phones.",
            "We are a full-service web design & development company in Buffalo NY offering professional website design services. Our customized websites are developed on-the-fly right here in WNY, guaranteeing we always stay current with the latest Google trends and changes in the Internet marketing industry.",
            "Our company is the most professional and experienced web based development company in Buffalo NY. We focus on delivering top web design services to small businesses and startups. We always keep in touch with our clients from the initial project kick-off to the completion with our dedicated customer support team members and account executives.",
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