import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Charlotte"
    const first = {
        title: "Charlotte Custom Software Development Company",
        content: [
            "Establishing an online presence is pivotal nowadays. Most consumers use the internet to find a local business, which means that it’s all the more important to have a dynamic website that will properly showcase your products or services.",
            "You shouldn’t look to develop your website on your own or select an inexperienced Charlotte web design agency. Instead, make the effort of vetting your prospective agency before deciding to move forward.",
            "If you have come here searching for more information on why you should hire us, then you’ve come to the right place. At Dev.co, we specialize in building impeccable websites for all kinds of businesses. In addition to our web and cloud solutions, we also have opportunities for talented individuals looking for software engineer jobs. DEV.Co is dedicated to providing top-notch software solutions to enhance your online presence and business.",
            "Feel free to reach out to us to discuss your web design needs, explore software engineer job opportunities, and learn how our web solutions can benefit your business.",
        ]
    }

    const second = {
        title: "Web Design in Charlotte",
        description: [""],
        content: [
            "Charlotte, North Carolina is one of the most vibrant cities in the United States. It’s home to countless local businesses, which make fighting for online positioning very challenging.",
            "If your website is nowhere to be found online, then you’re at a tremendous disadvantage. In addition, your competitors will flock directly to your competitors if they don’t see your website.",
            "With a fully-functional website, you can successfully improve your online presence and visibility, while increasing the sales potential of your business. Our web design services in Charlotte are designed to improve the trajectory of your business and overall marketing strategy.",
            "In addition to web design services, we are well-versed in the software development life cycle and can help you with software solutions that meet your specific needs. Our team of expert software engineer is ready to collaborate with you to build the solutions you need. We also focus on maintaining automated unit testing to ensure your software performs at its best.",
            "Our dedicated data engineering team is here to assist you in optimizing data management and analysis. We offer comprehensive search engine optimization services to boost your online visibility and help you stand out in the competitive Charlotte market.",
            "If you’re looking to enhance your online presence, develop software solutions, maintain automated unit testing, work with a senior software engineer , or improve your search engine optimization strategy, we have the expertise you need. Contact us today to discuss how our services, and our team of expert software engineers , can benefit your business in Charlotte.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Having an ordinary website isn’t going to work. The reason why is very simple. Google only ranks the best websites on the internet. This happens because Google tries every day to preserve their reputation as the most dynamic search engine in the world.",
                "It’s in their best interest to rank websites that will truly provide value to search engine users. If you choose to build your own website without any web development managed services, then the quality of your site will suffer.",
                "It takes a professional who fully understands Google’s search algorithms to create a website that will align with its standards. Thus, hiring a Charlotte web development agency is in your best interest. Our team of software engineer specializes in creating websites that meet Google’s high standards and enhance your online visibility.",
                "In addition to web development, we offer services like mobile app development, managed services, technical support, and technical troubleshooting. These comprehensive services ensure that your online presence remains dynamic, secure, and user-friendly.",
                "So, whether you’re looking to improve your website’s performance, create a mobile app, or need ongoing technical support, we have the expertise to help. Contact us today to discuss how our services can benefit your business in Charlotte.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "",
            content: [
                "At Dev.co, we take pride in providing several amazing benefits to our customers. With that said, here are the advantages of choosing to work with us:",
            ],
            other: [
                "We have a team of more than 250+ developers. No matter what industry you operate in, we have a reliable developer who can help.",
                "We have access to onshore and offshore teams when our projects need additional staffing requirements. These teams exceed 500+ highly trained developers and project managers.",
                "All of our developers are sent through a rigorous vetting process to ensure we deliver the highest-quality web development services.",
                "We have direct experience in working with both local businesses and Fortune 500 companies.",
                "We’ll assign you a project manager to help coordinate your web development project and ensure it’s completed both on time and on budget.",
                "We have built a commitment to delivering top-notch results for our clients.",
            ],
            additional: "As you can see, there are a bunch of benefits you can take advantage of when you work with us."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We have more than a decade of web development experience. Founded in 2008 as a financial and advertising software consulting firm, our team has mastered the art of developing high-performance websites. If you’re a software developer or are looking for software developer jobs or software engineer jobs in a related technical field, we welcome you to explore opportunities with us.",
            "When you work with us, we’ll not only design a website that complements your brand. We’ll also create a website that will rank well on major search engines like Google and Bing. Our commitment to excellence in web development extends to fostering talent in the software development field, making us a dynamic and innovative choice for your web development needs.",
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
            "We’d love for you to work with us and take your online presence to the next level. If you’re interested in software engineering, mobile app development, or any of our other services, we invite you to learn more about how you can work with us. Click here to speak to a member of our team and explore the possibilities for your digital journey.",
        ]
    }
    
    const seventh = null

    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;