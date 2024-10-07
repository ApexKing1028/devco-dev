import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "iOS Development Services",
        content: [
            "As an iPhone or iPad user, you may have wondered who developed the apps that you use every day. The answer is often independent developers who create amazing apps in their spare time, or full-time developers working for a company that specializes in iOS development. If you’re looking for quality iPhone or iPad apps, then you need to find a good iOS developer.",
            "Apple’s iOS operating system is one of the most popular in the marketplace. It’s renowned for its simplicity, reach, and quality. And because it’s backed by Apple, it comes with a degree of stability and service that other mobile app development systems simply can’t match. If you’re looking to develop an iOS application, we’d love to come alongside you and support your project in any way we can."
        ]
    }

    const second = {
        title: "We Build iOS Apps that Deliver Results!",
        description: [
        ],
        content: [
            "DEV.co is a company that provides iOS developer services to clients all over the world. We have a team of experienced and talented iOS developers who can help you create the perfect iPhone or iPad app for your business or individual needs. We have years of experience creating top-rated apps for the Apple App Store, and we’re confident that we can exceed your expectations with our work.",
            "There are plenty of iOS developers in the industry, but few have the experience and detail orientation that our Dev.co team brings to the table. Whether you’re looking for a team to develop an app from scratch, optimize an existing app, or consult with you regarding other iOS projects, we’re fully equipped to walk you through the process from beginning to end."
        ]
    }

    const third = {
        title: "Why Choose iOS?",
        description: [
            "Tens of millions of people are familiar with iOS from the user side of things, but what makes it such an important framework as an iOS developer?",
            "Here are a few of the key benefits:"
        ],
        content: [
            {
                title: "Loyal user base.",
                content: "Very few brands across any industry or sector have as loyal of a following as Apple. Its well-established community provides a stable and competitive user base - making it the perfect audience to serve your world-class app. Apple users are some of the most loyal customers in the world. They are passionate about their devices, and they are always looking for new and innovative ways to use them. iOS developers need to be aware of this passion and tap into it. When creating an iOS app, you need to make sure that it is not only functional and user-friendly, but also stylish and appealing to Apple users."
            },
            {
                title: "Exceptional security.",
                content: "Apple requires iPhone apps to meet rigorous standards of quality and security before they can be introduced into the App Store. Thus, the level of security provided by iOS is exceptional. iOS is a secure platform, and our team of iOS develoeprs takes security very seriously. We use the latest security features available in iOS to protect your data, and we also encrypt all communication between our servers and your app. We understand that security is important to you, and we will never compromise on the security of your data. We believe that the security of your data is our responsibility, and we will do everything we can to protect it.If you’re looking for a framework that makes you less susceptible to viruses, hacking, malware, and phishing, iOS offers it."
            },
            {
                title: "Amazing UX.",
                content: "iOS prides itself on offering exceptional user experience. This leads to more satisfied customers who are likely to continue using your application and possibly make additional purchases or investments. Apple's UX and UI are some of the best in the business. They are simple, intuitive, and stylish. They are also always up-to-date with the latest iOS features for their swift programming language. Our team is experienced in designing and developing for Apple devices, and we will create an app that looks great and functions perfectly on all of Apple's devices using the latest iOS graphics APIs. We also use Apple's latest design guidelines to create an app that feels like it belongs on iOS."
            },
            {
                title: "Simple yet effective testing.",
                content: "Apple typically only releases one iOS update every year or so. (Significantly less than Android.) This means fewer updates and testing for existing apps.Apple is known for their high-quality products and attention to detail, and this is evident in their iOS operating system. iOS is simple, intuitive, and always up-to-date with the latest features. We believe in Apple's philosophy of 'Quality over Quantity,' and we will never release an app until it has been properly tested and meets our high standards. We want you to be confident in the quality of our work, irrespective of programming languages, and we believe that our rigorous testing process is the best way to achieve that goal."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co iOS Development Process",
        description: [
        ],
        content: [
            {
                title: "Use Case Discovery",
                content: "There’s a difference between developing an iOS application and developing an elite iOS application. The apps that really stand out from the pack begin with a strong foundation of discovery into both design and various programming languages. This is where we meet with your team to figure out precisely what you want to accomplish and how we can help you get from where you are to where you want to be."
            },
            {
                title: "iOS Development Planning",
                content: "The planning process is where we formulate a thorough strategy for developing an app that allows you to accomplish the goals we uncovered during the discovery phase. We’ll work closely with you to ensure the plan aligns with your vision. When it comes to iOS development, planning is key. You need to have a clear idea of what you want your app to do and how it will function before you start coding. This is why we always start our projects with a detailed project plan. This document outlines every step of the development process, from designing the interface to submitting the app to the App Store."
            },
            {
                title: "Design + Develop",
                content: "Once we’re confident in the plan, we’ll develop your app. This is the most exciting phase of the project - and we’ll keep you updated the entire way! We work closely with our clients throughout the development process, while we apply principles of computer science with exceptional UX and UI design. We want you to be involved in every step of the process, so you can see how your app is coming along and provide feedback on our work. We believe that this collaborative approach leads to better apps and a better overall experience for our clients."
            },
            {
                title: "Quality Assurance Testing",
                content: "No iOS mobile app is complete without thorough testing and debugging to ensure it runs as smoothly as possible. That’s why we invest a great deal of time and resources into ongoing testing. iOS app development is a complex process, and it's important to have a rigorous testing process in place to ensure that your app functions correctly. This is where our QA team comes in. Our QA team is experienced in testing iOS apps, and they will rigorously test your app for correctness, functionality, and usability. They will also test for compatibility with different devices and iOS versions. We believe in quality assurance, and we will not release an app until it has been properly tested. We want you to be confident in the quality of our work, and we believe that our QA process is the best way to achieve that goal."
            },
        ]
    }

    const fifth = null

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
            title: "Deliver & Integrate",
            content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
        }
    ]

    const seventh = {
        title: "Partner With DEV.co for iOS Development",
        content: [
            "At Dev.co, we’re proud to provide industry-leading iOS development services that help brands get their applications in front of the right customers and users.If you’re looking for a top-quality iOS app development service, you’ve come to the right place.",
            "At DEV.co, we specialize in creating beautiful and functional iOS apps for our clients.",
            "Our team of experienced iOS developers will work with you every step of the way to ensure that your app is up to par with Apple’s stringent standards.",
            "We also have a team of QA testers who will test your app for correctness, functionality, and usability.",
            "Our team is passionate about Apple devices, and we understand the importance of designing and developing for iOS. We will create an app that looks great and functions perfectly on all of Apple’s devices.",
            "If you’d like to learn more about how we develop iOS apps, please reach out!"
        ]
    }


    const eighth = {
        title: "Interesting Facts About iOS",
        content: [
            "The number of iPhones in the world is estimated to be more than 925 million.",
            "In total, Apple has around 1.4 billion active mobile iOS devices.",
            "Apple has paid a total of $155 billion+ to iOs developers over the years.",
            "Despite its popularity, iOS represents just 18% market share for mobile devices and mobile phone operating systems.",
            "An estimated 850 million people trust iCloud with their data.",
            "There are more than 1.8 million apps on the App Store.",
            "There are more than 1.37 million app publishers on the App Store.",
            "85% of all Apple Store apps are games.",
            "92% of Apple Store apps are free to download. Just 8% are paid.",
            "Outside of games, business, education, and lifestyle represent the top three App Store categories.",
            "713 apps are published to the App Store each day.",
            "5,154 new apps are published to the App Store each week.",
            "27,267 new apps are published to the App Store each month.",
            "Apple wasn’t the pioneer in iOS development. Prior to the iPhone, Cisco already patented the name. Their model was a VOIP where users could make calls directly from Skype. After some back and forth, Apple gained the rights.",
            "42% of developers choose iOS for mobile development (compared to 31% for Android), regardless of their programming language affinity."
        ]
    }

    const nineth = {
        title: "Frequently Asked Questions",
        description: "",
        content: [
            {
                title: "How long have you been developing iOS apps?",
                content: "We have been developing iOS apps for over 10 years. We have a team of experienced developers who are ready to help you create your perfect app. We have created top-rated apps for the Apple App Store, and we’re confident that we can exceed your expectations. Contact us today to learn more about our iOS developer services!"
            },
            {
                title: "Do you have examples you can share of past client work?",
                content: "We have a number of examples of our iOS developer work on the Apple App Store. Please visit our portfolio page to learn more and download one of our Apple iOS or mobile application development case studies. "
            },
            {
                title: "What type of apps do you specialize in?",
                content: "We specialize in creating iPhone and iPad apps. We have a lot of experience with business and individual apps, but we’re also capable of creating games and other types of apps. Contact us today to discuss your project!"
            },
            {
                title: "How much do your iOS development services cost?",
                content: "We have a variety of pricing options to fit your needs. We typically charge by the hour, and our rates start at $75/hour. However, we also offer fixed-price projects, and we’re happy to give you a quote based on your specific needs. There are no hidden costs with our iOS developer services. We believe in being completely transparent with our clients, and we will never charge you more than what you agreed to. We understand that budgets can be tight, so we’re happy to work with you on a price that fits your needs, but still give you the hands-on support with a dedicated iOS developer and project manager that can complete your project in a timely fashion. We understand that not everyone has a lot of money to spend on app development, so we’re happy to work with you on a budget that fits your needs."
            },
            {
                title: "Do you have any discounts for non-profits?",
                content: "Yes, we offer discounts for non-profit organizations. Contact us today to find out more about our pricing options and how we can help your organization!"
            },
            {
                title: "What other platforms do you develop for?",
                content: "Apart from the iOS platform, we also develop for Android and Windows Phone. We have a lot of experience with both platforms, and we’re confident that we can create a great iOS application or Android application for you no matter what your needs are. Contact us today to discuss your project!"
            },
            {
                title: "Are you looking to hire iOS developers?",
                content: "Do you want to become an iOS developer for DEV.co and join our iOS developer team? Contact us to find out about our current iOS developer job openings. "
            },
        ]
    }

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;