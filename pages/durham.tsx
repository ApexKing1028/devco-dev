import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Durham"
    const first = {
        title: "Durham Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Development in Durham",
        description: [""],
        content: [
            "In search of the finest web design in Durham? Your hunt ends here. For more than ten years, DEV.co has stood out as a leading player in web development for Triangle’s businesses. We have an exceptional team ready to take your online presence up a notch.",
            "We believe every company needs that tech edge to truly stand out on digital platforms – this is our philosophy at DEV.co Digital Design. Widely recognized as the top-notch provider in website creation and development across Triangle area, we pride ourselves with offering unparalleled designing services right here in Durham.",
            "Our commitment lies within quality and engineering excellence which echoes into everything we do – from hiring skilled software engineers who are adept at executing art Software programs, handling sensor data processing tasks efficiently while working alongside media engineering team focusing on software engineer jobs inside the firm! Our emphasis always remains unwavering upon excellent standards of related software Engineering field. ",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Based in Durham NC, Dev.co is your go-to for top-notch web design solutions. We’re a full-blown agency specializing in crafting the perfect website to meet your business goals with our team of entry-level software developers and seasoned pros rooted right here in Raleigh.",
                "Our services extend beyond just designing websites. To help skyrocket traffic on your site and secure online sales, we provide comprehensive digital marketing strategies which include SEO (Search Engine Optimization), PPC (Pay Per Click Management), ORM (Reputation Management) as well as SMM(Social Media Services).",
                "We pride ourselves on years of experience developing custom-made applications using new or existing technology designed specifically to fit complex web needs. Our goal? Ensuring potential clients find you front-row-centre when they search online!",
                "No matter what kind of website you need – be it one loaded with several back-end elements or something simpler like an e-commerce platform complete with lead forms -we’re always ready.",
                "By closely working together, we simplify things by providing simple yet effective solutions that put into use related skills from the software engineering field such as embedded software applications development while focusing highly on quality assurance testing for all types of streaming and digital products. ",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Dev.Co, headquartered in Durham, NC, has made its mark as a renowned software and web design company since 2002. We’ve got skills! From adept project management to responsive mobile site creation – we do it all.",
                "We’re not just about aesthetics or novelty at Dev.Co; our mission is to deliver tangible outcomes through technology solutions that matter!",
                "Our reputation extends beyond the borders of Durham. With clients spanning Asheville, Raleigh, Charlotte and even Atlanta–our work’s impact reaches far and wide. eCommerce websites? Large-scale custom applications? Consider them handled by us with finesse!",
                "We pride ourselves on crafting user-friendly interfaces for superior customer experiences using cutting-edge UX design processes—ultimately fostering repeat business!",
                "At Dev.co we don’t shy away from complex projects either – scalable distributed software system are part of what make us tick. The same goes for supporting operator tools which underpin stable tech ecosystems everywhere.",
                "And you can forget worrying about technical maintenance too — rest assured knowing your digital assets will be kept running smoothly while in our care.",
                "With advanced web design and development skills, we give you more than a good-looking website; we create functionality tailored to your business. Our designs are always striking yet guided by the sole purpose of meeting your objectives. Big or small, every client gets our full attention – because at DEV.co in Durham North Carolina, clients feel like family.",
                "A top-notch website can raise heads! With assistance from our passionate web experts on crafting personalized websites as well as establishing solid brand presence online – standing out is within reach!",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Our Web Design Company, DEV.co, is a leading and professional web development company in Durham, North Carolina. Our company has been providing reliable web services to businesses in and around the Durham area for over 4 years now. We are an outstanding web design & development company that offers both modern & advanced website design as well as custom and effective marketing strategies to client",
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