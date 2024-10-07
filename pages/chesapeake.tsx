import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Chesapeake"
    const first = {
        title: "Chesapeake Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Chesapeake",
        description: [""],
        content: [
            "The best website design company in Chesapeake, Virginia, DEV.Co’s team creates a customized web solution for every one of its clients. We pride ourselves on combining our expertise in software engineering with modern software design.",
            "Whether you need a start-up agency or established business designers, we strive to offer the most professional services available, adhering to the highest standards of the software engineering life cycle. Our commitment to delivering innovative solutions extends to our approach to software engineering, ensuring that your website design reflects the latest in modern software engineering design.",
            "Software engineering, software engineer jobs, project management, software testing, ensure project specification, power platform developer – these are the cornerstones of our approach to deliver outstanding web solutions. We integrate software engineering principles to ensure the robustness of your web projects and the satisfaction of your users. Our team of skilled software engineers and project managers is committed to exceeding your expectations, and our rigorous software testing ensures the reliability of your digital assets. We are your trusted partner for all your web development needs, offering top-notch software engineering solutions to drive your business forward.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "When it comes to building a website, we treat every client as if they were our only client. We don’t just develop your website; we will also hold your hand through the process of getting your site online and helping you manage this important part of your business.",
                "Creating a website design that accurately reflects your brand as well as incorporating all of your unique requests is our specialty. We will create a site that is not only beautiful and functional but also easy to update and edit yourself so you can be sure it stays fresh and up to date. Turning the initial design into a site that is not only visually appealing but is an integral part of your marketing strategy is the ultimate goal. Branding Identity, Web Design & Development Services are our core competencies.",
                "With a company philosophy of delivering excellence on every project, our team will offer you a fresh approach to harnessing the power of the web. Our reliable processes and dependable solutions ensure your peace of mind and maximum return-on-investment. We are your one-stop-shop for all aspects of web design, development, search engine optimization, and marketing strategies. We will help you grow your business.",
                "Software engineering, software engineer jobs, project management, software testing, ensure project specification, power platform developer – these are the cornerstones of our approach to deliver outstanding web solutions. We integrate software principles to ensure the robustness of your web projects and the satisfaction of your users. Our team of skilled software engineers and project managers is committed to exceeding your expectations, and our rigorous software testing ensures the reliability of your digital assets. We are your trusted partner for all your web development needs, offering top-notch software engineering solutions to drive your business forward.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Superior Website Quality",
            content: [
                "Whether you’re a start-up creating an online identity, or an established business looking to enhance your brand experience, DEV.Co can help.",
                "DEV.Co specializes in a range of web design & development services tailored to fit the needs of businesses searching for cutting-edge solutions. Our full Web Development Platform includes custom web design, responsive mobile sites, and eCommerce shopping carts.",
                "We combine our expertise in web design, development, and marketing to optimize your bottom line. Our team of web designers, developers, and content strategists has been creating everything from simple brochure sites to large-scale eCommerce platforms for years. We’re dedicated to fostering lasting relationships with our clients so we can deliver exceptional design and development at every stage of the process.",
                "We are on a mission to grow your business and train the next generation of online entrepreneurs. We can help you start from scratch or purchase an existing website.",
                "Rest assured, our seasoned designers and developers will help you build a website that reflects your brand’s personality. In addition to the classic HTML website, our team will build custom web applications tailored to your business needs, provide search engine optimization, and generate an online marketing strategy in order to drive site traffic and generate actionable leads.",
                "We offer a wide range of services to meet all of your needs. From custom WordPress website design to mobile app development, we have you covered!",
                "Software problem, software engineer, computer science, object-oriented principles, abstract data types, demonstrated experience – these are the factors that define our approach to delivering exceptional web design and development services. We integrate software principles to ensure the robustness of your web projects and the satisfaction of your users. Our team of skilled software engineers, grounded in computer science principles, is committed to exceeding your expectations, and our demonstrated experience ensures the reliability of your digital assets. We are your trusted partner for all your web development needs, offering top-notch solutions to drive your business forward.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.Co is a full-service custom software and web development company located in Chesapeake, Virginia. We proudly serve both local and online clients with a wide range of services, including custom web development, custom software development, and website design and development.",
            "We are on a mission to grow your business and train the next generation of online entrepreneurs. We can help you start from scratch or purchase an existing website. We offer a wide range of services to meet all of your needs, covering the entire software development lifecycle.",
            "From custom WordPress website design to mobile app development, we have you covered! View a selection of our work here. We help you bring your company online by making sure that your website meets the industry standards, is compatible with all major mobile devices and browsing software, and attracts new visitors daily to further improve your revenue stream.",
            "Our team of skilled software engineers and project managers ensures that your project adheres to the highest standards of project management and that proper project specification is in place from the outset. If you’re looking for software engineer jobs or need assistance with any aspect of your software or web development project, we have the expertise you need. Contact us today to discuss how our services can benefit your business.",
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