import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
   const first = {
        title: "Kubernetes Development Services",
        content: [
                "Are you looking for a container management services solution using Kubernetes? Perhaps you require custom Kubernetes container development?",
                "You’ve come to the right place. At staging.dev.co, our team of Kubernetes professionals can help you design, develop, and deploy the Kubernetes solutions you need.",
        ],
    }

    const second = {
        title: "What Is Kubernetes?",
        description: [
            "Kubernetes is an open source platform for automating the deployment, scaling and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery.",
            "Kubernetes (also known as K8s) can be described as a platform that you can use to manage multiple containers at scale. It’s an open source cluster management tool that was built with the idea of making it easier to run containerized applications on any infrastructure, but without sacrificing control and transparency.",
            "Kubernetes supports major operating systems, providing a consistent development environment for software development across various platforms. Additionally, Kubernetes development tools are essential for optimizing resource utilization and managing Kubernetes clusters effectively, making it a crucial part of building cloud native applications.",
        ],
        content: [
            "It allows users to eliminate the complex network scheduling and dependency management issues that have been plaguing users since before Mesos and Docker were around. It was designed by Google with cloud computing architectures in mind, but it can work with any server capable of running Docker containers. Our Cluster as a Service quickly deploys on-premise or in the cloud anywhere there’s an internet connection, eliminating the need for you to provision any hardware or software.",
            "Built by Google, the Kubernetes open source container management system allows for nearly unlimited scalability without the necessity of adding additional headcount to your DevOps team. ",
        ]
    }

    const third = {
        title: "Kubernetes Development Services",
        description: [
            "We offer Kubernetes Services Development, Container Management, and Hybrid Cloud Solutions to help your teams build a secure, scalable, and reliable container infrastructure.",
            "We assist you in modeling your business applications, integrating infrastructure as code and automating continuous delivery pipelines.",
            "For example, our Kubernetes developers provide the following critical container management solutions:"
        ],
        content: [
            {
                title: "Container Configuration",
                content: "Customized container configuration services including storage orchestration using the storage solution of your choice (e.g. iSCI, Gluster, Cinder, Flocker, AWS, GCP, etc.)."
            },
            {
                title: "Rollout Management Support",
                content: "Get assistance in monitoring application health while rolling out multiple container instances without risking the entire application or network. We offer customized deployment support."
            },
            {
                title: "Load Balancing",
                content: "Assistance in the setup and management of separate IP address configuration, ensuring applications can run without modification. We can help assign single DNS to pods and clusters for proper load balancing of application resources."
            },
            {
                title: "CI/CD Batch Execution",
                content: "Automate your batch, CI and CD workloads, including the replication or replacement of failed containers all the the admin oversight your team needs."
            },
            {
                title: "Bin Packing Automation",
                content: "Let us help you set up automation in your container resource management, while optimizing constraints. We can help save resources while mixing critical workloads for enhancing container utilization."
            },
            {
                title: "Automate Patches/Fixes",
                content: "Restart and reboot failed containers that exist in silo. Automate the retirement of containers who may not appropriately respond to your required health analysis. Avoid use of client containers with compromised health via automation."
            },
            {
                title: "Automate Scaling",
                content: "We can help you set up simple commands for horizontal applications scale-up/scale-down within a simple user interface. Perform it manually or based on CPU usage at a given timestamp."
            },
            {
                title: "Extensibility Consulting",
                content: "Let our team help you maintain upstream source code while still adding features to your remote Kubernetes cluster and applications."
            },
            {
                title: "Dual-Stack Compatible",
                content: "Allocate resources using IPv4 and IPv6 addresses to pods and other services on your containerized Kubernetes network."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co Kubernetes Development Workflow",
        description: [],
        content: [
            {
                title: "Work Environment Set Up",
                content: "Set up Kubernetes work environments Local Kubernetes vs. Cloud Kubernetes Customize Environment Establish Security Failsafes"
            },
            {
                title: "Kubernetes Development",
                content: "Learn/train on Kubernetes interaction & management Add/train for specific Kubernetes dev tools Common K8s dev configurations Customized K8s dev configurations"
            },
            {
                title: "Kubernetes Deployment",
                content: "Staging, Development and Testing environments, Skaffold, DevSpace & CI/CD integration Production preparation Creative brief development"
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
        title: "Partner with Dev.co",
        content: [
            "Want to learn more about how Dev.co can help your business leverage Kubernetes to reach your goals?",
            "Contact us today and we’ll be happy to discuss in further detail.",
        ]
    }


    const eighth = {
        title: "Interesting Facts About Kubernetes",
        content: [
            "Commonly stylized as K8s, Kubernetes is an open source containerized management and orchestration system for automating software deployment, scaling and management.",
            "Kubernetes was originally designed by Google in 2014 and the code is now managed by the Cloud Native Computing Foundation.",
            "Kubernetes is Greek for “helmsman” or “pilot.”",
            "While Kubernetes still works an plays well with Docker, CRI-O and Containerd, it was originally set up to run with Docker runtime, but since May of 2022, Dockershim has been completely removed.",
            "The following companies all have or have acquired their own Kubernetes-based systems: Amazon Oracle IBM Google SUSE Red Hat Platform9 VMware Microsoft",
            "Kubernetes is most typically used for microservice-based implementation because it is closely tied to microservices architecture.",
            "Kubernetes was released on July 21, 2015 by Google in consult with the Linux Foundation.",
            "In the year of its initial release, Kubernetes received 9th place on the list of GitHub projects by number of commits and second place in total authors and issues that year, just behind the Linux kernel.",
            "The project was originally created within Google by Joe Beda, Brendan Burns and Craig MCluckie but was later joined by Brian Grant and Tim Hockin.",
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;