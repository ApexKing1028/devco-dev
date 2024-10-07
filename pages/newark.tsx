import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Newark"
    const first = {
        title: "Newark Custom Software Development Company",
        content: [
            "DEV.co is a web design and development company based in Newark, New Jersey. We specialize in clean, full-featured web design with the latest web technologies and development practices.",
            "Our Front-End Architect has 14 years of professional experience as a Front-End Developer. Our designers have extensive experience in branding and corporate identity development and are experts in custom website design. ",
        ]
    }

    const second = {
        title: "Web Design in Newark",
        description: [""],
        content: [
            "Want a high-performing website? Not happy with cookie-cutter solutions? DEV.co works with you to design and build your custom eCommerce, web application, or membership site.",
            "Our web development team has been recognized for its creativity and expertise by Fast Company and Code Magazine as well as our ever-expanding network of top clients.",
            "Whether you’re a developer building your own apps or a small business owner looking to design your own online store, DEV.co has created the web’s most versatile and powerful platform, whether you’re using a desktop or mobile device.",
            "Our beautifully crafted WordPress theme and plugins allow you to create anything you need — and you can do it all yourself. DEV.co has all the tools you need to help your business succeed online.",
            "We provide websites that are tailored to you, and we’re constantly pushing the envelope to offer new services that meet changing expectations in the digital space. Whether you’re a sole proprietor, start-up, or established business, we can make sure that your digital presence is a strategic advantage. ",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Whether you’re thinking of re-launching an existing site or looking to launch a completely new one, our team is ready to help you build your dream website just the way you want it.",
                "At DEV.co, we take pride in creating customized and fully functional websites that align with your business goals and help you grow. Whether you’re looking to increase brand awareness, drive conversions, increase leads, or bring in revenue, we can help you make it happen.",
                "DEV.co is a one-stop shop for businesses that need help taking their product or service idea to the next level, by creating an innovative and easily customizable website that aligns with your business goals and helps you grow.",
                "We specialize in using our software engineering expertise to help new ventures bring their product or service vision to life, using the cutting-edge technology of today.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "We recognize that developing an irresistible brand takes time. It requires thorough research and a detailed understanding of your business, coupled with the right expertise to conceive and develop new strategies and creative solutions in alignment with your vision.",
                "Whether you’re trying to target a specific group of users or want to capture emails from visitors in order to market to them in the future, DEV.co can build it for you. With full-stack development support from graphic design and business consulting to marketing and customer service, we’ll help you develop a brand that will grow your business over the long term, ensuring that you get the most return on your investment.",
                "The experience development process begins with internal collaboration among DEV.co’s core group of multi-disciplined designers, strategists, and project management personnel.",
                "We take a utilitarian approach to design and development in order to achieve desired objectives while offering optimal usability for the client. This process involves several ideation rounds, user tests, and strategic planning sessions, each focused on developing the best possible solution for the project.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a website building company in Newark, New Jersey with extensive experience using the latest Javascript frameworks like Angular, React, and many others. We are committed to providing quality service and well-coded, secure, SEO-friendly applications to our clients.",
            "We pride ourselves on being responsive and reliable to your every need. We have extensive experience in handling ‘mission-critical projects’ that would involve tight deadlines and complex functionality. We are not your typical web design company.",
            "DEV.co strives to be unique, refreshing, and different while maintaining a focus on quality. We serve a niche market of startup companies across the globe and like to target the international community of entrepreneurs and startups.",
            "Our team members are experienced professionals with their own start-ups, small businesses, and previous experience in marketing and selling good products.",
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