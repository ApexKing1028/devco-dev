import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Gilbert"
    const first = {
        title: "Gilbert Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Gilbert",
        description: [""],
        content: [
            "At DEV.co, we specialize in implementing creative design solutions that represent your brand; we configure your computer software and cloud infrastructure to help you engage consumers and attract customers. ",
            "Sloppy design may cause visitors to bounce, but we guarantee that everyone who visits your site associates you with professional web design and the power of cutting-edge technology.",
            "We provide businesses that have just started up with affordable website development services in Gilbert, Arizona. To learn more about our services and pricing",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "A well-designed website is one of the most important aspects of your business’s success. It is the face of your business, accounting for potential new clients, and can be a major revenue stream for you. Ensuring the security of your connection is crucial. DEV.co is a full-service web design and development company in Gilbert, Arizona.",
                "We create unique, highly functional websites using various programming languages that help improve client businesses. In addition to building websites for clients, we also repair existing websites so that they function properly.",
                "This is ideal for individuals who want to maintain their current website or business owners who need a responsive redesign of their brand-new site. Our team thrives on providing quality service to clients and getting in touch with the community here in Gilbert, AZ. When it comes to online security, we review the security and ensure the protection of your connection, including monitoring Ray ID for any potential issues. Our designers create eye-catching, responsive websites with a clean user interface.",
                "All this is done in-house without outsourcing to help minimize cost and increase efficiency. In addition to saving your money, this helps us maintain direct control over all aspects of your project’s design and implementation process from beginning to end, ensuring the security of your connection before proceeding.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "We develop simple yet effective websites that generate results for our clients and are easy to manage for them. We also offer eCommerce solutions such as our Shopify store, designed to be simple enough for any business owner to maintain effectively. Most importantly, we specialize in working with small businesses like yours, verification successful waiting. We have been creating websites for more than a decade, focusing on the best things our customers are looking for.",
                "Our web designers are working with some of the best graphics software to create high-converting clean professional websites. If you need a website or want to revamp your existing website, contact us for a free consultation. We offer flat-fee pricing with unlimited hours to complete your web design.",
                "We follow the highest standards when it comes to SEO optimization, cross-browser compatibility, and overall quality. We build websites that drive results. Our Gilbert web design professionals develop mobile friendly websites that perform for your business and communicate your message online. Contact us today to schedule your consultation.",
                "Quite simply, we specialize in crafting eye-catching websites that engage your target audience while improving search engine rankings. We are a full-service local web design and development company and we specialize in working with small business owners to create effectively, search engine optimized websites that help them grow their businesses. We also create mobile-friendly websites for all devices. ",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "The DEV.co team of professional, full-time website designers and developers produce great results for Garland businesses looking to increase their online exposure. We develop compelling, effective websites that consistently achieve great results for our clients.",
            "Developed by a local web design company in Gilbert, Arizona, DEV.co is a comprehensive collection of high-quality designs that maximize every inch of available space to ensure your brand image is presented in the most effective manner. Our approach to web design is holistic, and we have a proven record of building features into our designs that make them social, mobile, search engine friendly, and more. We use the best tools available and integrate them seamlessly into your website.",
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