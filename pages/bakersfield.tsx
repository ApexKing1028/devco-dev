import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Bakersfield"
    const first = {
        title: "Bakersfield Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Software Developer in Bakersfield, California",
        description: [""],
        content: [
            "Looking for a software developer / software development company in Bakersfield CA? Need Custom Web Design or Online Store? We create visually stunning, professional-quality Softwares/websites. Our custom, modern and mobile-ready website designs bring a unique touch to your online presence. Our Bakersfield CA company teams up with you to provide custom websites that get more visitors, more leads, and more sales.",
            "We understand that your website is the foundation for your business efforts online. When you build a website with us, we customize your design based on your brand and identity and our team will work with you to help you reach your goals.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "The right website design makes all the difference. Your bakersfield CA business is unique and deserves a web design that reflects this. Our local bakersfield CA team of experienced website developers ensures that your website is well designed, accessible, and able to instill confidence in customers.",
                "Our projects are complex and each one different. We can offer you the most comprehensive website development services in Bakersfield CA, Los Angeles County, Kern County, and surrounding communities. We truly listen to our client’s needs to help them meet their goals with advanced technology while keeping a competitive edge.",
                "Our custom website development company, DEV.Co, provides affordable and quality development for businesses in Bakersfield CA and the surrounding area. Over the past decade, we’ve developed a team of designers and developers with years of experience creating cost-effective web solutions. We pride ourselves on providing top-notch customer support and making sure that clients are happy with their new websites. Our goal is to help businesses grow by developing an effective online presence.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "How would it look if your website worked as hard for your business as you do? Let DEV.co show you how we can help you take your business to the next level with a custom website tailored to your needs. We are a team of driven and talented developers, SEO specialists, designers, and marketing pros that work with locally-based businesses to grow their online presence. At DEV.co we’ve been part of the Bakersfield CA community for over ten years so we understand what it takes to grow in this competitive market.",
                "At DEV.Co, we don’t believe in contracts–after all, our goal is to build a relationship that will last well past the completion of your project.  We pride ourselves on creating high-quality websites at an affordable price and within a timeline that suits your needs. We maintain this standard by employing only qualified team members and by investing in excellent equipment and processes. Our team of professional website designers, developers, and SEO specialists will handle your every need and ensure that your website design is effective in generating the response you desire. DEV.Co is located in Bakersfield, California, and has been creating custom websites since 2008."
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Dev.Co is a website development company based in Bakersfield CA, our team of web professionals will create the perfect website for your business. The industry-leading experts at Dev.Co is comprised of highly experienced and educated individuals from all parts of the world who have taken part in developing some of the largest and most-used websites on the internet today.",
            "DEV.Co is a full-service Bakersfield CA web design & development company offering affordable website design and online marketing for small businesses. With years of experience, we know what it takes to be successful in digital media. We build custom responsive websites that are designed to work on all platforms including desktop, tablet, and mobile devices. Your site will include great content that is optimized for search engines so that you will rank higher in the search engine results. You have one chance to make a first impression and your website must work hard for you 24/7. Our goal is always customer satisfaction, if you are not happy with our",
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