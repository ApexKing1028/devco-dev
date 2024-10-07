import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Columbus"
    const first = {
        title: "Columbus Custom Software Development Company",
        content: [
            "If you’re searching for software developer jobs or looking to connect with software developers, you might typically use big search engines, such as Google or Bing. These are the go-to places to discover local businesses. So, if your business doesn’t pop up in these search engines, you risk losing some awesome potential connections.",
            "Without a top-tier website, your leads might end up with competitors, especially the ones that rank higher online. This could put your sales at risk. That’s why for your Columbus OH software development tasks, having an optimized website is absolutely necessary. It’s like a job alert for businesses in computer science – stay competitive or lose out.",
            "Looking for the right folks to build your dream website? Starting your journey with a web design agency in Columbus is an excellent choice! Want top-tier web application development using computer science techniques? You’ve hit the jackpot. You’re definitely in the right place.",
        ]
    }

    const second = {
        title: "Web Development in Columbus",
        description: [""],
        content: [
            "In Columbus, Ohio’s buzzing heart, local businesses thrive by the millions. Your website must shine in this huge crowd. If it’s too generic, people will simply ignore it. Remember, a touch of computer science fundamentals can make all the difference. Implementing technology solutions or software solutions can give your website the standout factor it needs.",
            "People can be quite critical of how websites look! It’s key to have a design that outshines your competitors’. Want to win over their customers and boost your online visibility? Get a web development company from Columbus on board. They have the technical resources and knowledge in computer engineering needed. Plus, they’re skilled in object oriented design and use automation tools. This ensures you end up with a superior site.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "The quality of a website is of massive significance. Think of it like Google’s reputation – they want to be known as the top-notch search engine. So, they only push the finest websites to the top of search results. Now, in terms of technical troubleshooting” and object oriented analysis, these abilities typically acquired, play a crucial role in shaping superior sites.",
                "If your website doesn’t meet Google’s standards, then it simply won’t rank where your target audience will look, which are usually the first three search results. Also, your own audience may neglect your website if it’s poorly-built.",
                "Avoid using DIY website builders, no matter how much they promise to help to create a stellar website. Instead, hire a web developer in Columbus to get the job done properly.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "For more than a decade, we have provided thousands of local businesses with impeccable website development services. When you choose to work with us, you can expect to take advantage of these core benefits:",
            ],
            other: [
                "We have a team of more than 250+ developers. All of them have unique specialties in a variety of different industries. No matter what business you’re running, we can help give you access to the perfect website for your brand.",
                "You’ll receive access to our additional onshore and offshore teams if your web development project needs larger staffing requirements.",
                "We rigorously vet all of our developers to make sure you will only receive a quality product.",
                "We work with both local businesses and Fortune 500 companies. It doesn’t matter how large or small your business is, you can rely on our services.",
                "We will assign you a special project manager to coordinate your web development project.",
                "We only build websites that deliver the results you’re looking for.",
            ],
            additional: "As you can see, there are a lot of different benefits to working with us. Make the right choice today of choosing us as your Columbus web design agency."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Established in 2008, we have built a strong reputation as one of the most successful web development agencies in the country. What we can bring to your web design project is our amazing attention to detail, excellent service, and customer satisfaction.",
            "We will work tirelessly for you until you are fully satisfied with your website.",
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