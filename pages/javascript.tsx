import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "JavaScript Development Services",
        content: [
            "JavaScript is a dynamic programming language that creates an interactive user experience online. JavaScript brings webpages to life with interactive elements that engage users and make your brand stand out.",
            "Interactive elements can even be used to tell a dynamic story, like the New York Times did with their All Birds article. Impressed? That’s the power of JavaScript."
        ]
    }

    const second = {
        title: "JavaScript consulting & development by Dev.co",
        description: [
            "Our team of JavaScript experts is capable of delivering a wide range of customization to suit your needs. We work with popular frameworks and libraries including Node.js, React, Angular, Electron, and Laravel."
        ],
        content: [
            "At Dev.co, we provide world-class JavaScript planning, development, and testing according to industry best practices. We use leading-edge technologies to build JavaScript applications that website visitors love.",
            "As experts in our industry, we continually deepen our knowledge in the latest JavaScript libraries and frameworks to provide our partners with cutting-edge customizations."
        ]
    }

    const third = {
        title: "Why use JavaScript?",
        description: [
            "JavaScript creates a rich user experience that captures attention, engages users, and creates a smooth user experience. User experience is central to your website’s success."
        ],
        content: [
            {
                title: "Interactive navigation",
                content: "Make your navigation elements fun with JavaScript. Popular elements include panels that slide out when clicked, custom dialog boxes, and tabbed navigation with special effects."
            },
            {
                title: "Animations",
                content: "Animations are a powerful way to capture and hold a visitor’s attention. Custom JavaScript animations will also help you achieve your conversion goals."
            }
        ],
        other: [
            "Draw attention to your call-to-action with an animated arrow or a quick burst of color.",
            "If you have content-rich pages, display page loading progress in a spinner so visitors won’t bounce before the page is fully loaded.",
            "Dynamically reveal page elements in the viewport as the user scrolls up or down the page.",
            "Improve the user experience by using simple animations like page swipes to make it clear when a user is taken to a new page.",
            "Activate fun animations when a user hovers over an icon or image.",
            "Create a simple interactive game for visitors that aligns with your brand.",
            "Sell clothes? Have visitors dress up a character with drag-and-drop articles of clothing. Are you an educational organization? Create glowing icons that reveal informative content when clicked.",
            "Design your own custom branded animation – we’ll build it!"
        ]
    }

    const forth = {
        title: "The DEV.co JavaScript development process",
        description: [],
        content: [
            {
                title: "Discovery & brainstorming",
                content: "As your development partner, we’ll dive deep to capture your vision and your business goals so we can create ideas together."
            },
            {
                title: "Planning",
                content: "Once we collaborate on possibilities, we’ll identify the best ideas and create a plan for your development project. You’ll approve the ideas and we’ll figure out the technical feasibility of those ideas."
            },
            {
                title: "Design & development",
                content: "Once you approve the elements to be developed, we’ll start designing your custom JavaScript web applications."
            },
            {
                title: "Testing",
                content: "Once we begin developing your idea, we’ll send you clickable prototypes for testing and feedback. We’ll apply your feedback to the next round of development to achieve a final result you can be proud of."
            }
        ]
    }

    const fifth = [
        {
            title: "What does a JavaScript Developer do",
            content: [
                "A JavaScript Developer is responsible for developing and maintaining web applications using the JavaScript programming language in computer science. They work with other web developers and designers to create websites and web-based applications that are interactive and user-friendly. In addition to writing code, a JavaScript Developer may also be responsible for troubleshooting, testing, and debugging Web-based application.",
                "As a JavaScript developer, you will be responsible for developing and maintaining Web-based application using JavaScript. This may include tasks such as debugging code, writing code to create new features or enhancements, and troubleshooting code issues. In addition, you will also be responsible for working with other members of the development team to ensure that the application meets all requirements and is up to date with the latest web standards."
            ],
            other: []
        },
        {
            title: "End-To-End JavaScript Development Services to Match Your Business Needs",
            content: [
                "If you’re looking for JavaScript development services that can take your business to the next level, you’ve come to the right place. At ABC Company, we pride ourselves on our ability to provide custom solutions that meet the unique needs of our clients.",
                "Whether you’re looking for a simple web application or a more complex enterprise-level solution, our team of experienced JavaScript developers can get the job done. We have a proven track record of delivering quality results on time and on budget.",
                "If you’re ready to take your business to the next level, contact us today to discuss your specific needs. We’ll be happy to provide you with a free consultation and proposal."
            ],
            other: [

            ]
        },
        {
            title: "What's The Difference Between JavaScript And Java?",
            content: [
                "JavaScript is a programming language that is most commonly used in web browsers to create interactive web pages. Java is a more general-purpose programming language that can be used for a wide variety of purposes, including web development.",
                "There are some key differences between JavaScript and Java. First, JavaScript is primarily used for client-side development, while Java is more often used for server-side development. Second, Java is a compiled language, while JavaScript is an interpreted language. "
            ],
            other: []
        },
        {
            title: "We Provide Full Stack JavaScript Development Solutions to Meet your Business Needs.",
            content: [
                "As a top JavaScript developer, we provide full stack JavaScript development solutions to meet your business needs. We have a wide range of services that we offer, from web development to senior full stack developer. JavaScript popularly known as JS, is a high-level, Scalable and reliable programming languages.",
                "We are confident that we can provide you with the best solution for your project. Being one of the top-rated JavaScript development companies, we have expertise in developing a JS development solution to meet your business requirements."
            ],
            other: []
        },
        {
            title: "Specialities of Our JavaScript Development Teams",
            content: [
                "Our javascript developers are experts in computer science and software development. They have a deep understanding of how javascript works and are able to create custom solutions that meet the specific needs of our clients. In addition, they are also experienced in working with a variety of JS frameworks, libraries, and tools. As a result, they are able to provide our clients with the best possible JavaScript development experience.",
                "With our accomplished web developers, turn your ideas and experiences into digital product and enjoy state-of-the-art JavaScript Development Services.",
                "Our adept software development team is trained to develop mobile applications and web applications that cater to our customer’s various development requirements. Our high-level JavaScript development services have the finesse that is guaranteed to delight our end customers."
            ],
            other: [
                "Specialised in development from scratch and on-going maintenance.",
                "Expertise in delivering reusable, scalable and fully functional codes.",
                "Dedicated T&M Management",
                "Agile development for rapid and fast releases."
            ]
        },
        {
            title: "Why Dev.co Best as a JavaScript Development Company",
            content: [
                "There are many reasons to choose Dev.co as your JavaScript Development Company. We have a proven track record of delivering high-quality JavaScript solutions to our clients. We are experts in JavaScript and have a deep understanding of the language and its nuances. This allows us to deliver JavaScript solutions that are both robust and scalable.",
                "In addition, we offer a wide range of web development services. Whether you need a simple website or a complex web application, we have the expertise to deliver. We also offer a variety of custom JavaScript development services, so you can get exactly the solution you need.",
                "Finally, we offer competitive pricing for our JavaScript development services. We believe in delivering high-quality solutions at a fair price, so you can get the most value for your money. If you’re looking for a JavaScript Development Company that can deliver high-quality solutions at a competitive price, then contact Dev.co today. We’ll be happy to discuss your project with you and provide a no-obligation quote."
            ],
            other: []
        },
        {
            title: "Schedule a consultation with an expert JavaScript Developer",
            content: [
                "If you’re looking to take your web development to the next level, a consultation with a JavaScript Developer can help you achieve your goals. Our JavaScript developers are experts in the latest web technologies and can provide you with the guidance and support you need to create a truly cutting-edge website or application.",
                "During your consultation, we’ll discuss your specific needs and objectives and develop a plan of action that will help you reach your goals. We’ll also provide you with resources and advice on the best tools and practices to use in your web development process. Whether you’re just getting started or are looking to take your skills to the next level, we can help you achieve success.",
                "Schedule a consultation with us today and see how our JavaScript Developers can help you take your web development to the next level."
            ],
            other: []
        },
    ]

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
        title: "Get in touch with us",
        content: [
            "If you’re ready to add more value to your website through dynamic visitor interaction, choose Dev.co for your JavaScript development partner.",
            "Connect with us today and let us know how we can help bring your ideas to life."
        ]
    }


    const eighth = {
        title: "Interesting Facts About JavaScript",
        content: [
            "JavaScript was created in 1995 by a Netscape employee named Brendan Eich",
            "JavaScript powers 20% of WordPress’ core code",
            "JS is the only programming language that can be used on the front-end of a website",
            "Unlike other languages, you can begin a JavaScript statement with a semicolon",
            "JavaScript wasn’t always compatible with mobile devices, but is now supported by all modern web browsers for mobile and desktop",
            "JS can be used offline because it’s executed in the browser",
            "The best web developers can also program in JavaScript",
            "It’s hard to find a website that doesn’t utilize JS",
            "Although JavaScript was inspired by Java, they are completely different, although they share libraries and syntax",
            "The popular document repository for journalists called DocumentCloud utilizes JavaScript and JSON to dynamically display document contents",
            "69.7% of web developers prefer JavaScript",
            "JavaScript frameworks make it easy for developers to build a new project and saves time and money",
            "There are 24+ JS frameworks and 83+ libraries available for developers",
            "JavaScript programmers continually create new libraries to add more functionality and make programming easier",
            "jQuery and Node.js are the most popular JavaScript framework and are used in 50.4% and 48.3% of projects respectively.",
            "Angular.js and React.js come in second and are used in 32.4% and 32.3% of projects, respectively."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;