import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Denver"
    const first = {
        title: "Denver Custom Software Development Company",
        content: [
            "Finding a local business has never been easier in our techno-savvy era. All you need is your cell or tablet, then voila! You’re on Google or Bing finding the biz that fits.",
            "But think about it – with all this convenience at everyone’s fingertips, standing out online matters more than ever before. That means having a killer website to showcase who you are and what makes you special. Plus, scoring top marks on search engine rankings? Golden!",
            "This is why Denver folk should seriously consider getting pros involved for their web design needs. The right software development team can truly make an impact.",
            "On your hunt for quality website creators? Look no further; Dev.co ticks every box when it comes to reliable agencies nationwide: we’ve got cred!",
            "Not only do we have prime software engineer jobs filled by some of the brightest minds from computer science backgrounds but also innovative secure proceeding initiatives ensuring site connection safety like none other",
            "So if being part of something bigger sparks interest –whether its securing those coveted software engineering positions as dedicated software developers or simply wanting updates through “create job alert” notifications– remember here lies opportunity.",
        ]
    }

    const second = {
        title: "Web Development in Denver",
        description: [""],
        content: [
            "Denver, Colorado’s biggest city, is a buzzing tourist hotspot. It has an array of businesses – think food joints to contractors and everyone in between! They’re all vying for top spots on the internet.",
            "Put simply: if your business isn’t visible online, you’ve got problems. Potential customers looking for what you offer may end up with rivals instead.",
            "Your website ends up as dead weight when that happens; conversion rates plunge drastically too. So it makes total sense hiring a recognized web development firm right here in Denver to help shape-up your site according to your business objectives.",
            "A job alert about this could be just perfect solution towards realizing those ‘more jobs’ goal while keeping health insurance concerns at bay!",
            "Remember getting ahead also means covering new grounds like information technology needs or even adding paid time benefits into consideration specifically if majority are non-represented full-time employees!",
            "Oh yeah – don’t forget something: always keep Ray ID handy whenever possible during these exciting times of digital advancement!",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Simply having a basic website isn’t sufficient these days. Many entrepreneurs think they’re all set once their services or products are online.",
                "But that’s not how it really works. A poorly performing website is as good as no site at all! To get noticed, your web page must meet Google standards; if not, you’ll lag behind the competition.",
                "So here’s an important insight – don’t try to develop your software engineer job-related webpage on your own in Denver Co. Without clear knowledge of Google algorithms and software engineering principles, the attempt might be wasteful.",
                "A more practical decision? Get yourself a skilled developer who knows just what needs doing and can build up your ranking for you.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "As one of the leading website design agencies in Denver, we take a lot of pride in the services we deliver. When you choose to work with us, here are all of the benefits you can take advantage of:",
            ],
            other: [
                "Our team of more than 250+ software and website developers are highly-experienced and qualified for the task at hand.",
                "We have access to additional teams of more than 500+ developers and skilled project managers. We can take on any web development projects, no matter how comprehensive.",
                "Each developer we hire has been vetted thoroughly to ensure top-notch delivery of our services.",
                "We have actionable experience in delivering our website design services to both small businesses and Fortune 500 companies.",
                "We will assign a project manager to your project to make sure that it’s completed on course.",
                "We have an excellent track record of creating websites that rank well online.",
            ],
            additional: "As you can see, there are a variety of different benefits to working with us. We’d love for you to contact us today to see how we can help."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Established in 2008, we have more than 12 years of experience in the website development industry. Over the years, we have developed a strong reputation as one of the top agencies in the country.",
            "You don’t need to look any further for a qualified web developer. We have the tools, resources, and expertise to make your project a glowing success.",
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