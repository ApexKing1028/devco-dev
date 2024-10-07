import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "WordPress Development Company",
        content: [
            "We design & develop beautiful custom WordPress websites for clients worldwide. Our WordPress development services include custom integrations, plugin updates, custom feature development and on-going website maintenance for reasonable flat fees. Your site should not only be beautiful, it should also be fast. We design and develop with speed in mind.",
            "Our WordPress developer team has been building websites for nearly two decades, assisting some of the most recognized brands on the Fortune 1000 with their custom WordPress developer needs. "
        ]
    }

    const second = {
        title: "Experts in Custom WordPress Development",
        description: [
            "Our expert WordPress developers are highly skilled in PHP development and UX/UI design, making DEV.co the best choice for your custom project.",
            "24/7 Monitoring",
            "Maintenance",
            "Support",
            "Regular Updates",
            "Regular Backups",
            "Security Checks"
        ],
        content: [
            "We specialize in developing custom WordPress themes, plugins, back-end administrative frameworks, and other dynamic website elements that make a complete website (like JavaScript).",
            "We create websites for small, medium, and large businesses in addition to enterprise and individuals. Our experienced developers can work with businesses and individuals in virtually any industry to create any type of website required.",
            "We offer each client a dedicated web developer with the knowledge, technical skills and earned expertise as a project manager to build websites for your business. Our web developers have gained experience from building thousands of custom sites for clients worldwide. Let us do the same for you! "
        ]
    }

    const third = {
        title: "",
        description: [
        ],
        content: [
            {
                title: "Don’t want your site to look like a basic WordPress blog? Your dedicated WordPress developer has you covered",
                content: "Although WordPress is known for its powerful blogging capabilities, it can power standard and custom websites without looking like a boring blog. When you work with Dev.co, our team of WordPress developers will create a custom theme for your site that matches your vision. We can build a custom theme that looks similar to another site you like, or we can create something completely custom – it’s up to you."
            },
            {
                title: "Responsive, professional WordPress theme design for any industry",
                content: "At Dev.co, we have a strong track record of creating professional, responsive themes that are easy for visitors to navigate and easy for clients to update. Our WordPress developers can create themes for any industry including eCommerce, educational institutions, businesses, and individuals who are their own brand. If you can describe it, we can build it."
            },
            {
                title: "We take WordPress security seriously",
                content: "The Dev.co WordPress development team takes cybersecurity seriously. We build all WordPress sites using the latest secure release of both core files and plugins and keep all software updated throughout the process.. We’ll also secure your site through the back-end using the latest security protocols and methods."
            },
            {
                title: "Already have a WordPress website and need customizations? Let our WordPress developer team help.",
                content: "If you already have a website, we can help with custom plugin development and theme customization. We’re ready to tackle anything from creating a custom color scheme to reorganizing the position and size of your page elements. If you’re using existing plugins that don’t quite meet your needs, let us know what you need and we’ll design a plugin."
            },
            {
                title: "Partner with a WordPress developer from DEV.co for your WordPress development project",
                content: "If you’re ready to have a custom website designed specifically for your business, we want to partner with you. Contact us today to connect with one of our WordPress development specialists and tell us what you’re working on. We’d love to be your WordPress development partner."
            }
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "WordPress Maintenance Plans",
        description: [
            "Best WordPress Plans For Complete WordPress Maintenance And Ultimate Support"
        ],
        content: [
            {
                title: "Best WordPress Developer Plans For Complete Maintenance And Ultimate Support",
                content: "Are you looking for an enterprise solution to keep up with the technical maintenance of your site? We offer comprehensive WordPress support services to fix downtime and optimize your experience with WordPress. Whether you want to set up a business website, run an ecommerce store, or a blog, you can do it all with WordPress. We assist you in choosing the right maintenance and support plan to help you ensure a smooth website performance."
            },
            {
                title: "Do You Need Help To Boost Your WordPress Site’s Speed & Performance?",
                content: "WordPress sites have vigorous performance in terms of power, SEO, support, functionality, and customization. However, regular upkeep, themes, and additional plugins might affect its performance. Whether you are facing technical glitches or have an unestablished site, we can help you vamp it up with the best solutions. We offer exclusive packages according to the varying needs of our clientele, ensuring day-to-day maintenance, expert help, and instant support whenever needed. Our services are ideal for customers who need a website but can’t, or don’t want to deal with the technicalities or security concerns that come with it. We offer the best plans for WordPress support and maintenance – offering our supreme services to deploy experiences that last forever. Our bundles for WordPress maintenance and support offer:  24/7 Monitoring Maintenance Support Regular Updates Regular Backups Security Checks"
            },
            {
                title: "Our Essential Services Included In Every Plan",
                content: " We offer numerous services covering various aspects of WordPress through a wide range of maintenance plans. Consequently, we have grouped some of the essential services and included them in all of our plans.  "
            },
            {
                title: "Our WordPress Maintenance Plans",
                content: "With expert support and supervision, we let you focus on your business while we take care of your website. Our WordPress maintenance plans are designed to suit the needs of all sizes of companies. However, we offer three different tiers with different pricing and services."
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

    const seventh = null

    const eighth = {
        title: "Interesting Facts About WordPress",
        content: [
            "“WordPress” is trademarked, but it’s owned by a non-profit company called the WordPress Foundation. This foundation was created by the WP co-founder Matt Mullenweg.",
            "The WordPress Foundation generated $11,178 in donations in 2018.",
            "Each WordPress version is named after a Jazz artist. For instance, the first version was named after Miles Davis.",
            "WordPress is available in 200+ languages.",
            "Number of downloads: 77 million.",
            "Estimated number of users: 76.5 million.",
            "Why WordPress is the top blogging platform: It’s easy to use, free, and open source.",
            "Downside to using WordPress: Custom themes can be difficult to use without initial support.",
            "New daily installs: 500+.",
            "Lines of code written for the WP core: 346,000.",
            "Number of WordPress versions: 419.",
            "Number of major releases: 37.",
            "Number of free WordPress plugins: 54,000+.",
            "Number of plugin downloads: 859 million.",
            "Most popular WordPress host: HostGator and DreamHost.",
            "Date WordPress was launched: May 27, 2003.",
            "A blogger named Christine Tremoulet coined the name “WordPress”.",
            "WordPress powers 27% of all websites online.",
            "WordPress has official events called WordCamps. These events are held in 41 countries and more than 36,000 WordPress users attend. More than 140 WordCamps were held in 2018 alone.",
            "There are 1,660 WordPress meetup groups with 782,141 active members in 58 countries.",
            "WordPress is written in PHP, JavaScript, and uses MySQL databases.",
            "WordPress provides free community support on the official WordPress forum.",
            "WordPress is designed to automatically update to new versions, however, plugins must be manually updated.",
            "You can get a free, hosted version of WordPress on wordpress.com",
            "WordPress makes it easy to build and manage multiple WP sites from one dashboard.",
            "Top websites powered by WordPress: BBC America, Vogue, Rolling Stone, the White House, Walt Disney.",
            "WordPress.com and WordPress.org offer different services. WordPress.com offers users a hosted WordPress website while WordPress.org offers a free download of the core files for self-installation."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;