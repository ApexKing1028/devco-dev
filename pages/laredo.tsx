import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Laredo"
    const first = {
        title: "Laredo Custom Software Development Company",
        content: [
            "We provide website development, design, custom software development services for small businesses, startups and Fortume 500 companies alike.",
            "Our web development team boasts years of experience and understanding of the importance of working with clients to provide targeted solutions aimed at helping them achieve their objectives.",
            "With our small team of web designers, developers, and digital marketers we develop customized web design solutions and web development companies for small businesses.",
            "Our strategy focuses on creating an effective result-driven agency based on creative thinking, outstanding teamwork, quality control, customer service, and innovative web solutions.",
            "As one of the leading software development companies, we specialize in delivering innovative software solutions and custom software that propels your business forward.",
        ]
    }

    const second = {
        title: "Web Design in Laredo",
        description: [""],
        content: [
            "We at DEV.co are a web design and development company located in sunny Laredo, TX. We aim to empower small businesses by providing state-of-the-art web solutions at a reasonable cost.",
            "We specialize in custom, search-engine-optimized website design, and development. From our office on the Texas border, we are able to offer services to businesses anywhere from San Antonio to Mexico City.",
            "Our success stories highlight our expertise in software engineering, as we tailor solutions to meet specific user requirements. Whether you need a platform engineer or a comprehensive development team, we are here to turn your vision into reality.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Integrate great design with cutting-edge technology for a fantastic user experience. Our Laredo web design and development company specializing in custom solutions that are highly responsive, easy to maintain, and optimized for search engines. We build better websites than our competitors. We specialize in web design and development, fully responsive mobile sites, e-commerce, mobile apps, and digital marketing.",
                "With a team of industry veterans, we’re able to bring big agency talent to small businesses and start-ups. We believe that the web development process requires as much creativity as the creative layouts we create.",
                "And it’s our passion and enthusiasm that makes us a perfect fit for any project — from local businesses to national brands. Our ultimate goal? To create sites that are irresistible to the eye and intuitive to use.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "We offer a wide range of web design and development solutions to grow your business. Our Laredo design group has been strategically designed to form a highly talented, highly skilled engineering team proficient in a variety of programming languages; including HTML5, CSS3, Javascript, jQuery, PHP, WordPress, Magento, and more.",
                "We are so confident that our website design & development will increase your online revenue while allowing you to focus on your core competencies, such as product or service development. We know how to use design and development as tools to build your brand and grow your business.",
                "We have a proven track record of success with small businesses – just like yours. We develop custom, search-engine-optimized websites that cost less than you might think and can illuminate your message, boost your revenue, and save you tons of time.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a web design and development company based in Austin, Texas. Founded by entrepreneurs for entrepreneurs, we have successfully created and managed over 400 websites and other online properties, providing award-winning, custom solutions that drive results for our customers (as well as their small business).",
            "We are a full-service digital agency that offers everything from website design and development to marketing, branding, and content strategy services. Our skilled team has the experience and insight you need to build a remarkable digital presence that positively impacts your bottom line – while giving your audience an incredible user experience.",
            "Whether you need a modern website for your brand or an interactive UI built from scratch, our talented team has the expertise to exceed your expectations. We thrive on creativity and pushing the limits to deliver results that get people talking.",
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