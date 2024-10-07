import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Software Development for Healthcare",
        content: [
            "Healthcare firms rely on technology every day to save lives. That life-saving technology includes the software that runs everything behind the scenes. From websites and data storage to invoices and patient health records, healthcare firms rely on healthcare software development services to provide optimal patient care.",
            "As a custom healthcare software development company, we understand the critical role that technology plays in the healthcare industry. Our expertise lies in creating innovative solutions like hospital management software that streamline healthcare services and enhance patient care. ",
        ]
    }

    const second = {
        title: "We help medical firms improve patient care with custom software development",
        description: [""],
        content: [
            "At Dev.co, we build secure software applications for healthcare and medical firms to maintain operations, compliance, and cybersecurity.",
            "Our full-stack development services are perfect for enterprise firms that require reliable, secure healthcare applications.",
            "We collaborate closely with healthcare professionals to develop tailored software solutions that meet the unique needs and challenges of the healthcare industry. Our goal is to empower healthcare providers with efficient and effective tools that improve patient outcomes and overall healthcare delivery.",
        ]
    }

    const third = [
        {
            title: "The benefits of custom software development",
            description: [
                "Custom software development benefits your firm and your clients. Better software facilitates better patient care, especially when it comes to healthcare systems, healthcare data, and healthcare regulations.",
                "Better patient care translates to a positive brand reputation. When you’re an enterprise healthcare firm, brand reputation is everything."
            ],
            content:
                [
                    {
                        title: "Improved patient care",
                        content: "The right software facilitates fast access to medical records, legal documents, chart notes, and more."
                    },
                    {
                        title: "Improved care coordination",
                        content: "With software designed to facilitate quick communications between patients, providers, caregivers, and employees, care coordination improves."
                    },
                    {
                        title: "Cost reduction",
                        content: "Using software to automate certain tasks saves time, money, and resources."
                    },
                    {
                        title: "Reach patients wherever they are",
                        content: "With proprietary mobile app development, providers can securely reach patients wherever they are. Patients can also reach their providers at any time."
                    },
                ]
        },
    ]

    const forth = [
        {
            title: "Dev.co developers are pros at building the following custom applications:",
            description: "",
            content: [
                "Medical appointment booking software",
                "Applications for patients to review, sign, and return forms",
                "Laboratory management solutions",
                "Client-provider communication portals Employee-employer",
                "communication portals/company intranets",
                "Self-help reference software",
                "Organized invoicing systems",
                "Mobile apps for educating clients (nutrition, exercise, etc.)",
                "Mobile apps for clients to access their medical records",
                "Systems for storing, tagging, and organizing medical data",
                "And more!"
            ]
        },
        {
            title: "Healthcare firms must adopt telemedicine to thrive",
            description: "Today’s patients want to connect with their provider via email and video conferencing. It’s no longer an option of convenience to offer online services. Statistics show a majority of patients prefer a virtual visit in non-emergency situations. With custom telemedicine apps by medical software development, patients will have more control over their care. When we build your custom app, patients will have access to:",
            content: [
                "Their personal medical records",
                "Online consultations with their provider(s)",
                "Online prescriptions that don’t require an appointment",
                "Self-education materials including articles, glossaries, and videos",
                "Appointment reminders",
                "Directions to medical facilities",
                "Quick appointment scheduling",
                "Printable treatment plans",
                "Online payments",
                "And more"
            ]
        },
        {
            title: "",
            description: "If you’re not already on board with telemedicine, we’ll get you there. Our developers will get your services online by building HIPAA-compliant solutions that meet and exceed patient expectations. We’ll make sure all patients are covered with web applications and apps for mobile devices.",
            content: []
        }
    ]

    const fifth = null

    const sixth = null

    const seventh = [
        {
            title: "Quality of care depends on having accurate data",
            content: [
                "Want to improve care quality in your healthcare organization? You need accurate data. Accurate data can be acquired through business intelligence (BI) services that gather meaningful insights from structured data.",
            ]
        }
    ]

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
        title: "Choose Dev.co as your custom software development partner",
        content: [
            "If you’re an enterprise healthcare firm, we want to be your development partner.",
            "Contact us today to learn more about how our custom software development services can help."
        ]
    }

    const tenth = null

    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;