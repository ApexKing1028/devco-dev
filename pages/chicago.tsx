import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Chicago"
    const first = {
        title: "Chicago Custom Software Development Company",
        content: [
            "Chicago, otherwise known as the Windy City, is known for its Midwestern charm and stunning restaurants. Local businesses are common throughout the city’s metro area, making competition tough.",
            "If your business lacks an established online presence, then it will naturally suffer to attract potential online leads. Creating an exceptional website is the first step to boosting the sales and revenue of your business, particularly in the world of software engineering and quality engineering industry trends.",
            "Though, it can be made by just anyone. Hiring a Chicago web design agency is the first step in turning your website into a digital storefront. Dev.co, located in Chicago, IL, can help you make the transition from a local business into an online empire by offering software engineering and software solutions that align with the latest quality engineering trends. So, if you’re looking to establish a strong online presence and enhance your business, consider Dev.co for your web design and software engineering needs.",
        ],
    }

    const second = {
        title: "Web Designer in Chicago",
        description: [""],
        content: [
            "Both tourists and natives are keen on Chicago’s vibrant business scene in Chicago IL. Standing out amongst the competition is key to growing your business and staying afloat in a tough market in Chicago IL.",
            "Most likely, all of your competitors in Chicago, IL have a fully-functional website that’s ranking on major search engines like Google and Bing right now. What is your counter for their website? If your website doesn’t hold up to the same quality, then you’re at a disadvantage in Chicago, IL.",
            "For this reason, hiring a Chicago web design agency is key in Chicago IL. If you’re looking for premium web design services in Chicago IL, then you’ve come to the right place. Dev.co is the perfect place to receive a top-notch website for your brand in Chicago, IL. So, if you want to stand out in the vibrant business scene of Chicago IL, consider Dev.co for your web design needs.",
            "And if you’re also seeking software engineering jobs in Chicago IL, Dev.co can be an excellent resource to explore opportunities in this field. Whether it’s web design or software engineering, Dev.co has you covered in Chicago IL.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "In earlier times, it wasn’t possible to create a website unless you were a skilled coder. Nowadays, DIY website builders can be used by anyone without any development knowledge. However, there are noticeable disadvantages to building your own website, which include:",
                "1. The quality of your website will suffer drastically. It takes knowledge and experience, particularly in computer science, and the expertise of a software engineer to properly build a website.",
                "2. Even if you succeed, there’s a low chance that your website will even appear on major search engines, which is where the technical skills of a software engineer come into play.",
                "3. You’ll ultimately waste your valuable time and money on a website that won’t net you a return on your investment without the guidance of a software engineer.",
                "Building a website is never a solo job. Allow us to help create the perfect website for your brand today! If you’re interested in software engineering jobs or require the skills of a software engineer who understands computer science, we have the expertise to make your website a success with the help of a skilled software engineer.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we take immense pride in the work we do. We strive to uphold the highest standards of service and customer satisfaction. With more than 10 years of experience in our field, we can help take your online presence to the next level with the help of experienced software engineers and software development teams.",
                "Here is everything you can expect when working with us, whether you’re in a related quantitative discipline or need the expertise of a software engineer:",
                "Design: The best websites leverage top-notch user experience. When web visitors are happy, your website grows. At Dev.co, we don't just build excellent websites. We also take the user experience of your audience into account during every phase, thanks to the expertise of our software engineers and our commitment to custom software development. Our team of skilled software engineers ensures that your website is not only visually appealing but also functionally sound. We follow Agile software development methodologies to continuously improve and adapt your website to meet the evolving needs of your users. By prioritizing user experience, software engineering, and Agile software development, we create websites that not only look great but also perform exceptionally, making your online presence a key asset for your business.",
                "Develop: From QA testing to design mockups, our team, which includes software engineers, software development associates, and full-stack software developers, will streamline the entire development process. We understand the importance of functional specifications and requirements, ensuring that every aspect of your website is carefully considered to guarantee top-quality results. Our experienced software engineers and software development associates work hand-in-hand to ensure that your website not only meets but exceeds your expectations, backed by the expertise of our software engineer jobs. With a focus on functional specifications and requirements, we pay attention to every detail, from the design specific testing strategies to the final product. At Dev.co, we're committed to delivering a website that represents the industry best practices in quality and performance, thanks to the dedication of our skilled software engineer jobs. Our team is here to ensure your online presence aligns with the highest standards of excellence.",
                "Deploy: During this phase, our team, including custom software experts and a group of skilled software engineer jobs, will make sure that your website is ready to go. Not only will we train you on how to use your website, but we'll even provide maintenance to ensure that it's working at peak performance at all times. Our commitment to custom software solutions means that your website is tailored to your specific needs, providing a unique and optimized user experience. Our custom software solutions extend to web services, ensuring that your online platform is seamlessly integrated into the digital landscape. We leverage an advanced automation tech stack, implemented by our expert software developers, including software engineer jobs, to enhance the functionality and performance of your website. At Dev.co, we combine cutting-edge technology with custom solutions to provide you with a powerful and dynamic online presence, supported by a team of skilled software engineer jobs who excel in their respective roles.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "When you choose to work with us, we’ll sit down and gain a better understanding of the goals you have for your website. Whether you want to receive more leads or physical visits, we’ll design a website that improves your ROI, leveraging our expertise in computer science, and the skills of our software engineer jobs, including full-stack software developers with top-notch coding skills.",
            "Our approach is rooted in a deep understanding of your objectives. At Dev.co, we not only create websites but also tailor them to your specific needs. This involves harnessing the principles of computer science and the collective knowledge of our skilled software engineer jobs, especially our full-stack software developers, who bring their coding skills to the forefront. We’re committed to helping you achieve your website goals and enhance your online presence."
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