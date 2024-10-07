import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Austin"
    const first = {
        title: "Austin Custom Software Development Company",
        content: [
            "Austin, Texas is one of the largest cities in the United States. If you run a business of any kind in the area, then it’s very important to establish an online reputation. Doing so requires you to receive a stellar website that will properly showcase your products and services.",
            "However, building an ordinary website just won’t do. You need a professional Austin Tx web design agency to assist you in creating a website that aligns with your brand’s image",
            "Not only that, but a qualified web developer can also help your website rank better on major search engines like Google and Bing. At Dev.co, our award-winning team can help take your digital presence to the next level.",
        ]
    }

    const second = {
        title: "Software Development in Austin Tx",
        description: [""],
        content: [
            "There are so many reasons why hiring a software engineer in Austin Tx is essential. The primary reason is that hiring a software dev agency can help you acquire new web leads and convert them into paying customers, Using professional software engineering practices & software engineering methodologies .",
            "Also, hiring a software engineer/developer for your software development project will put you in prime position to outrank your competitors and even steal their business. As you can see, having a great website can give your entire online presence a boost.s",
            "With a Quality Software, your business can gain more visibility in front of your target audience, mainly since most consumers use the internet to find local businesses.",
        ],
    }

    const third = [
        {
            title: "The Importance of Software Quality",
            content: [
                "Any Software isn’t going to get the type of results you’re looking for. This is especially true if you build your own Software/website. There are so many DIY website builders you can access to design your own site.",
                "The problem is that only professionals are capable of building websites that are able to rank well on major search engines. Web developers also have the tools and resources to complete large web projects.",
                "Overall, hiring a web development agency in Austin Tx is in your best interest to develop software solutions. Doing so will ensure that the quality of the final product doesn’t suffer and that your website is ready to produce results for your business.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "With more than a decade of web development experience, you can count on us to spearhead your web development project. In particular, here are several ways we can benefit your web project:"
            ],
            other: [
                "We have a team of more than 250+ developers, specializing in a wide array of industries. No matter the type of business you operate, we can create a website that aligns with your brand.",
                "We have the additional resources to scale our services depending on the complexity of your website project. If your project requires large staff requirements, then we can meet them.",
                "All of our developers are vetted through a vigorous process to ensure you receive a high-quality website.",
                "We deliver impeccable websites for both small businesses and Fortune 500 companies.",
                "Our project managers are highly-experienced in coordinating both large and small web projects to assure efficient operations.",
                "Our direct experience in your industry allows us to deliver exceptional results.",
            ],
            additional: "As you can see, we can help take your online presence to the next level with a truly remarkable website. This way, you don’t have to do any heavy lifting on your own."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Are you wondering exactly what makes Dev.co one of the best website developers in Austin Tx? Since 2008, we have worked with thousands of companies, building a direct expertise in creating websites that deliver results.",
            "What we bring to the table is a proven expertise in creating websites that will deliver qualified leads to your business."
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