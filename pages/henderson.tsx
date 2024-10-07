import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Henderson"
    const first = {
        title: "Henderson Custom Software Development Company",
        content: [
            "DEV.co Henderson Web Design & Development Company is a digital agency that delivers results!",
            "We specialize in affordable custom software development and online marketing strategies.",
            "Our custom, search-engine-optimized solutions will effectively convey your company’s message to the right audience.",
        ]
    }

    const second = {
        title: "Web Design in Henderson",
        description: [""],
        content: [
            "DEV.co combines the best of Henderson data solutions, digital strategies, development services, and marketing to create custom solutions that differentiate you from your competition and align your business goals with an online presence. They focus on building relationships, and working closely with their clients to make sure they’re always happier than when they started.",
            "DEV.co provides end-to-end web design and development services to small businesses across the U.S. Whether you need a website, mobile app, or a marketing campaign, our award-winning team of designers and coders is here for your project.",
            "We also specialize in custom WordPress development (we developed a plugin with over 100,000 active installs). We are one of only three companies dedicated to the core codebase through the WordPress Core Contributor program.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "DEV.co is unlike any other Henderson web design and development company. They focus on creating and managing digital projects that help advance your business objectives while providing the highest level of customer service. DEV.co’s experienced team of designers, developers, content strategists, and marketing experts work with you to develop effective digital brands, ensuring every aspect of the user experience is aesthetically pleasing and intuitive.",
                "We specialize in web design and development, fully responsive mobile sites, e-commerce, mobile apps, and digital marketing. If you’re looking for an online presence for your business or organization, we can help you tailor a custom solution that fits your needs and helps your business grow.",
                "Our staff love to work with local businesses because we get to know our clients on more than just a professional level; we become friends. If you want to learn more about the digital tools we can provide your organization or small business, or if you’d like to work with us on creating a website, contact us now.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Worried that your business needs a site? DEV.co is a digital company that creates web and app design and development, with three offices in the US, UK, and Asia. With over 40 successful years of service between the first two offices, our team takes pride in building new solutions for your business needs as well as establishing rich connections between you and your customers by providing search engine optimization services.",
                "We customize your web experience to meet your business’s unique needs. From a simple mobile responsive website design to full development services, we’re ready to meet your needs with our personalized web solutions.",
                "DEV.co is headquartered in Henderson, KY, and serves clients nationwide with our digital solution expertise for small business clients. With a wide range of affordable digital services, we take the worry out of hiring a web design company by offering a 100% satisfaction guarantee. Whether you are looking to build your new website or update an existing one, DEV.co has you covered with our expertise and experience.",
                "From social media marketing or domain resales, search engine optimization to logo design- this is a one-stop shop for all things online. If it’s digital, you can trust DEV.co to get the job done. ",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co builds web & software that allows businesses to grow – by setting them apart from their competition. We’re based out of the sunny city of Henderson, Nevada, and we specialize in digital services and web development.",
            "From our roots of full-service web design & development to our current status as a digital marketing agency, we’ve invested heavily in advancing our expertise in the digital industry.",
            "Our talented team of web designers, developers, and SEO marketers is supported by some of the best technology in the industry. From start to finish, our digital services will get you lasting results.",
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