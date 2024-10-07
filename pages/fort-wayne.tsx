import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Fort Wayne"
    const first = {
        title: "Fort Wayne Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Development in Fort Wayne",
        description: [""],
        content: [
            "We’re DEV.co from Fort Wayne, Indiana! We provide slick website design services and custom web applications that produce results. Interested in eCommerce development? Or maybe you need some business consulting advice? Whatever your company size, we’ve got you covered!",
            "We aren’t just any old firm – here at DEV.co of Fort Wayne’s full-service team is brimming with genius designers and software developers ready to help bring your brand alive online. Our technicians are experts in device management software too.",
            "Looking for “software engineer jobs”? You might want to hang on a few seconds more because our project managers can also guide the way once verification successful waiting ends up popping on screen.",
            "Come join us as we create job alert opportunities every day for ambitious computer engineering professions looking forward to innovative solutions making waves all over the world.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Creating websites in Fort Wayne is a breeze with our dedicated team. Our designers and developers use the web’s power to link you to your customers. We’re proud to offer top-notch responsive website design and development support for small business online promotions.",
                "At DEV.co, we have an extensive range of digital services available for growing businesses like yours. All members on board are well-versed with modern technology standards, including software development aspects. They team up seamlessly with skilled artists, content creators, social media wizards plus SEO experts who’ve won trust across sectors.",
                "We don’t just develop – we care about every detail from start-end when crafting your site! It guarantees that only the best representation goes out there on internet space representing you digitally as if verifying you are human.",
                "Our network security appliances ensure safety while handling embedded software tasks or mobile app projects efficiently under firm project management guidelines which include automated testing phases to ensure efficient code release within timelines.",
                "The ‘ray id’, often used by computer scientists during problem-solving is taken into account even more here at Dev.Co giving us an extra edge towards meeting customer satisfaction levels through unique solutions delivered quickly courtesy of their refined communication skills!",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "A strong online presence is key to any successful business. And, that doesn’t just occur overnight but evolves over time. This is where the experts step in, taking on this vital task.",
                "At DEV.co Web Design & Development, we house top-notch talent who work independently and have innovative tech at their fingertips for generating your desired web applications with ease – be it basic templates or custom WordPress and Drupal sites.",
                "Our team members all hold bachelor’s degrees or higher offering design applications which pass stringent code reviews impeccably while also providing round-the-clock support services. So if you’re around Fort Wayne looking to enhance your digital footprint, let us help guide you every step of the way!",
                "We are web designers and web developers, and we make it happen in Fort Wayne. We are a wide-ranging firm able to create a website for almost any need. Be it an eCommerce shopping cart, fully responsive mobile sites, a business landing page, or a blog/news/media site, we have the skills to finish the job. Plus, working with our designers and developers is fun! We’re here to help you accomplish your goals on the Internet.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is one of the best website design companies in Fort Wayne, Indiana. We focus on building stunning websites that only include elegant designs and cutting-edge technology when it comes to design, development, SEO, and overall online marketing. With combined years of web design experience, our creative designers start with hundreds of designs before they find the perfect fit for your new venture or company.",
            "From businesses to service providers we understand how important it is to present your products and services online in a professional manner that will grab your customer’s attention at first glance. Our skilled developers take your idea and create the website you envisioned with the latest technology available while",
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