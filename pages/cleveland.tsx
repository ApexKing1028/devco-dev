import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Cleveland"
    const first = {
        title: "Cleveland Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Cleveland",
        description: [""],
        content: [
            "The DEV.co team delivers expert web design and custom software development for small business and non-profit organizations. We offer the best web design in Cleveland, Ohio, while keeping accessibility at the forefront to advance your online presence. Our development team offers a beautiful responsive web design at a cost-effective price. You will find that our Branding and Marketing team sets us apart from other development companies in the Cleveland area.",
            "DEV.co has provided web design & development services to thousands of small businesses. From our home office in Ohio, we offer a wide range of web design services to help companies connect with their customer base and expand their markets. Our team members have years of experience in the digital media industry, having earned certifications such as Google Analytics, HubSpot Inbound Marketing Certification, and more. When you choose DEV.co for your Cleveland website design & development needs, you’re choosing an agency with unmatched expertise that can help your business reach its full potential online.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "We understand the vital role that good design plays in developing a strong presence on the Internet. That’s why the websites we develop for our clients are our top priority.",
                "We’ll help grow your business online with more web traffic and sales. We stand out from other web design agencies because we offer our clients the most competitive prices, write software requirements, and deliver features that will help you grow your business.",
                "We’ve been helping businesses in the Cleveland area and beyond grow and flourish online since 2008. With one “all-encompassing solution for all of your digital needs,” our Cleveland web design company will help you celebrate your brand, whatever its stage of development. From business cards to book covers, mobile-friendly websites to SEO, we offer it all in one place.",
                "For over a decade, our team at DEV.co has helped businesses across the globe launch new products and build thriving online presences. We work with each client to develop a unique strategy for success, no matter the scope of their project or budget. When it comes to your next website or application, trust your business to the professionals at DEV.co.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Let us help grow your business through targeted internet marketing, including but not limited to:",
                "Our development team creates flexible, engaging web applications using current technologies and standards. From fully responsive mobile sites to eCommerce shopping carts and custom web applications, everything will be lightweight, fast, secure, and reliable. We can develop on any platform. Our skilled team works closely with you to ensure your vision is delivered effectively.",
                "Our mission is to get you found on the internet with a top-notch website design & development team focused solely on making you look good, and your business more successful! Your website is not one more of your expenditures, but rather an investment that will generate meaningful revenue. We provide the skills, talent, and timely solutions to help your project succeed. Let’s talk about your goals, and create a campaign that will get it done.",
                "Our team of Cleveland web designers and developers will help you create a website that embodies your business or organization and communicates your message with clarity and impact. We work with you to develop an attractive, feature-rich website that is mobile-ready, responsive, and easy for your customers and clients to navigate.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "Engage Our Development Services",
        content: [
            "DEV.co offers full-service web design & development, including flash design, e-commerce, logo design & hosting. We are a creative design company in Cleveland, Ohio with capabilities in web/graphic/digital media.",
            "We also create job alert for software developer jobs and computer science graduates in Cleveland OH. ",
            "Our web designers and software developers are accomplished artists across the tech stack and offer full-service solutions in multimedia development and internet solutions for small business owners. Our software developers are also pros when it comes to mobile application software, DevOps utilizing tools, cross platform development tools, develop codes, meet project deadlines, and critical production problems. ",
            "Our goal is to help you establish your online presence via an internet marketing campaign plan that offers a mix of search engine optimization and social networking strategies to get your website noticed by potential clients.",
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