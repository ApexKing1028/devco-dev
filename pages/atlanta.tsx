import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Atlanta"
    const first = {
        title: "Atlanta Custom Software Development Company",
        content: [
            "Atlanta GA is one of the most well-known cities in the United States. Characterized by its vibrant nightlight and tourism, the city is home to thousands of local and corporate businesses.",
            "However, Atlanta GA has steadily built a reputation as a location where aspiring businesses grow. Starting a business in Atlanta GA is no small feat. If you want your business to survive and thrive, then you’ll need to establish an online presence.",
            "The first step in doing so is creating the perfect website for your brand. Here at Dev.co, we specialize in delivering amazing Atlanta website/software development services. Therefore, if you’re looking for a reputable website design agency in Atlanta GA, then you’ve come to the right place.",
            "Our team would love to help you take your digital presence to the next level.",
        ]
    }

    const second = {
        title: "Software Developer in Atlanta GA",
        description: [""],
        content: [
            "Atlanta is home to business and innovation. From hair salons to global enterprises, you’d be hard-pressed to not find the top influencers and companies in the city of Atlanta GA.",
            "With this much competition, it’s always wise to establish an online presence to attract meaningful qualified leads to your company. At Dev.co, we can help you create a top-notch website that will outrank your fiercest competitors.",
            "This way, you can foster more vibrant growth in your business and industry.",
        ],
    }

    const third = [
        {
            title: "Custom Software Developers",
            content: [
                "Custom Software Developers Our full-stack software engineer are experts in the latest technologies and methodologies. We build custom web applications using Ruby on Rails, Ember.js, Phoenix and many other editor tools. Our development team builds web applications that are scalable, robust and secure. We work with you to create a viable solutions that meets your needs.",
                "We also offer standard programming practices and full-service development for mobile applications for iOS and Android devices. With years of concepts related equivalent experience in integrating software development, our staff has been behind many growing projects for our successful candidate and clients including mobile apps for iOS and Android devices, social media sites, eCommerce stores, databases, CRM systems, ERP systems and much more.",
                "If you have any questions, feedback, or would like to discuss your project with us please contact us today!"
            ],
            other: [],
            additional: ""
        },
        {
            title: "The Importance of Software Quality",
            content: [
                "Website quality is a pressing issue nowadays. With the rise of DIY website builders, many people believe that they can create their own website. In reality, major search engines like Google and Bing implement complex algorithms to rank the trillions of websites on the internet.",
                "If you have no idea of what search engines value in their top ranking websites, then you’re going to waste your time and hard-earned money. Thus, you should hire a professional Atlanta GA web design company to do all of the heavy-lifting for you."
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Dev.co was founded in 2008, giving us more than a decade of web design experience. We have worked with thousands of businesses in Atlanta GA and across the country. As the leading website provider in Atlanta GA, we take immense pride in the work we do here.",
                "When you choose to work with us, you can expect to take advantage of all the following benefits:",
            ],
            other: [
                "We have a team of more than 250+ senior developers. This means that you’ll likely be paired with a professional that understands the true nature of your business.",
                "We have access to both onshore and offshore teams for exceptionally large website development projects.",
                "All of our developers have been tested to ensure that we only deliver the best Atlanta web design services.",
                "We work with all kinds of businesses, from nearby coffee shops to Fortune 500 companies.",
                "We will assign a competent project manager to ensure that your website is completed on course.",
                "We will devote ourselves to delivering top-notch results for your business.",
            ],
            additional: "Thousands of businesses trust us to create stellar websites/software development. You can count on us for innovative software solutions, senior software engineer/entry level software developer, develops software applications & innovative material handling systems with software testing principles or an impeccable site that complements your brand."
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "At Dev.co, Atlanta GA we don’t believe in just creating websites that look great. Our mission to create websites that rank well on major search engines. A website that falls short of this goal is frankly useless.",
            "When you hire us, our team will uphold the highest standards of customer satisfaction and service. Until you’re fully satisfied with our software development service, we’ll continually work on your behalf.", 
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
            "We’d love for you to work with us and take your online presence to the next level. To learn more about how you can work with us, click here to speak to a member of our team, Software Development at Atlanta GA."
        ]
    }

    const seventh = null

    return (
        <Location first={first} second={second}  third={third} forth={forth} fifth={fifth} sixth={sixth}  seventh={seventh} location={location} />
    )
}

export default Page;