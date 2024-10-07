    import * as React from "react";
    import Skill from "@/components/skills";

    const Page = () => {
        const first = {
            title: "JavaScript Development Services",
            content: [
                "Even after 25 years of advancement, Java remains one of the most popular development languages in the world. Currently, there are billions of applications relying on Java code to operate. Over the years, it has seen the introduction of new frameworks and wider third-party support, but its core infrastructure and principles remain intact.",
                "If you’re planning a development project that relies on Java, you’ll need the help of a professional Java developer to get the job done"
            ]
        }

        const second = {
            title: "Experts in Custom Software Development",
            description: ["Our expert Java developers are highly skilled; making staging.dev.co the best choice for your custom project."],
            content: [
                "Java code can be used for almost any development project, due to its impressive versatility. For example, it’s commonly used in web application development, mobile app development, and enterprise app development. However, it’s also featured prominently in IoT development, and even in blockchain development. Java code has also been used for machine learning and artificial intelligence (AI) applications."
            ]
        }

        const third = {
            title: "What Makes The Java Programming Language So Popular?",
            description: [
                "JavaScript creates a rich user experience that captures attention, engages users, and creates a smooth user experience. User experience is central to your website’s success.",
            ],
            content: [
                {
                    title: "Complete independence.",
                    content: "First, the Java programming language is a completely independent platform, meaning Java isn’t required to be run on a specific operating system or processor. Instead, it relies on Java Virtual Machine (JVM). This allows applications to be completely cross-platform, without any adjustments required by Java developers."
                },
                {
                    title: "Built-in security.",
                    content: "Java was conceived with security in mind; it brings its own set of authorization rules and security policies, which prevent the app from being misused. Obviously, Java developers still need to keep security in mind when developing applications."
                },
                {
                    title: "Multi-thread possibilities.",
                    content: "Java developers also favor this language for its multi-threaded potential; in other words, it can handle concurrent processing. Certain applications, especially those that handle many simultaneous user requests, make this a practical necessity."
                },
                {
                    title: "Full error handling",
                    content: "Runtime errors are always a problem, but in the Java programming language, applications can seamlessly switch to an alternative set of instructions—allowing execution to continue, uninterrupted."
                },
                {
                    title: "Frameworks and libraries",
                    content: "You can choose from any number of frameworks for your next development project, but Laravel is popular for a reason. And if you’re looking for high-level functionality without long delays, it’s an option worth considering."
                }
            ],
            other: []
        }

        const forth = {
            title: "The DEV.co Java Development Process",
            description: [
                "OWhen we develop Java applications for our clients, we follow a straightforward software development lifecycle to make sure that we create the perfect app for your needs:",
            ],
            content: [
                {
                    title: "Discovery and onboarding",
                    content: "First, we meet with you to learn more about your business and your goals with this project. What are you hoping to achieve? What are your business goals and values?"
                },
                {
                    title: "Brainstorming and collaboration",
                    content: "Together, we’ll work up a plan for your application and submit design possibilities for your approval."
                },
                {
                    title: "Agile development",
                    content: "Using agile development methodologies, our Java developers will create a minimum viable product in iterative stages, and gradually flesh out new features and components as necessary."
                },
                {
                    title: "Testing and launch",
                    content: "Once our Java developers have a functional version of your app in place, we’ll be ready to launch—but not before a thorough round of QA testing to squash any bug"
                },
                {
                    title: "Ongoing testing, maintenance, and support",
                    content: "Our support doesn’t stop there. Our Java developers continue to support all our Java projects even after launch; we’ll test the app to make sure it’s running properly, commit maintenance, add features, and provide assistance as needed."
                }
            ]
        }

        const fifth = [
            {
                title: "Which Projects Use Java?",
                content: [
                    "Java can be used for almost any development project, due to its impressive versatility. Java supports many design patterns. For example, Java developers commonly use it in web application development, mobile app development, and enterprise app development.",
                    "However, it’s also featured prominently in IoT development, and even in blockchain development. Java developers have also used it for machine learning and artificial intelligence (AI) applications."
                ],
                other: []
            }
        ]

        const sixth = [
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

        const seventh = {
            title: "Are you ready to learn more about Java development?",
            content: [
                "Or are you interested in a free quote?",
                "Contact DEV.co for more information or a free consultation today!"
            ]
        }


        const eighth = {
            title: "Interesting Facts About Java",
            content: [
                "Java is one of the most popular programming languages on the planet, second only to C.",
                "There are currently more than 9 million Java developers in the world.",
                "Despite a large number of Java developers, there’s still high demand for software engineers here. It’s one of the top languages in terms of job postings, with more than 60,000 new Java job postings each year.",
                "More than 3 billion mobile phones are using Java.",
                "There are more than 125 million TV sets and Blu-ray player applications using Java.",
                "The median salary of a Java developer is $83,975 USD.",
                "Many software developers start out learning Java because it’s great for learning the basics of programming. It’s one of the most fundamental development languages, and forces you to think through problems like a developer.",
                "Java developers find the language highly dynamic, giving you flexibility for modifying compiled classes and working well with open source libraries.",
                "Java has been around since 1992, when it was originally called Oak.",
                "Java code originated when developer James Gosling attempted to “clean up” C++, ultimately resulting in a new language with a new runtime.",
                "The mascot of Java is known as “The Duke,” and you can find a life-sized representation of Duke at each JavaOne developer conference.",
                "The mascot of Java is known as “The Duke,” and you can find a life-sized representation of Duke at each JavaOne developer conference."
            ]
        }

        const nineth = null

        return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
        )
    }

    export default Page;