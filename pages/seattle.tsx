import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Seattle"
    const first = {
        title: "Seattle Custom Software Development Company",
        content: [
            "Seattle is one of the most popular cities in the world. As such, having your digital presence is key to your success as a business. Seattle is home to both rampant local businesses and Fortune 500 companies.",
            "This means having your business stand out can be difficult. To begin improving your online presence, it’s first best to create digital products with a software engineer team that will show off your prowess and put you a step ahead of your competitors.",
            "For this reason, hiring our Seattle software development and software engineer team will be vital to your dev success. Are you searching for the right software development company to create your business website, build a custom application or launch a custom digital experience for your clients? If so, you’ve come to the right place.",
        ]
    }

    const second = {
        title: "A Seattle Software Engineer Team & Web Development Company",
        description: [""],
        content: [
            "Seattle has been known for years as a hotbed for both local and corporate technology businesses. Nowadays, people don’t search for businesses like they used to. Instead of using phone books or online directories, they’re going to use a major search engine like Google and Bing.",
            "Our custom software development team are experts, capable of delivering a wide range of customized engineering solutions to suit your needs. We start with a full business analysis then we work with popular frameworks to build on popular software engineering concepts,  engineering your next app in the software programming language that best suits your customer experience.  Our software skills include Node.js, React, Angular, Electron, and Laravel and more!",
            "If you’re seeking software engineers or even looking for software engineer jobs, you have come to the right place. By hiring a professional Seattle software development firm, you can succeed in building the perfect software application, web product flow or mobile experience for your brand.",
        ],
    }

    const third = [
        {
            title: "The Importance of Software Dev Quality",
            content: [
                "Having a mediocre digital experience isn’t going to suffice. You need complete digital transformation. That’s why with each custom software project we also include quality assurance (QA) testing to ensure software quality.",
                "We implement the highest-quality software testing principles before we deliver any code to our software development clients. If your website development team or software engineers don’t follow basic agile software development standards, then your project may be dead before it begins.",
                "Thus, building your product in-house without the guidance of a professional software development team is what you should be after. A DIY approach to hiring software engineers ensures your project is going to suffer in quality and will cause you to waste your hard-earned time and money. We implement test strategies that help avoid the pitfalls and common mistakes that occur in custom software development.",
                "Software engineering quality is extremely important in this regard. You should strive for continuous software improvement when you look to hire a Seattle software development company that has the excellent programming knowledge you need to succeed.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help with Your Custom Software Development Project",
            content: [
                "We take immense pride in the custom software development work we do here at Dev.co. Your dedicated software engineer will have a special commitment to your custom project, and will produce top-quality websites, mobile apps and digital platforms that will deliver for their intended purpose. ",
                "Here are the other benefits when you choose to work with us as your software engineer team:",
            ],
            other: [
                "There are more than 250+ software developers on our team. You can receive the peace of mind you deserve as a business owner, knowing that one of our developers will be particularly skilled in your industry.",
                "We have access to additional teams that can take on extremely large website development projects, up to 500+ team members.",
                "All of our developers are trained heavily in their discipline, ensuring that we deliver only the best web development services in Seattle.",
                "No matter if you run a local business or a Fortune 500 company, we’ll see to it that your business receives a stellar website.",
                "We will assign you a project manager to coordinate your entire website development project and keep it",
                "We have amazing experience in creating websites that deliver impactful results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We have more than 12 years of developmental experience in software and web design. Whether you want to improve your online presence or attract more qualified leads to your Seattle, WA website, we’ve got you covered. With our deep knowledge, we have serviced thousands of clients over the years and strive to maintain the highest standards of service.",
            "If you’re looking for software development services in Seattle, Washington, you’ve come to the right place. Our team of experienced developers can help you with everything from prototyping to full-scale production. We specialize in a variety of programming languages and platforms, so we can tailor our services to your specific needs.",
            "Plus, our location in the heart of Seattle, WA gives us easy access to some of the best software engineering talent in the country. Contact us today to get started!",
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

    const seventh = {
        title: "Frequently Asked Questions",
        description: "",
        content: [
            {
                title: "What programming languages do you specialize in?",
                content: [
                    "We specialize in a variety of programming languages and platforms, including React.JS, Java, C++, PHP, Python, and Ruby on Rails. We also have experience with a wide range of development tools and frameworks. No matter what your project requires, we can help.",
                    "Our developers are located in Seattle, Washington, which gives us easy access to some of the best talent in the country. Plus, our proximity to major tech companies means we’re always up-to-date on the latest industry trends.",
                    "If you’re ready to get started on your project, contact us today. We’ll be happy to provide a free consultation and help you find the perfect solution for your needs.",
                ]
            },
            {
                title: "What is your hourly rate for software development services?",
                content: [
                    "Our developers typically charge between $50 and $250 per hour, depending on their level of experience and type of project. However, we offer discounts for long-term projects or large teams.",
                    "If you’re interested in hiring a software developer in Seattle, Washington, please contact us today. We’ll be happy to answer any questions you have and help you find the perfect developer for your project.",
                ]
            },
            {
                title: "How long does it take to complete a typical custom software development project?",
                content: [
                    "Most custom software development projects typically take around 8-10 weeks to complete. However, this can vary depending on the size and complexity of the project. We have had some software development projects that have lasted for multiple years. We can provide a more accurate estimate once we have a better understanding of your specific needs. Get in touch with us today.",
                ]
            },
            {
                title: "Do you provide software development staffing services?",
                content: [
                    "Yes, we can provide software staffing services. We have a pool of experienced developers available for short-term or long-term projects. We can also provide temporary or contract-to-hire staffing for businesses that need to test out a developer before making a full-time commitment. Contact us today to learn more.",
                ]
            },
            {
                title: "Do you offer any guarantees on your services?",
                content: [
                    "We offer a satisfaction guarantee on all of our services. If you’re not happy with our work, we’ll do whatever it takes to make things right.",
                ]
            },
            {
                title: "How do your software staffing services work?",
                content: [
                    "We offer both permanent placement and contract-to-hire for positions that have programming experience and deep understanding of the software products that matter for your custom project. Our engineers have worked at Microsoft Redmond, JP Morgan Chase Bank, Apple Seattle and Visa Bellevue, WA. ",
                ]
            },
        ]
    }


    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;