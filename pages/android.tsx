import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Android Development Services",
        content: [
            "DEV.co is a company that specializes in custom Android dev & engineering. We have a team of talented developers who are experts in the Android platform. We can help you with your next Android app development project, whether you need an application developed from scratch or you need an existing Android application modified to meet your needs. Contact us today to learn more about our custom mobile app development services, to get an estimate for your project, or to find out how we can help you achieve your goals.",
            "Our Dev.co team has years of collective experience developing beautiful and functional Android applications that allow our clients to increase exposure, engagement, and revenue. We take a unique approach to Android application development and engineering services, which enables us to serve you with a high degree of quality and responsiveness that's unparalleled in the industry."
        ]
    }

    const second = {
        title: "Android Development & Consulting",
        description: [],
        content: [
            "Whether you're looking for a Android consultant or a fully outsourced team, we're here to serve you in any capacity.",
            "Do you need Android development or consulting? Our expert Android app dev team can be deployed to assist, manage, or tackle your project from start to finish, using Android SDK best practices for optimal outcomes."
        ]
    }

    const third = {
        title: "Why Choose Android?",
        description: [
            "Android is an intuitive and open source mobile operating system with a massive user base of millions of satisfied users. Android app development is a process of creating applications for the Android platform.",
            "Google provides the Android SDK (Software Development Kit) to allow developers to create these Android applications.",
            "Android app development services are needed to make sure that your application is created correctly, and that it will work on all devices that run the Android operating system.",
            "Android app developers use the Android SDK to create and test their applications.",
            "The Android SDK includes a number of tools that help developers with the task of creating and testing their applications.",
            "One of these is the Android Debug Bridge, which allows developers to connect their devices to their computers and debug their applications.",
            "Another tool included in the Android SDK is the Android emulator, which allows developers to test their applications on a device that does not have the Android operating system installed.",
            "Quality Android developers can help you to create and test your application.",
            "They can also help you to publish your application to the Google Play store, and to make sure that it is compatible with all devices that run the Android operating system.",
            "When it comes to developing mobile applications for business, Android is often the first operating system large corporations and small businesses turn to. Here are a few of the primary reasons why:"
        ],
        content: [
            {
                title: "Massive user base",
                content: "While Apple's iOS gets a lot of exposure, Android is the most popular operating system in the smartphone market. It has an estimated 75 to 82 percent market share. The Android user base is huge. There are over 1.4 billion Android users worldwide, and that number is growing every day. This makes Android the most popular mobile operating system in the world. If you are an Android developer, then you will have no trouble finding a job or finding users for your applications."
            },
            {
                title: "Open source",
                content: "Part of the reason Android is so popular is that it has an open source platform that makes it easy and inexpensive to get started. And with more people using it on the developer side of things, the result is a smoother and more efficient platform that benefits all third party users. The open source nature of Google Android has led to its massive success. There are now millions of applications available for Android, and many of them are free. This wide selection of applications is one of the main reasons why Android is so popular. Open source software has many benefits. It allows developers to learn from each other, it encourages collaboration, and it helps to keep the software stable and secure. The open source nature of Google Android has helped to make it the most popular mobile operating system in the world."
            },
            {
                title: "Highly customizable",
                content: "One of the main benefits of Android is that it is highly customizable. This allows users and developers to tweak the operating system to suit their needs. For example, Android allows users to choose from a variety of different wallpapers, icons, and launchers. Android also allows developers to create custom applications for the platform. This wide selection of applications is one of the main reasons why Android is so popular. Open source software has many benefits, and the open source nature of Google Android has helped to make it the most popular mobile operating system in the world. If you can dream it up, there's a pretty good chance that Android can accommodate. Customizable UI and other features make it easy to innovate new apps and tweak/redesign existing ones"
            },  
            {
                title: "Simple integration",
                content: "One of the best things about Android is that it is so simple to integrate. Because Android is based on the Linux kernel, it is very easy to port applications from Linux to Android. This allows developers to reuse code from their existing applications, which can save time and money. Android also supports a wide variety of programming languages. This allows developers to use their favorite programming language when creating applications for Android. The most popular programming languages for Android are Java, C++, and Python. Android also supports a variety of different development frameworks. This allows developers to use the development framework that they are most comfortable with. Some of the most popular development frameworks for Android are React Native, Ionic, and Xamarin. Because the Android platform is so customizable, it's easy to integrate and tweak mobile apps according to very specific business needs"
            },     
            {
                title: "Easy approval",
                content: "With Android, you don't have to worry about any of the stringent approval processes that other platforms require in order to take an app to market. This speeds up the development cycle and allows you to go from concept to product in a fraction of the time. However, the Android app approval process can sometimes be a challenging one for developers. In order to get an Android app approved in the Google Play Store, you must first create a Google Play Developer account. This account costs $25 per year, and there is also a $100 one-time fee for publishing your application. Once you have created a Google Play Developer account, you must submit your application for review. Your application will be reviewed by Google's team of reviewers, and they will determine whether or not it is approved for publication. The review process can be difficult and time consuming. Google's team of reviewers will check your application for compliance with their guidelines, and they may ask you to make changes to your application before it is approved. If your application does not comply with Google's guidelines, then it may be rejected. The good news is that Google has recently made the review process easier for developers. They have introduced a new program called 'Developer Preview,' which allows developers to release their applications without waiting for approval from Google's team of reviewers. This program is still in beta, so it may have some bugs, but it is a great way to test your application before submitting it for review."
            }      
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "Our Mobile Application Development Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "When we first meet with your team, we’ll ask probing questions to understand who you are and what your big-picture business objectives are. This empowers us to develop an Android application that fully supports your business from the ground up"
            },
            {
                title: "Plan",
                content: "We plan out every step of the process to ensure there are no blind spots. This phase is one of the more critical components in the entire equation (and something most developers gloss over)."
            },
            {
                title: "Develop",
                content: "After we discover and plan, we roll up our sleeves and begin the Android app development process. The goal is to create a lean app that’s both functional and aesthetically pleasing."
            },
            {
                title: "Test",
                content: "Bugs are a natural part of developing an app, but you don’t have to live with them. Count on us to test and iterate until you have an Android app that works with your business to achieve any and all underlying objectives. With our real time agile development framework and process we implement feedback on bugs issues testing quickly and efficiently."
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
        title: "Partner With DEV.co for Android App Development",
        content: [
            "At DEV.co, Android app development and engineering services are one of our primary focal points.",
            "We work closely with our clients to ensure that they’re getting maximum value out of their mobile applications in order that they can reach and engage more users, which ultimately drives long-term loyalty and higher revenues. Contact us today to learn more!",
            "DEV.co offers custom Android apps, developed quickly and affordably.",
            "We have a team of talented software engineers and developers who are experts in the Android platform, using all best practices for app dev and we can help you with your next project — whether you need an application developed from scratch or you need an existing application modified to meet your needs."
        ]
    }


    const eighth = {
        title: "Interesting Facts About Google Android",
        content: [
            "Android OS was developed with the backing of Google in 2004. It was purchased by Google for $50 million one year later.",
            "Android wasn’t originally developed for the smartphone market. It was intended to be a digital camera platform.",
            "Every Android version, except for the two originals (Android 1.0 and Android 1.1), are named after confection and desserts. (Jelly Bean, KitKat, Ice Cream Sandwich, etc.) They also follow an alphabetical release pattern. (Astro, Bender, Cupcake, Donut, etc.)",
            "The first smartphone running Android was released in 2008.",
            "Android is open-source, which means individuals can modify source code.",
            "NASA once sent two Nexus S handsets running Android Gingerbread into space to test sensors in orbit aboard the International Space Station.",
            "The Android Google Play store has more than 48 billion app installs.",
            "Android boasts 85% total market share for mobile operating systems.",
            "Roughly one-third of smartphone users use Android Marshmallow OS.",
            "There are 2 billion active Android devices each month.",
            "More than 24,000 different devices run on Android."
        ]
    }

    const nineth = {
        title: "Frequently Asked Questions",
        description: "",
        content: [
            {
                title: "What is an Android developer?",
                content: "An Android developer is a programmer who creates applications for the Android platform. They use the Android SDK to create and test their applications. The Android SDK includes a number of tools that help developers with the task of creating and testing their applications."
            },
            {
                title: "What does an Android developer do?",
                content: "An Android developer is a programmer who creates applications for the Android platform. They use the Android SDK to create and test their applications. The Android SDK includes a number of tools that help developers with the task of creating and testing their applications. One of these is the Android Debug Bridge, which allows developers to connect their devices to their computers and debug their applications. Another tool included in the Android SDK is the Android emulator, which allows developers to test their applications on a device that does not have the Android operating system installed."
            },
            {
                title: "What skills are required to be an Android developer?",
                content: "Android developers must have a strong understanding of the Android platform and the tools that are included in the Android SDK. They must also be able to write code that is compatible with the Android operating system."
            },
            {
                title: "How can I become an Android developer?",
                content: "If you want to become an Android developer, you first need to learn how to use the Android SDK. The Android SDK includes a number of tools that help developers with the task of creating and testing their applications. One of these is the Android Debug Bridge, which allows developers to connect their devices to their computers and debug their applications. Another tool included in the Android SDK is the Android emulator, which allows developers to test their applications on a device that does not have the Android operating system installed. Android development is a process of creating applications for the Android platform. Google provides the Android SDK (Software Development Kit) to allow developers to create these applications. Android development services are needed to make sure that your application is created correctly, and that it will work on all devices that run the Android operating system. Android developers use the Android SDK to create and test their applications. The Android SDK includes a number of tools that help developers with the task of creating and testing their applications. One of these is the Android Debug Bridge, which allows developers to connect their devices to their computers and debug their applications. Another tool included in the Android SDK is the Android emulator, which allows developers to test their applications on a device that does not have the Android operating system installed. If you want to become an Android developer, you first need to learn how to use the Android SDK. You can find more information about how to use the Android SDK at https://developer.android.com/sdk/."
            },
            {
                title: "What is the job market for Android developers like?",
                content: "The job market for Android application developers is strong. There is a high demand for Android developers, and companies are willing to pay a high salary to hire the best candidates. This means that Android developers can be choosy about the jobs they accept, and they can often find jobs that offer good benefits and a competitive salary. If you are an Android developer, then you will have no trouble finding a job. The job market is booming, and there are many opportunities available for talented developers. Contact us today to learn more about our Android development services, to get an Android developer job, or to find out how we can help you with your next project."
            },
            {
                title: "How much does the average Android developer make?",
                content: "An effective Android software engineer makes a good salary. The average salary for an Android developer is $100,000 per year. Some developers make more than $100,000 per year, and some developers make less than $100,000 per year. It all depends on the developer’s skills and experience."
            },
            {
                title: "What companies are looking for Android developers?",
                content: "Some of the top companies that are looking for Android developers include Google, Samsung, IBM, and Microsoft. These companies are always looking for talented Android developers to help them with their next project. If you are an Android developer, then these are some companies that you should consider working for."
            },
            {
                title: "Are there certification programs for Android developers?",
                content: "There is no official certification program for Android developers, but there are a few programs that can help developers to improve their skills. The Google Developer Certification program is one option. This program offers a variety of certifications that test a developer’s knowledge of the Android platform."
            },
            {   
                title: "What type of work does an Android developer usually do?",
                content: "An Android developer usually does the following: 1. They design and build applications for the Android platform. 2. They use the Android SDK to create and test their applications. 3. They must have a strong understanding of the Android platform and the tools that are included in the Android SDK. 4. They must be able to write code that is compatible with the Android operating system. 5. They usually work for companies that develop Android applications. 6. They may also work for companies that develop other mobile applications. Android application development can be a time-consuming project. You need expert software engineers on your team. That’s where DEV.co comes in."
            },
            {
                title: "How long will it take to complete my custom Android app?",
                content: "The time it takes to complete a custom Android engineering project can vary depending on the size and complexity of the project. We will be able to give you a more accurate estimate once we have more information about the project. However, we typically require at least 2 to 6 months for a dedicated software engineer (or team of software engineers) to effectively complete your app dev project. "
            },
            {
                title: "How much will my custom Android engineering project cost?",
                content: "When it comes to custom Android app dev projects, the cost can vary depending on a number of factors. The size and complexity of the project are two important factors that will affect the cost. We will be able to give you a more accurate estimate once we have more information about your project. However, we typically require at least 2 to 6 months to complete a custom, native Android apps projects, so please keep that in mind when budgeting for your project."
            },
        ]
    }

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;