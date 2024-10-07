import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Anaheim"
    const first = {
        title: "Anaheim Custom Software Development Company",
        content: [
            "DEV.co is a one of the top digital development agencies in Anaheim, CA. We’ve been serving clients in the area for over 10 years with cutting-edge technology and digital design consulting. We offer an array of web design services including but not limited to custom website development and digital strategy to meet your unique needs.",
            "Our process begins by understanding you: what it is you would like to accomplish (business objectives), who your target audience is, which website elements are imperative, and what content will resonate best with whom. All these several factors contribute to develop a user experience that delivers results."
        ]
    }

    const second = {
        title: "Web Design in Anaheim",
        description: [""],
        content: [
            "We build creative websites that bring your brand to life. Our web design and development process are simple, and we prioritize ensuring the final product meets your needs and exceeds your expectations.",
            "Our Orange County office at DEV.co offers various services including website development, graphic design, UX/UI consulting, and mobile app development. We are here to provide for all of your web, mobile, and custom development-related needs while offering a level of customer service that will exceed any other companies in the Anaheim area."
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
            title: "Desktop App Development",
            content: [
                "When you need a desktop software engineer, look no further than our team of talented developers. We have a wide range of talent, skills, and embedded software experience, so we can help you with anything from simple website design to complex database applications that can resolve issues.",
                "The security of your data is one of the most important things for any company. It’s also something that is more and more difficult to achieve as time goes by. This is why it’s so important to use a secure software development from start to finish and its the software developer jobs to make it right:"
            ],
            other: [
                "The development process itself will help you build groundbreaking application that is safe from hackers and viruses.",
                "All your data will be encrypted and protected from being stolen or corrupted by anyone else.",
                "Your program will be able to detect errors immediately, which means that errors can be fixed before they cause problems for users or other programs."
            ],
            additional: "Contact us today if you’re interested in learning more about our products or services!"
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We have more than 12 years of developmental experience in software and web design. Whether you want to improve your online presence or attract more qualified leads to your website, we’ve got you covered.",
            "We have serviced thousands of clients over the years and strive to maintain the highest standards of service."
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
            "We’d love for you to work with us and take your online presence to the next level. To learn more about how you can work with us, click here to speak to a member of our team."
        ]
    }


    const seventh = null

    return (
        <Location first={first} second={second}  third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;