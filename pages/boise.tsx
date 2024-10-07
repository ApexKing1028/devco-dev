import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Boise"
    const first = {
        title: "Boise Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Software Development in Boise",
        description: [""],
        content: [
            "The professionals at DEV.co is some of the best in the industry and offers you the best software development in Boise, Idaho. DEV.co is a full-service software development development agency.",
            "We strive to give our clients the very best in software solutions; development technologies that gets results. No matter your company’s size or needs each client is assured premier, our software development engineer work with attention to detail and focus on project-specific goals & provable functional and technical skills.",
        ],
    }

    const third = [
        {
            title: "Superior Software development & Quality",
            content: [
                "Whether you are a startup looking for affordable software developers in Boise, or a corporation with multiple offices around the country, DEV.co’s software developer knows how to build your Software and grow your business. Developing a Software for your business can be an overwhelming & complex technical concepts task. DEV.co has been creating custom Softwares and making small business dreams come true since 2008 with professional software engineering practices.",
                "Our software engineer focus on delivering Softwares that are designed to generate traffic, improve online visibility, create brand awareness, and ultimately grow the revenue of small businesses. Our simple unique process is tailored to each client and ensures that you receive the one-of-a-kind Software you deserve.",
                "Our Idaho Software established company is ready to take your business to the next level with cutting-edge Software Development by senior software developer, mobile-friendly, affordable online marketing, and quality customer care.",
                "With over 20 years of experience in deliver software solutions, for business processes, internal business systems, build valuable enterprise systems & agile software development and a vast network of web developers, our Boise agency is poised to be your one-stop-shop for all things digital. Tell us about your project and we’ll figure out the best way to make it happen.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "With more than 10 years of experience, our team of experienced web designers and web developers will take the stress and hassle out of designing a website for you. Reaching top rankings for your business is our specialty, and we will create or redesign the perfect website to help your business get where it needs to go.",
                "We offer a range of services from websites to application development and even graphic design. Development Dimensions offers all services under one roof making us your one-stop-shop for your web needs. Whether you are looking to build your website or looking for help developing software, we have you covered.",
                "Our web design and graphic design services help us deliver the best in all categories. Our designers don’t just make things look pretty – they’re adept at translating business goals into profitable websites. We’ve been doing this for years, so we have a good handle on how to make your website work for you.",
                "Our clients have come to trust our design team for clean imagery and a flat color palette. We enjoy working with our clients to build a website that is responsive & built on a fast-loading framework. We want your user experience to be as enjoyable as possible, which is why we use the best web technology for each project. We build beautiful, mobile-friendly websites that perform well and meet your goals. You can expect exceptional client service and experienced developers who understand your business.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.Co is a Boise, Idaho-based Front End Web Design & Back End Software Development Company. We help Boise area businesses and organizations create a distinctive web presence and establish online visibility. Our web developers deliver top-notch work on time – every time. Professional and responsive, we offer extensive experience with state-of-the-art technology and internet marketing.",
            "Over the years, we have developed websites that look great on all screens. On mobile devices, tablets, and desktops. Our Web development company will create unique designs that allow users to browse your website, find what they are looking for, and convert. We offer search engine optimization, e-commerce solutions, and a host of other services for you to choose from.",
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