import * as React from "react";
import Service from "@/components/services";

const Staffing = () => {
    const first = {
        title: "Project Management Services",
        content: ["Project management is vital for your organization to succeed. You need project managers who are capable of allocating resources, managing tasks, and supervising your projects through to completion. But if you're suffering from a lack of project managers, or if your project management team is undertrained or unskilled, your entire organization could be at risk.", "With the help of our project management services, we can give your organization the project managers and project management training it needs to thrive."]
    }
    
    const second = {
        title: "How can a project management consultant improve your project management approach?",
        description: [""],
        content: ["For some clients, this means directly providing senior project managers who can see your projects through to completion. You provide the projects, and we provide the experts who can get those projects done, on time and under budget."]
    }

    const third = [
        {
            title: "How a Project Management Consultant Can Help",
            description: ["For other clients, that means providing your existing project managers with the tools they need for success, including:"],
            content:
                [
                    {
                        title: "Training and workshopping",
                        content: "Good project managers have years of training and experience in the field. At DEV.co, we'll work with your project managers to teach them the fundamentals of project management with realistic scenarios and workshops"
                    },
                    {
                        title: "Past project analysisn",
                        content: "Chances are, you've seen many projects go wrong, with budgeting issues, delivery delays, and other problems. We'll take a deep, analytic dive to figure out why these projects went wrong, so you can manage future projects better."
                    },
                    {
                        title: "Ongoing education and support",
                        content: "After our initial consultations, we'll provide your project managers with ongoing education and support, giving them further training, answering questions, and supporting your business's latest projects."
                    },
                ]
        },
    ]

    const forth = null

    const fifth = null

    const sixth = {
        title: "The Goals of Project Management",
        description: [
            "At DEV.co, we think of successful project management as unfolding with five main goals:",
        ],
        content: [
            {
                title: "Finish on time",
                content: "Adhering to a deadline sometimes means the difference between total success and total failure. Even in less extreme circumstances, your ability to hit a deadline has a massive impact on client trust. It's imperative you're able to finish your projects on time"
            },
            {
                title: "Stay within budget",
                content: "Of course, you'll also have to stay within budget. When projects spiral out of control, demanding more resources and further costs, their profitability is completely jeopardized. Successful project management also means staying well within your allotted budget, or even falling below projected costs"
            },
            {
                title: "Meet the project requirements",
                content: "Each project should come with its own list of requirements and goals; sometimes that means digging to figure out exactly what the client wants (or what your company needs). In any case, all those core requirements should be met, or should only be compromised to serve a higher goal"
            },
            {
                title: "Keep customers happy",
                content: "If you finish on time, on budget, and meet the project requirements in full, you should end up with happy customers no matter what. But it's still important to communicate with clients along the way, and work with them to make sure they stay involved in the process."
            },
            {
                title: "Keep workers happy",
                content: "Additionally, you should strive to keep morale high among your employees, contractors, and vendors. An unhappy team will lead to an inferior product, and possibly future performance issues."
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
        title: "Contact DEV.CO Today!",
        content: ["Is your project management team in need of extra training or support?", "Do you have a mission-critical project that needs an experienced project manager at the helm? Contact DEV.co today for a free quote on our project management consulting services, or to learn more about how we can help!."]
    }

    const tenth = null

    return (
       <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Staffing;