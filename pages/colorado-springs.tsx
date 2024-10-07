import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Colorado Springs"
    const first = {
        title: "Colorado Springs Custom Software Development Company",
        content: [
            "Colorado Springs is one of the most well-known and visited cities in the United States and the world. The city is known for its wildlife, more jobs, weather, and winter-related attractions. As you can imagine, many local businesses operate in Colorado Springs.",
            "Having a website will help you to stand out in a competitive industry and convert interested prospects into paying customers. Also, having a basic knowledge of fully-functional website will help you outrank your competitors on major search engines like Google and Bing, and increase your sales and revenue opportunities.",
            "Do you want to purchase a website from a reputable Colorado Springs website development agency? If so, then look no further than Dev.co.",
        ]
    }

    const second = {
        title: "Web Development in Colorado Springs",
        description: [""],
        content: [
            "Most consumers use the internet to find local businesses. It’s simple, after all, to do so. All you have to do is pull up a smartphone or laptop, open a search engine like Google, and search for an endless amount of nearby businesses in your area.",
            "With that said, how well does your website rank on major search engines like Google and Bing. If your website is nowhere to be found, then you’re going to miss out on valuable business opportunities.",
            "What’s more is that you can also give your competitors the opportunity to steal your potential customers and make it more difficult for you to run a profitable business. For this reason, having a website is no longer an option. It’s a requirement.",
            "Hiring a professional website design agency in Colorado Springs is your best option for receiving an excellent website for your business.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Just running a basic website won’t cut it these days. Search giants, like Google, use complex electronic data processing systems. These systems, created by talented software engineers, apply advanced math and science rules. They rank websites using machine learning and AI.",
                "Search engines are pretty skilled at putting only top-notch sites on their first pages and subsequent results pages. If you’re thinking of making your own website or hiring a less-than-stellar developer in Colorado Springs to save some cash, they won’t be gentle in their assessment. ",
                "You need to remember to apply electrical engineering principles in system software development for a website that really performs. And don’t forget to hit “create job alert”. You wouldn’t want to miss any golden opportunities, would you?",
                "This means that you could risk wasting your hard-earned time, money, and effort on a website that can’t produce the type of results you’re looking for. Website quality is very important.",
                "To make sure that your website has high-ranking potential, hire a professional web design company in Colorado Springs today!",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, Colorado Springs CO, we strive to maintain the highest values of customer satisfaction and service. This means that we are never finished working for you until you are fully satisfied with your website.",
                "With over a decade of experience, we have developed thousands of websites. When you choose to work with us, you can expect to receive these benefits:",
            ],
            other: [
                "We have a team of more than 250+ developers with advanced technical education, which means that you will more often than not receive a developer that will fully understand the true nature of your business.",
                "We have access to additional teams and software development tools to accommodate large projects for all kinds of businesses.",
                "We've hand-picked our developers, making sure they're top-notch. High-quality websites? That's our promise. Oh, and we're big on data science too.",
                "We've worked hands-on with small local businesses and big corporations alike, specifically dealing with electronic components.",
                "You will be assigned a dedicated project manager that will make sure that your website development project is completed on course.",
                "With a lot of experience under our belt, we know just what you want from a website. We've got the skills in programming languages to deliver top-notch results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "Our Dev.co squad, experts in computer engineering and computer science, put customer happiness and service above all else. Until you’re totally happy, consider your website a work in progress. We won’t stop until you’re satisfied.",
            "Your website’s main purpose? Turning potential customers into actual ones. Isn’t achieving that? That’s a sign your site’s seriously busted. You might need some expert help like a professional website development agency, especially if you’re in  Colorado Springs. They can help craft the perfect site for your brand.",
            "And what about your city’s department business? It’s in computer engineering and you need to be in the loop about the salary range. Remember, this is a STEM-related specialty!",
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