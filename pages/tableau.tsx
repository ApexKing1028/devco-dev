import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Tableau Development Services",
        content: [
            "Data is power – but how can your business get the most out of its data? It all comes down to data visualization, a data management niche that has seen rapid growth in recent years.",
            "Still, not all data visualization is created equal, which is why businesses seeking the most useful representations turn to Tableau."
        ]
    }

    const second = {
        title: "What is Tableau?",
        description: [],
        content: [
            "Tableau makes several different products, all within the realm of business intelligence. Among these, their relational databases, data processing cubes, and cloud databases stand out. More recently, the company has launched a new analytics extension that’s compatible with popular data science programs, The platform also supports server management and offers simplified content migration that allows it to compete with other major data management platforms, such as SQL, and it smoothly integrates with popular platforms like Salesforce."
        ]
    }

    const third = null

    const forth = {
        title: "Tableau Development Services",
        description: [
            "At Dev.co, we offer a range of Tableau development services aimed at helping your business access a broad range of business insight.",
            "On its own Tableau offers up simple reports.",
            "For businesses ready to tackle more advanced data, though, our Tableau development services offer benefits including:"
        ],
        content: [
            {
                title: "Dashboard Development",
                content: "Any time you’re working with detailed data visualizations, your dashboard is your home base. The default frameworks in Tableau don’t reveal much, however. We can develop intuitive, information rich dashboards in line with data visualization design best practices."
            },
            {
                title: "Increased Automation",
                content: "Tableau can help your business manage a great deal of data, but without proper automation in place, it remains a labor intensive platform. By building in extensive automation, we can help your business cut manual data management time. We use a number of recognized APIs to support automation for data extraction, template creation and deployment, and more."
            },
            {
                title: "Install Quality Controls",
                content: "Any time that a business deals with large amounts of data, it also deals with data quality issues. As part of our development services, we can evaluate data quality, addressing common problems with naming and grouping, erroneous null values, and overall consistency. We can also automate functions that commonly lead to quality errors and install code triggering quality control alerts."
            },
            {
                title: "Real-Time Data Exchange",
                content: "Information moves fast, and falling behind can leave your business vulnerable - which is why you can’t afford to lag behind on data updates. By implementing an Extract-Transform-Load (ETL) algorithm, we ensure that your database contains the latest values. You’ll never make a decision based on out of date information again."
            },
            {
                title: "Expanded Use",
                content: "If your business is going to use Tableau, you should maximize its application. That’s why, though its general function is data visualization, we can help you expand your use to enhance collaboration between departments, implement artificial intelligence features like Explain Data, and help your business embrace predictive analytics for a competitive edge"
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
        title: "Tableau Meets Dev.co",
        content: [
            "Great data visualizations should make information easy to use, enabling intuitive decision making, but that can’t happen if you have to fight with your software to generate those visualizations.",
            "By partnering with Dev.co, your business can transform how it uses Tableau and maximize the program’s value. Our Tableau development services put information at your fingertips, extracting deeper meaning from the basic data."
        ]
    }


    const eighth = {
        title: "Interesting Facts About Tableau",
        content: [
            "Tableau is an interactive, data visualization program founded in 2003. The company was acquired by Salesforce in August 2019, for $15.7 billion.",
            "During its May 2013 NYSE IPO, Tableau raised more than $250 million.",
            "Adam Selipsky is the current CEO of Tableau.",
            "Tableau offers excellent IT support, while offering easy to implement solutions. From the moment you click on the download, it takes about 20 minutes for the software to be operational.",
            "Tableau is a great program for non-technical users because it allows for “no-code” data queries.",
            "Tableau is popular across industries because of its ability to analyze and present information in an accessible way. Tableau visualizations are easily embedded into a range of other platforms, including corporate portals like Microsoft SharePoint.",
            "Tableau has been recognized as a technology leader in the Gartner Magic Quadrant reports for seven consecutive years, from 2012 to 2019.",
            "In 2018, Tableau acquired the artificial intelligence startup Empirical Systems with the goal of integrating Empirical Systems’ AI into their own platform.",
            "The Tableau Foundation was founded in 2014. The organization has committed to donation $100 million in software, training, and grants to non-profits by 2025. Their goal is to use data as a tool for solving major social problems.",
            "Tableau customers include many healthcare organizations, including UChicago Medicine, NYC Health + Hospitals, and UNC Health; banking groups like Wells Fargo, USAA, and JPMorgan Chase; and retail organizations like Whole Foods, Abercrombie & Fitch, and HelloFresh.",
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;