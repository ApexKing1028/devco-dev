import * as React from "react";
import Service from "@/components/services";

const Page = () => {
    const first = {
        title: "QA Software Testing Services",
        content: [
            "Before your software launches, you’ll need to comb it carefully for bugs, functional",
            "problems, and other technical issues. That’s why quality assurance (QA) testing exists—to make sure your users see the best possible version of your product.",
            "Of course, QA testing isn’t something to take lightly. If you want to be successful, you’ll need to work with a trustworthy, experienced QA testing partner."
        ]
    }

    const second = {
        title: "What Is QA Testing?",
        description: [""],
        content: [
            "QA testing is a type of software testing, meant to test your product late in the development cycle. Its basic goal is to test a product to make sure it’s released at the best possible quality.",
            "QA testing usually employs a consistent set of standards and tools, meant to evaluate the design, functionality, and reliability of a given app. Tools and human testers work together to analyze performance benchmarks, find and document bugs, and identify areas for potential improvement. By this point, the app should be nearly ready for release—and QA testing serves as a form of polishing."
        ]
    }

    const third = [
        {
            title: "What to Look for in a QA Software Testing Provider",
            description: [
                "To find a good QA software testing partner, look for the following:"
            ],
            content:
                [
                    {
                        title: "Experience",
                        content: "How long has this company been QA testing? What kinds of clients have they had in the past? Do they specialize in testing a specific type of app, or are they a generalist?"
                    },
                    {
                        title: "Reputation",
                        content: "What kind of reputation does this QA provider have? Look at their online reviews and testimonials."
                    },
                    {
                        title: "Documented standards",
                        content: "Good QA testing requires consistency and ongoing improvement. Accordingly, your QA testing provider should have documented testing standards in place."
                    },
                    {
                        title: "Transparency",
                        content: "Your QA testing services provider should also be transparent. They should make it clear how they operate, and be willing to answer all your questions."
                    },
                    {
                        title: "Automation and speed",
                        content: "Timing matters. Today’s best QA testers use a combination of automation and agile strategies to verify the quality of your app as quickly as possible."
                    }
                ]
        },
    ]

    const forth = [
        {
            title: "Our QA Testing Services",
            description: "We practice QA testing at several levels of software development, including API testing, integration testing, and system testing. Our services include:",
            content: [
                "Equivalence partitioning.",
                "Boundary value analysis.",
                "Cause and effect analysis.",
                "Bottleneck analysis.",
                "Multi-level software testing.",
                "Progressive web applications.",
                "Usability testing.",
                "Configuration testing.",
                "Security testing.",
                "Installation testing.",
                "Environmental analysis.",
                "Requirements testing.",
                "Risk management.",
                "Code review.",
                "Design review."
            ]
        },
    ]

    const fifth = null

    const sixth = {
        title: "Our QA Testing Process",
        description: [
            "When QA testing a new product, we follow a formal process, with these phases:"
        ],
        content: [
            {
                title: "Planning",
                content: "First, we need to determine your needs and come up with a unique QA testing solution that suits them."
            },
            {
                title: "Design and development",
                content: "Next, we’ll lay out a course for our QA testing, which may include creating automated tools for the testing process."
            },
            {
                title: "Implementation",
                content: "Once ready, we’ll implement our testing process and begin studying your app."
            },
            {
                title: "Analysis",
                content: "Together, we’ll analyze our testing results, which may require follow-up maintenance and further rounds of testing."
            },
            {
                title: "Final reporting",
                content: "Our final report will provide direction and summarize our findings."
            }
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
        title: "Contact with DEV.CO",
        content: [
            "With the right QA testing partner, you can ensure your app is ready for your user base."
        ]
    }

    const tenth = null

    return (
        <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;