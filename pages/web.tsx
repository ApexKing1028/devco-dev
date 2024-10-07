import * as React from "react";
import Service from "@/components/services";

const Page = () => {
    const first = {
        title: "Web Development Company",
        content: ["If your current website design is outdated, needs an overhaul, or you'd like to start from scratch, we're here to help. Our professional web development and web design team has decades of experience developing custom websites, web pages and web applications across multiple programming languages. Whether you need front end developers or back end web developers, our our team of full stack software developers has you covered.", "Mobile and web development company, DEV.co, offers web development services that include website development, web design, digital marketing, and SEO. Our team of experienced web developers can help you create a website that meets your needs and exceeds your highest expectations."]
    }

    const second = {
        title: "Full-stack web development solutions are more than aesthetics",
        description: ["A successful web developer is very different and more than just a web designer. Your custom web application will also needs user-friendly navigation and well-organized content and an unmatched user flow. Your back end development needs to be as good as your design. In short, you need software programmers with the ability to create dynamic websites. Without these elements your users, and especially your new visitors, won't likely return. As one of the top web development companies, other digital agencies look to our technical expertise in building their own custom web applications. "],
        content: [
            "Consider the following stats on web development agencies regarding the important of a quality web experience: ",
            "It takes website visitors 50 milliseconds to form an opinion about your company based on your website design.",
            "38% of visitors will bounce if your site design is unattractive.",
            "44% of visitors will bounce if they can't find your contact information."
        ]
    }

    const third = null

    const forth = null

    const fifth = null

    const sixth = {
        title: "Elements of high-performing, custom websites",
        description: [
            "High-performing websites consistently generate leads and sales. A high-performing website is one that meets the needs of its users while also providing a positive experience.",
            "We create websites with a combination of front end development and technical back end support. In doing so, we focus on the following critical elements:"
        ],
        content: [
            {
                title: "High search visibility",
                content: "High-performing websites and dynamic web pages come up in search results on the major search platforms like Google, Bing, and Yahoo. Nearly 90% of people use a search engine to find what they're looking for. You're losing money each day you're not visible in the major search engines. When creating a website, it is important to make sure the site is highly visible to your target audience. At DEV.co, we focus on the following from the outset of the web development process: Build with search engine optimization (SEO) in mind in order to make your site more visible in search engine results pages Make sure your site is easy to find and navigate and includes the proper sitemap and is synced with Google Search Consold (GSC Use high-quality (preferably custom) images and videos on your site Create compelling written content that will engage and inform your audience on your products and services"
            },
            {
                title: "Mobile-friendly design",
                content: "More than 57% of people search for content using a mobile device and in 2018, 63% of all paid Google search clicks originated from a mobile device. If your website isn't mobile-friendly and doesn't perform like most mobile apps, you're losing the majority of your leads that come from smaller screen sizes. So, how do web development companies like DEV.co make their clients' websites mobile-friendly? One way is by using responsive design. With responsive design, the layout of a website can change depending on the size of the screen it is being viewed on. This means that no matter what device you are using, you will always have a clear and easy-to-use website. Another way we create mobile-friendly is by using adaptive web design. With adaptive design, the layout of a website changes depending on the type of device it is being viewed on. For example, if a website is being viewed on a phone, the layout will be different than if it is being viewed on a laptop. This ensures that all users have the best possible experience when visiting your website. So, which approach should you use for your website? It really depends on your needs and budget. However, both responsive design and adaptive design are great ways to make your website mobile-friendly. We're not just a custom software development company, but we are one of the best mobile app development companies on the market as well."
            },
            {
                title: "Secure data transmission",
                content: "Data security is critical, especially for ecommerce websites. High-performing sites use SSL to encrypt data like credit card numbers, email addresses, and personal information to make visitors feel confident and secure. But our cybersecurity in web development is more than just an SSL. We offer government level security encryption, for web apps that require higher security measures. As web developers, we are responsible for ensuring the security of data transmission on our client web projects. We take into account a variety of factors, such as the type of data being transmitted, the level of security required, and the environment in which the data will be used. Data can be classified into two categories: sensitive and nonsensitive. Sensitive data is any information that could potentially cause harm if it were to fall into the wrong hands. Nonsensitive data is less sensitive and doesn't pose as much of a risk if it were to be leaked. When it comes to securing data, we take a layered approach. This means using a variety of security measures to protect data at every stage of its life cycle. Some common security measures include: password protection, encryption, firewalls, antivirus software, and data loss prevention (DLP) software Web developers also need to be aware of the different types of attacks that can be launched against their websites. Some common attacks include: SQL injection Cross-site scripting Phishing attacks Malware attacks DEV.co's web development agency can help secure your web project with an experienced web development services team and comprehensive security solutions."
            },
            {
                title: "Fast loading speed",
                content: "One of the most important aspects of any website is its loading time. A slow-loading website can frustrate users and cause them to leave before they even have a chance to see what your website has to offer. When your conversion rate takes a dive, so does your revenue. Some experts estimate that slow-loading websites cause retailers across the country to lose $2.6 billion in sales every year. We focus on Core Web Vitals (CWV) to ensure your web app loads smoothly without interruption. Here are a few ways we can help make your website load faster: 1. Use a web hosting service provider that is optimized for site speed 2. Use a caching plugin to store a copy of your website's pages in the visitor's browser 3. Minimize the use of images and videos on your website 4. Make sure all of your files are properly compressed 5. Use a content delivery network (CDN) to serve your website's files from multiple servers around the world 6. Optimize your website's code for faster loading times 7. Strip out any unnecessary code or plugins"
            },
            {
                title: "Clear calls to action (CTAs)",
                content: "A clear CTA tells visitors exactly what to do. For instance, should they call you, sign up for a free demo, or join your email list? A clear CTA including in your website's layout will leave no room for confusion. There are a few things we work with you to implement to create effective CTAs: Use strong, catchy text Make your CTA stand out visually Place your CTA in a prominent location Use color and contrast to draw attention to your CTA Keep your CTA simple and easy to understand Use clear and concise language Use action-oriented verbs Test different CTA designs to see what works best"
            }
        ]
    }

    const seventh = null

    const eighth = [
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
            title: "Deliver",
            content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
        }
    ]

    const nineth = {
        title: "Software Development Staffing: A Partnership",
        content: ["At DEV.co, we see software development and IT staffing as a partnership.", "It's our job to help you achieve your goals, whatever they may be.", "If you're interested in learning more about our staffing process, or if you're ready for a free quote on our IT staffing services, contact us today!"]
    }

    const tenth = {
        title: "Frequently Asked Questions (FAQs)",
        description: "Here are some of our more common questions regarding our web dev services. If you have more questions not answered here, feel free to get in touch!",
        content: [
        {
            title: "What experience do you have in building custom websites?",
            content: "The most important question to ask a web developer before hiring is about their experience in building custom websites. A web developer who has a lot of experience in custom website development will be able to create a website that meets your specific needs and requirements. They will also have a better understanding of the design and functionality that you can expect from a custom website. We have been engaged in web development for over a decade, having built hundreds of websites for clients large and small."
        },
        {
            title: "Do you have any case studies or examples of previous work?",
            content: "Yes, we do have case studies and examples of previous work. We can provide you with a list of references from past clients as well. Examples are available here from our work portfolio. "
        },
        {
            title: "How involved will I be in the design and development process?",
            content: "As the client you can be involved in the design process as much as you feel comfortable. DEV.co will keep you updated on the progress of the project and should welcome any feedback or input throughout the web development process. "
        },
        {
            title: "What is your process for designing and building a custom website or web app?",
            content: "When it comes to web development, there are a few key things to keep in mind: Understanding the client's business and goals Consulting with the client to get a clear understanding of their needs and requirements Plan and design your website before you start coding Creating a prototype of the website for client approval Building the website according to approved design Use a web-based platform such as WordPress to build your website Write clean, well-organized code that is easy to understand Test your website on different browsers and mobile devices Launching the website and providing training on how to use it Use a quality web hosting service Follow web standards Use best practices for web security Keep your code updated Use a good SEO strategy to help your website rank higher in search results Regularly update your content to keep users engaged DEV.co can help you with all of these aspects of web development, from planning and designing your website to coding and testing it, to SEO and content updates."
        },
        {
            title: "What coding languages and/or CMS do you use?",
            content: "The coding languages used for custom website development are typically ones that are widely used and well-supported (e.g. HTML5, React.js, Javascript, etc.). The content management system (CMS) depends on the project, but it will be one that is easy to use and maintain. "
        },
        {
            title: "How much do you charge for your web development services?",
            content: "The rates for custom website development services will vary depending on the company, the scope of the project, and the amount of time and effort required. At DEV.co, we offer custom website development services that are designed to meet the specific needs of our clients. We take an individualized approach to each project, and our team of experts will work with you to create a custom website that meets your specific goals. Contact us today to get started!"
        },
        {
            title: "How long will the process take?",
            content: "The average time to develop a custom website is 4 to 12 weeks, but this can vary depending on the size and complexity of the project."
        },
        {
            title: "Do you offer any maintenance or support services when you create custom websites?",
            content: "Yes! We have full or partial on-going maintenance and master services agreements (MSAs) for most of our enterprise web dev projects. Our maintenance plans include updates to the website design, content, and functionality. And our support plans include help with troubleshooting, website search engine optimization (SEO) services, and more. Contact us today to learn more about our maintenance and support plans for custom websites."
        },
        {
            title: "How do I join your web development team?",
            content: "We are always looking for top talent in the web development industry. If you are looking to become a web developer, we encourage you to look at our job board for in-house openings or get in touch with one of our technology recruiters for open staff positions with one of our partner companies. Most web developers and web designers are not a fit for our team. We have a stringent process for hiring other web developers. Get in touch with us regarding any open software developer roles we have. "
        },
        {
            title: "Can you please provide a list of references?",
            content: "Feel free to view our portfolio/work page or reach out to us and we can provide a direct list of references to get you comfortable with the quality of our work and the experience of our web dev team. "
        },
        {
            title: "Will you host my site or do I need to host it?",
            content: "We offer a variety of hosting options that fit your needs. You can bring your own host or let us host your site for you. In addition, we offer managed hosting plans that include things like regular site speed enhancements. "
        },
        {
            title: "How much do you charge for basic website updates?",
            content: "Depending on the type of update you are looking to implement, we have a range of pricing options that are determined by the experience level you are looking for in a developer. In short, our web development service has you covered! "
        }
    ]}

    return (
       <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;