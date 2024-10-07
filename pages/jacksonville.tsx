import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Jacksonville"
    const first = {
        title: "Jacksonville Custom Software Development Company",
        content: [
            "Jacksonville, Florida is truly one of the most beautiful cities in the country. Tourists flock here every year to enjoy the pleasant Florida sun, weather, and beaches. This makes it all the more important for local businesses to have an online presence.",
            "Why? Most consumers use the internet to search for local businesses. If your business is nowhere to be found when potential customers come calling, then you’re going to miss out. By purchasing a website, you can move one step closer to establishing a firm online presence.",
            "Dev.co stands out as one of Jacksonville’s top software development companies, renowned for its expertise in mobile app development and managed services.",
            "As a leading software development firm in Jacksonville, Dev.co excels in providing tailored solutions as trusted software developers, ensuring businesses establish a strong online presence.",
        ]
    }

    const second = {
        title: "Web Design in Jacksonville",
        description: [""],
        content: [
            "A standard person isn’t going to visit the second page of Google. They may not even look past the third search result on a Google page. The reason why is because people trust major search engines like Google and Bing.",
            "If a particular website is ranked #1, then it must be for the reason that the business that owns the website is the best in its industry. Otherwise, why would it rank so highly on search engine result pages (SERPs)?",
            "Having a high website ranking is crucial. Web development ranking starts with creating a valuable website that properly communicates the value of your products and services. Businesses aiming to showcase their custom software solutions and technical expertise in business intelligence development should prioritize their SEO efforts. In Jacksonville, standing out among the best software development companies requires strategic positioning and visibility for Jacksonville software developers.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Having a fresh website means everything online. Google, in order to keep their reputable as the most trusted resource, must only rank the best websites. Therefore, it’s a very low chance that a DIY website will make the cut.",
                "You should avoid creating your own website, despite what many DIY website builders will advertise to you. You should also stay clear of web developers with minimal experience in this type of work.",
                "Purchasing a website is a serious investment, and it’s not wise to throw away money on a website that’s not going to produce any results for your business. For Jacksonville software developement companies, investing in professional search engine optimization and strategy consulting ensures effective project management and impactful digital marketing. ",
                "Partnering with top software developers can guarantee custom software solutions tailored to deliver significant business outcomes through expert website development.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "If you’re wondering how we can truly benefit your agency, then you’re in the right place. We take immense pride in the work we do here at Dev.co. All of our clients can enjoy the following benefits when they choose to work with us:",
            ],
            other: [
                "We have a committed team of more than 250+ highly-experienced developers. Our team specializes in many different industries to deliver a versatile experience.",
                "We have access to both onshore and offshore talent solutions in case your web project dictates large staffing requirements.",
                "All of our developers are hired using a comprehensive vetting process. This ensures that you will only receive a top-notch website for your investment.",
                "We have direct experience working with both small businesses and Fortune 500 companies.",
                "Our team of project managers help to keep our projects on track so everything is completed on time and on budget.",
                "Our team of project managers help to keep our projects on track so everything is completed on time and on budget.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Founded in 2008, we have worked with thousands of companies in Jacksonville, Florida. Over the years, we have built a massive reputation for maintaining the highest standards of customer satisfaction and service.",
            "When you work with us, you can be sure you will receive a top-notch product made by industry-leading professionals.",
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