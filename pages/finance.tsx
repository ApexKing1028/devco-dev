import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Software Development for Finance",
        content: [
            "The value of the FinTech industry now reaches tens of billions! And guess what? More growth is coming with advancements in data analytics, blockchain, and cloud computing!",
            "If you own a finance business today – here’s your wake-up call: adapt to new tech faster than ever before! But remember this too – finding reliable partners that offer proper solutions matters as much.",
            "Here’s where hiring a financial software development company comes in handy. They can provide custom-made best-fit solutions crucially required by different “financial institutions”. No more trying to jam square pegs in round holes when our needs are unique after all!",
            "Bespoke custom financial software development services have another edge – efficiency gains from smart management of large volumes of financial data.",
            "Ultimately these wise choices will help keep any entity secure its place within an increasingly digital-oriented financial Industry."
        ]
    }

    const second = {
        title: "Why Outsource Software Development?",
        description: [""],
        content: [
            "Financial tech firms with hefty resources have a key decision to make. They can either bring on board software developers and pump cash into in-house development, or they could team up with an experienced software development company for customized services. Typically, most sway towards the second option.",
            "Why is that so? The financial sector has its own unique hurdles – regulatory compliance being one of them. Customized financial software solutions aid in streamlining these complex regulations easily while managing day-to-day financial operations smoothly.",
            "Dealing effectively with customer relationship management also becomes less challenging when having such tailored tools at your disposal from an expert developer’s lens.",
            "The benefits of financial software are clear: optimized processes lead to more proficiency and allow companies to stay competitive within their industry.",
        ]
    }

    const third = [
        {
            title: "",
            description: [],
            content:
                [
                    {
                        title: "Access to the best",
                        content: "You can easily find regular software developers. But it's not the same with top-tier ones - they're rare gems! By partnering for your financial software development needs, these skilled experts become attainable cost-effectively. We provide emerging technologies and innovative solutions in custom financial software. We excel at creating secure financial software that improve both portfolio management and expense management control tools. As a software development partner for developing such unique platforms, we are committed to enhancing your business' standards of financial reporting."
                    },
                    {
                        title: "Frees up resources",
                        content: "When investment firms try to build financial software in-house, it's like lugging a heavy backpack. It slows you down and tires everyone out. Productivity dips as attention is split. Choosing to outsource? That's lightening the load! Your team can focus purely on what they're good at - managing personal finance management apps or improving financial processes for instance. Everyone continues pulling their weight without overstretching themselves or limiting the firm’s abilities to deliver results effectively within the finance industry."
                    },
                    {
                        title: "Lower cost",
                        content: "Hiring financial software developers for FinTech projects is a smart money move over time. It even offers you solid support and assurance, so it's like having a safety net beneath your high-flying finance apps. Besides, using cloud computing in personal finance software can totally revamp how we handle our bucks. Deep learning networks are also worth the hype! They help optimize financial performance massively - think big gains with little pains! At the end of the day, an outsourced development team takes care of building as well maintaining these advanced systems. Imagine that—you get top-notch service without breaking a sweat or burnout from handling tech problems yourself!"
                    },
                ]
        },
    ]

    const forth = null

    const fifth = null

    const sixth = {
        title: "Why Dev.co?",
        description: [
            "At Dev.co, we take pride in developing custom software for financial services companies.",
            "Whether you have a specific idea for a targeted piece of software, or you want our team to brainstorm appropriate applications that will allow you to grow and become more competitive, we can help. When you work with us, we guarantee:",
        ],
        content: [
            {
                title: "Security",
                content: "Few industries have data security requirements as strict as the financial world. We understand these regulations and will work closely with you to develop software that counters all major threats and keeps your private data safe and secure."
            },
            {
                title: "Reliability",
                content: "Our software is precisely developed and put through rigorous testing to ensure a positive user experience and optimum value. This enhances reliability and sets your team up to be successful in as many areas as possible."
            },
            {
                title: "Maintainability",
                content: "We develop all software with the golden rules of coding in mind. This makes it easy to modify code in the future and keep your solutions nimble and modern"
            },
        ]
    }

    const seventh = null

    const eighth = [
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
            title: "Deliver",
            content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
        }
    ]

    const nineth = {
        title: "Contact With DEV.CO",
        content: [
            "There are plenty of software development services, but at Dev.co, we’re proud to be one of the top software development companies for finance.",
            "Our focus on FinTech ensures you get top value and maximum ROI each step of the way. Please connect with us to learn more!",
        ]
    }

    const tenth = null

    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;