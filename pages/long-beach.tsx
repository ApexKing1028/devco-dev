import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Long Beach"
    const first = {
        title: "Long Beach Custom Software Development Company",
        content: [
            "DEV.co is a Long Beach Web Design, Software Development, and Consulting company that specializes in small business web design, custom website development, and online marketing strategies for local businesses looking to compete with their larger competitors at the best possible price. ",
            "We offer flexible pricing options to help your business succeed without breaking the bank. The sites we create are responsive and mobile-optimized giving your site an edge on all competitors out there! You’ll never find another team with our dedication or more knowledge of small business web design than us here at DEV.co.",
            "With a proven track record of delivering successful projects, we tailor our digital marketing and custom application development services to align with your specific business objectives. Our personalized solutions are designed to enhance your online presence and help your business thrive in today’s competitive market.",
        ]
    }

    const second = {
        title: "It’s easy to design a website these days but how do you get the most out of it?",
        description: [""],
        content: [
            "When you need a product or service, it always pays to do your research first. As one of the best software development companies. we know that–which is why we offer everything from custom web design to marketing and branding assistance to graphic design solutions all at the best prices possible!",
            "Dev.co take great care in understanding what our clients want for their business before we take them on as a client. Then we work diligently until the final delivery of your dream project – whether it be a new logo or one-page design, complete website renovation, or just a directory.",
            "We specialize in custom software solutions that drive business growth, combining technical expertise with digital solutions to meet your unique needs. From web development to comprehensive software solutions, DEV.co is committed to providing the best in digital innovation for your success.",
            "Every company needs a web design strategy, and it’s no different for startups. That’s where DEV.co comes in.",
        ],
    }

    const third = [
        {
            title: "Mobile Friendly",
            content: [
                "DEV.co is a powerhouse of mobile-first, responsive design and development with an innovative workflow, modern toolsets, and crafting the perfect mobile experience for any device type—all in a single package.",
                "DEV.co will work with you to develop and plan the perfect website for your needs, regardless of what technology or software you want to incorporate. We work within all industry standards and use prototyping and mockups to ensure each site is professional-looking, easy-to-use, responsive, developer-friendly, and SEO compliant – no matter what device it is viewed on (mobile phone or tablet), computer type (laptop or desktop) which browser you are using, etc.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Custom Websites",
            content: [
                "DEV.co is an industry-leading, agency-quality website design service with a customer success team and integration process that’s unparalleled in the marketplace. We offer all of the challenges to do great work from your home or office-based business on an outsourced basis – no need for you to purchase expensive equipment, find employees or manage ongoing maintenance tasks.",
                "We are focused on helping small businesses and entrepreneurs start marketing themselves online – so that they can grow their business outside of Silicon Valley by eliminating geographic limitations imposed by traditional brick and mortar agencies.",
                "Imagine a stunning, memorable website that communicates your brand while catering to your audience. Your website is one of the first things potential customers see so it needs to be just as polished and professional as your product or service.",
                "DEV.co provides custom design services ranging from simple WordPress updates all the way up to premium site construction ready for any device and industry-specific needs.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "",
            content: [
                "In these days of social media overload, it’s hard to keep up with all the latest trends and connect with new customers. We can help!",
                "We know how tough it is for a smaller team to manage daily tasks like marketing or customer service without having time for development or visibility into company data. Let us take care of that stuff so you can move onto things that really matter to your organization.",
                "The right social media management tools will help you stay in touch with what your customers are doing on the platforms that they spend time on and how their day-to-day activities relate to your mission. They’ll give you insights into solving customer service issues without having to jump into a lengthy back-and-forth correspondence. Customers expect quick responses and DEV.co is here for you when it matters most, so email us anytime!",
                "At DEV.co, we focus on creating websites that are functional and beautiful. We make sure our designs look good but also help you meet the goals of your business.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "Collaborate With Us",
        content: [
            "Whether you are looking for a web design, website redesign, or search engine optimization solution, we have the resources needed to cater to all your needs.",
            "Contact us today or email us for more information!",
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