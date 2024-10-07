import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "San Diego"
    const first = {
        title: "San Diego Custom Software Development Company",
        content: [
            "San Diego is one of the fastest growing cities in the United States. Because of this, any business that operates in the city must have an established online presence. There just isn’t any other alternative.",
            "Building the perfect website for your business will help in generating meaningful leads that can translate into unique business opportunities to grow sales and revenue. Without an online presence, you risk giving up your potential customers to your major competitors.",
            "Thus, having the right website truly matters to your bottom line. Fortunately, we can help you obtain one. Dev.co is the perfect place to receive premium San Diego web development services.",
        ]
    }

    const second = {
        title: "Web Design in San Diego",
        description: [""],
        content: [
            "San Diego is not only a thriving city, but it’s also known for its vibrant weather and activities. San Diego is considered to be an offshoot of the illustrious Silicon Valley, and is home to many tech startups and established companies.",
            "If you operate in this niche, then you’ll need a fully-function website to truly stand out in your industry. Your competitors may already have an advantage, especially if their websites were professionally built.",
            "A delay in securing a top-notch website for your business can only lead more potential customers to your competitors. Partner with Dev.co today to learn more about how we can help.",
        ],
    }

    const third = [
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we take enormous pride in upholding the highest standards of customer satisfaction and service. We believe that a website does more than look appealing, but it also leverages high-end user experience to keep your web visitors happy.",
                "We have a team of more than 250+ developers, project managers, and creators who all work together to build the best websites you’ll find in San Diego. Our team has diverse experience in a variety of different industries.",
                "On top of that, they are properly vetted before even working with us. When you choose to work with us, you can rest comfortably knowing that project managers work tirelessly to keep everyone on track and on time.",
                "We have serviced thousands of websites over the years and have built a strong familiarity with our trade.​",
            ],
            other: [],
            additional: ""
        },
        {
            title: "The Importance of Website Quality",
            content: [
                "Anyone can create a website, but everyone can develop a fully-functional website that will provide the results you want. There are many DIY website builders that promise that just anyone can create a website.",
                "The truth is never that simple. Here are all the consequences of creating your own website:",
            ],
            other: [
                "You’ll waste significant time and money on a poorly-built website.",
                "A DIY website rarely makes any progress on major search engines.",
                "A quality website can only be built by a professional who has extensive knowledge in website development and SEO.",
                "The quality of your website will suffer and drastically decrease your ROI and bottom line.",
                "As you can see, it’s never a good idea to create your own website, no matter what free or seemingly convenient options you encounter on the internet. Building a website is a professional job.",
            ],
            additional: "By hiring a San Diego web design agency, you can streamline the web development process and receive a stellar product up to your standards."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Founded in 2008, we have transitioned from a financial and advertising software firm to a full-service web development agency. What we bring to the table is our comprehensive experience in all web development matters in San Diego.",
            "We have a special devotion to the city of San Diego, its people, and surrounding businesses.",
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