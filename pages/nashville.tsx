import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Nashville"
    const first = {
        title: "Nashville Custom Software Development Company",
        content: [
            "Do you want to improve your online presence? If so, then you’ve come to the right place. Dev.co is the leading provider of web design services in Nashville, Tennessee. For more than 12 years, we have built a strong reputation as the finest Nashville website development agency.",
            "However, with locations across the country, thousands of small businesses and Fortune 500 companies continually rely on us for website development services in Nashville. You shouldn’t just settle for hiring any Nashville website development agency.",
            "Instead, put your upcoming website development project in the hands of a reliable website design agency that will have your best interest in mind.",
        ]
    }

    const second = {
        title: "Web Design in Nashville",
        description: [""],
        content: [
            "Nashville is the capital of Tennessee, home to the state’s most recognizable culture symbols: country music, excellent southern cuisine, and sports. Local businesses are also very common in this city.",
            "Standing out in Nashville can be challenging since many people use the internet to find local businesses. If your business can’t be found online, then you’re going to naturally struggle to obtain any qualified leads.",
            "You may also struggle to outrank your competitors on major search engines like Google and Bing. For this reason, you should hire a Nashville website developer to spearhead your campaign in your stead.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "There are numerous DIY website builders that allow anyone to create a website. The issue with these builders is that not just anyone can build the perfect website for their brand.",
                "It takes a specialized expertise to build a website that will actually achieve the results you need to surpass your competitors. As a result, you should only hire a Nashville website design agency to create a website for your business.",
                "This way, your website’s quality will excel and you’ll put forth a website that will impress your online presence.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take total pride in our work here at Dev.co. When you choose to work with us, we will ensure that your website is completed to your total satisfaction. Here are some of the benefits you can expect working with us:",
            ],
            other: [
                "We have a team of more than 250+ developers. This means you can count on the possibility of being paired with a skilled developer who knows your industry inside and out.",
                "We have access to additional teams for large website development projects that require pressing staffing requirements.",
                "All of our developers have been properly vetted to make sure you will never receive a faulty website for your company.",
                "We have immense experience in working with both local businesses and corporate enterprises, such as Fortune 500 companies.",
                "We will assign you a project manager that will ensure that your website development project transitions smoothly.",
                "We have direct experience in delivering high-quality results for our clients.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Founded in 2008, our company started as a financial and advertising consulting firm. We take a tactical approach to all of our website design projects, ensuring the use of data-driven methods that will create a success product.",
            "No matter how large or demanding your web design needs are, our large team can handle your requests. Until you are fully satisfied, we will continue working on your behalf. This is our mission, to uphold the highest standards of customer satisfaction and service.",
            "Contact us today to learn more about how we can help you!",
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