import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Dallas"
    const first = {
        title: "Dallas Custom Software Development Company",
        content: [
            "Dallas TX is a bustling hub known far and wide across the U.S. Without solid online visibility, your venture might face an uphill battle in its field. This struggle underscores why having a top-notch website matters.",
            "Kick-off this journey by hooking up with skilled local web developers based right here in Dallas! They’ll leverage their resources to forge just the perfect digital home for your business needs.",
            "If you’ve been on the hunt for stellar web development services around Dallas TX, then look no further. Dev.co offers secure proceeding options alongside reliable site connections – it’s like hitting jackpot of software engineer jobs!",
            "Welcome aboard; together let’s create that brilliant virtual space underpinning your brand.",
        ]
    }

    const second = {
        title: "Web Development in Dallas",
        description: [""],
        content: [
            "Dallas TX, famed for its stunning suburbs and diverse culture basks in fantastic weather. It’s a bustling city with a lively business scene.",
            "Building an online presence is the first step if you have any kind of Dallas TX -based venture. To put it simply: craft an appealing website that pulls potential customers to your company like bees to honey.",
            "Such top-notch websites don’t just draw people – they turn them into new leads too! They could significantly boost both sales and profits for your firm. If you skimp on web quality though, competitors may swoop in pilfering prospective clients away from you right under our nose!",
            "Winning at search engine rank races (think Google or Bing) only happens when sites are tailored according to exact standards set by these giants themselves—enter software developers equipped with mobile testing tools operating as part of development teams who specialize in computer science where their full time programs concentrate heavily on object-oriented analysis making sure complex projects can be handled easily while maximizing results regardless how demanding tasks might become.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Google sets a high bar for all websites. As the world’s numero uno search engine, only top-notch sites make it to their ranking list. Countless DIY website builders might convince you that creating your own site is as easy as pie.",
                "But let’s face it, how often would such a homemade creation measure up against Google’s stringent demands? Especially when you’re not even fully clued-in on what they are! Choosing to build your own website could leave you with wasted time and money spent on an underperforming platform.",
                "Beyond this risk of squandered resources, attempting DIY web designs can lead to dwindling quality , causing harm in both revenue and return-on-investment (ROI). Bottom line – building from scratch isn’t always fruitful given these risks involved.",
                "Remember: many competitors out there have professionally-crafted websites at hand – meaning any self-produced efforts may just cave under pressure when compared.",
                "This highlights why hiring qualified assistance matters most- think about engaging a certified design agency based right here in Dallas TX which understands software design principles along with technical requirements precisely because those factors matter!",
                "Assignments demand professional qualification handling propriety languages while providing elegant information architecture solutions through well-designed comps contributing significantly towards being successful!",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Welcome to Dev.co, your Dallas TX -based web design wizards. Wondering how we can boost your online presence? You’re in the right spot!",
                "Our team boasts of a whopping 250+ developers who tackle all sorts of web projects with ease. Does size matter? Not really – whether it’s an enormous project or just a tiny one, our extended teams are prepped and ready.",
                "We don’t play favorites here at Dev.co; every small enterprise gets equal attention as any corporate behemoth would get from us. Our aim is simple: magnify your digital footprint for better business gains!",
                "That’s not all – site connection security forms an integral part of what we do because that’s important when you need people to trust their data on your website (and they should!). Plus our specialists review security aspects regularly ensuring smooth sailing always.",
                "And before I forget, developing incredible ‘web application front ends’ happens everyday around here too maintaining top-notch user experience while keeping each connection secure!",
                "So why wait? Jump onboard and let’s start this exciting journey together!",
                "At DEV.co, we focus on creating websites that are functional and beautiful. We make sure our designs look good but also help you meet the goals of your business.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Established back in 2008, we’ve made a name for ourselves as one of Dallas TX top web development agencies. Customer satisfaction? It’s our number one priority.",
            "Our work doesn’t stop until you’re completely happy with your site. Your website will be something to boast about; loved by you and appreciated by those who visit it.",
            "We have an ace development team on board. They also have prowess over object-oriented programming languages which makes them all-rounders really. They possess the qualifications needed to blow design comps out of the water! Every new member goes through multi week induction training before they touch any project – so rest assured that only experts are working for you.",
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