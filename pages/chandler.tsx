import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Chandler"
    const first = {
        title: "Chandler Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Chandler",
        description: [""],
        content: [
            "Creating an impact starts with design. Be it a top-notch website or an outstanding business card, we know the drill to make designs that leave a lasting impression. With over 10 years of experience in Chandler, Arizona, and nationwide, we’ve mastered this art.",
            "We have our agile team ready for you! Our certified designers and engineers are versatile experts who can offer numerous services; they ensure your project is done perfectly.",
            "Don’t let your website design hold back your business. Kickstart its growth with the right web design and development services today! Based in Chandler, Arizona, our Web Design company ensures that you stand out online and globally. We offer top-notch tech-design documents along with internet marketing strategies to boost your business presence.",
            "Our aim? To help draw new customers towards what you have on offer – we make it a point to go above and beyond for this.",
            "Our aim? To help draw new customers towards what you have on offer – we make it a point to go above and beyond for this.",
            "We don’t stop there, though – our services go beyond standard website design projects, including social media integration, blogs, newsletters, press release distribution, building mobile-optimized websites, domain management & search engine optimization.",
            "We make sure customers find you before anyone else does- always remembering the power search engine optimization holds for getting ahead in today’s digital world.",
            "In addition to our web design and development services, we also have expertise in the Software Development life cycle. Our team of experienced software engineers can help you with a wide range of software projects, leveraging their professional software development experience to ensure your projects are executed to the highest standards.",
            "Are you looking for software engineer jobs? We’ve got openings here! If coding excites you and innovation is your thing, we’d love to chat. Shoot us a message; let’s explore how you could fit into our projects.",
            "With our combined expertise in web design, and software development life cycle, and a dedicated team of professionals, we are ready to take your projects to the next level. Contact us today to discuss how we can assist you in achieving your business goals.",
        ],
    }

    const third = [
        {
            title: "Website Development",
            content: [
                "We’re here in Chandler to give you top-notch website design and development services. We tune into your requirements, crafting sites that are sleek, simple to use, and great-looking too. Our business websites aren’t just pretty faces – they effectively drive new clients your way.",
                "But we don’t stop at web services! You can also count on us for software engineering prowess. With a mix of imaginative software developers and software engineers on our highly talented team, we love bringing fresh digital new solutions right to the table.",
                "We provide high-quality web designs for small businesses, non-profit organizations, and individuals. Our website design services include search engine optimization (SEO), mobile-friendly designs, online marketing, and blogging services in the greater Phoenix area.",
                "Looking for passionate software engineers? Need help with your next digital project? Our team is packed full of talented individuals who can make that happen. We’re experts not only in creating beautiful websites but also in developing your digital goals.",
                "Ready to see how our know-how could give you an edge? Reach out! Let’s chat about all things web design, development, and software engineering services. You can find out what we can do for your business or project.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Mobile Development",
            content: [
                "Dev.Co is a web design firm based in Buffalo, New York, known for top-notch mobile app development. The best mobile development companies completely transform what their clients’ websites and applications could be. ",
                "Made up of skilled software life cycle and innovative developers, we produce bang-up-to-date applications suited to all modern devices and operating systems. Our team lives for everything ‘mobile.’",
                "We’ve gained popularity over time as one of Arizona’s go-to places for digital solutions because we put expertise into every project.",
                "If you’re looking for software developer jobs or a software engineer to join our team, we welcome those passionate about software development and innovation to connect with us. DEV.Co offers an inspiring environment for software engineers to grow their careers and contribute to cutting-edge projects.",
                "Our custom app and website development services include native iPhone and Android development, hybrid mobile app development (e.g., PhoneGap/Cordova), CMS Website Development (WordPress), Web Design, SEO Consulting, Social Media Management, and Pay-per-Click (PPC) Management Services. We have built customized solutions with usability in mind, focusing on what makes the most sense for your business to grow.",
                "Looking for the best in mobile app or software development oppportunities? Look no further! DEV.Co is here to serve you. Please reach out to us right away and discover how our experts help make your digital aspirations a reality.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "We’re professional web designers and developers who love getting everything just right. Building top-notch websites for our clients is what we do best – sites that bring great results over time. But it doesn’t stop at building new ones; if you’ve got an existing website, we’re ready to enhance its features too! And guess what else? We offer bespoke software solutions so your online presence stays fresh with the latest other technical disciplines.",
                "We provide professional web marketing services to help your website be found by more people so you can receive more leads. Our team’s expertise in computer engineering allows us to craft innovative solutions that boost your online visibility and customer engagement.",
                "We develop useful, responsive websites using the latest technologies and CMS platforms in modern designs. We create websites that are user-friendly and superbly designed, whether it be for mobile devices, e-commerce solutions, or even applications.",
                "We specialize in helping small to medium-sized businesses grow their online presence through new website development, search engine optimization (SEO), and social media management. Our custom-built approach to every new web project ensures that we develop tailored software solutions to meet your unique needs and goals.",
                "Are you aiming to boost your online presence? Do you need a hand from computer science gurus and software professionals or just some regular help with upkeep and upgrades for what’s already in place? Either way, we’ve got your back. Get in touch today! Let’s talk about how we can lift up your digital game plan towards enduring success.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Developing the best Web Design Chandler, AZ has to offer is at the heart of DEV.Co. Our website designers and developers are specialists in creating outstanding, search engine-friendly, modern websites. In addition to our web design and development services, we also have opportunities for talented individuals looking for software engineer jobs. DEV.Co is committed to fostering excellence in software engineering and offers a welcoming environment for creative software developers to thrive.",
            "We have a full-service digital agency that offers design, development, and marketing services. Our custom-designed content management system provides you with complete control over your site – update text, images, social media content, and more. And with our annual IT support package included in every design package, you will always have SaaS (Software as a Service) maintenance for your website.",
            "Make an appointment today to get started on building your own customized website, and if you’re a software engineer or a creative software developer looking for exciting opportunities, we encourage you to reach out to explore the possibilities of joining our team.",
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