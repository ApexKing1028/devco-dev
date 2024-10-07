import * as React from "react";
import {
    Container,
    Box,
    Icon,
} from "@chakra-ui/react";
import { FallInPlace } from "components/motion/fall-in-place";
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    FiArrowRight,
    FiCheckCircle
} from "react-icons/fi";
import { keyframes } from "@emotion/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Image } from "@chakra-ui/react";
import { ButtonLink } from "components/button-link/button-link";
const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Page = () => {
    const first = {
        title: "Over 15 years of software consulting experience",
        content: [
            "Established in 2008 as a advertising & financial software consulting firm.",
        ]
    }

    const second = {
        title: "About DEV.",
        description: [
            "DEV.co brings brings over 12 years of successful leadership to custom software development projects, leading cross-functional teams through designing and refining new processes to generate real, actionable business solutions for our clients small and large."
        ],
        content: [
            "We combine senior-level software and technical support with practical real-world business applications in finance, marketing, sales and business operations.",
            "By aligning and systematizing client goals, we are able to accelerate and scale desired outcomes far above initial objectives. Our tactical design, product and project management teams of over 250 individuals are able to simultaneously provide managed technical and tactical support to a near unlimited number of simultaneous large-scale projects.",
            "In doing so, we coordinate stakeholder workflows, liaising seamlessly with C-level requirements on an enterprise scale. We do more than articulate value, we deliver it–on-time and on-budget."
        ]
    }

    const third = [
        {
            title: "A few highlights of our cross-functional product and project teams",
            description: "",
            content: [
                "Team of 250+ senior software developers with niche-specific & cross-functional capabilities in nearly every discipline.",
                "Access to scale onshore, nearshore and offshore teams to 500+ with expanded technical resources for large staff requirements.",
                "All developers are heavily vetted for technical experience in their given vertical.",
                "Direct, actionable experience in delivering high-touch business and consumer solutions to SMB and Fortune 100 clients.",
                "Assigned senior project managers are experienced in coordinating large functional projects across multiple stakeholders and orgs.",
                "Direct experience delivering top-notch results.",
            ]
        }
    ]

    const forth = {
        title: "Software Development Partners",
        description: [],
        content: [
            {
                title: "An Extension of Your Team",
                content: "From the outset, we seek to learn as much about our clients' underlying business as possible. Doing so allows us to become a natural extension of your team when it come to strategy implementation. As experts across technologies and industry sectors, we bring solutions to your ever-growing technology needs by implementing a scientific approach to advanced digital design and code implementation. By knowing more about you, we can become a part of your team. When we engage with clients, we become partners. Our team becomes a natural extension of your team."
            },
            {
                title: "Best Practices, Delivered",
                content: "We apply the leading process and project development methodologies and software, allowing us to manage various stakeholders and project teams from around the globe. Our project-agnostic processes ensure deliverables consistently perform as desired and project timelines and budgets are met and exceeded. Your software development success is no accident. It comes from careful planning between your team and ours."
            },
            {
                title: "Alignment of Core Values",
                content: "Our mission includes providing the highest possible level of service with unwavering integrity. In doing so, we consistently strive for continual process improvement for the team and the processes we employ, with the understanding that the best feedback is always negative. Our consistent process improvement culture ensures we consistently improve our craft with each subsequent customer engagement, not letting our pride encroach on the best possible deliverable for our clients."
            },
            {
                title: "Masters at Project Scope",
                content: "As a team, we live by the mantra, 'seek first to understand and then to be understood.' Because of our breadth and depth of experience, we are masters of information technology architecture, aligning project scope and goals with the right process, team and deployment strategy."
            },
        ]
    }

    const skills = [
        "aws",
        "html",
        "java",
        "js",
        "laravel",
        "node",
        "php",
        "python",
        "react",
        "unity",
    ]

    const team = [
        {
            name: "Nate Nead",
            role: "Chief Executive Officer"
        },
        {
            name: "Dnyanesh Gangamwar",
            role: "Chief Operations Officer"
        },
        {
            name: "Aman Jain",
            role: "Chief Technology Manager"
        },
        {
            name: "Timothy Carter",
            role: "Chief Revenue Officer"
        },
        {
            name: "Samuel Edwards",
            role: "Chief Marketing Officer"
        },
        {
            name: "Ryan Nead",
            role: "VP of Sales"
        },
        {
            name: "Chris Gylseth",
            role: "Project Manager"
        },
        {
            name: "Kathrina",
            role: "Project Manager"
        },
        {
            name: "Tushar",
            role: "Project Manager"
        },
        {
            name: "Mahesh",
            role: "Sales Manager"
        },
        {
            name: "Carissa",
            role: "Project Manager"
        },
        {
            name: "Dallin",
            role: "Video Content Manager"
        },
        {
            name: "Sushil",
            role: "UI/UX developer"
        },
        {
            name: "Vikrant",
            role: "Full Stack Developer"
        },
        {
            name: "Kundan",
            role: "Full Stack Developer"
        },
        {
            name: "Pravin",
            role: "Backend developer"
        }, {
            name: "Arjun",
            role: "Full Stack Developer"
        },
        {
            name: "Priyanka",
            role: "Frontend developer"
        },
        {
            name: "Supriya",
            role: "Full Stack Developer"
        },
        {
            name: "Amyea",
            role: "Full Stack developer"
        },
        {
            name: "Satpute",
            role: "Full Stack Developer"
        },
        {
            name: "Yogesh",
            role: "Software developer"
        },
        {
            name: "Rajendra ",
            role: "Backend developer"
        },
        {
            name: "Varsha",
            role: "Backend developer"
        },
        {
            name: "Manjusha",
            role: "Frontend developer"
        },
        {
            name: "Dima",
            role: "Senior PHP developer"
        },
        {
            name: "Sergey",
            role: "Senior PHP developer"
        }
    ]

    return (
        <Box>
            <Box position="relative" overflow="hidden" className="mt-[-50px]">
                <BackgroundGradient height="80%" zIndex="-1" />
                <Container maxW="container.xl" pt={{ base: 40, lg: 40 }}>
                    <div className=" flex flex-col items-center">
                        <div className="font-extrabold text-[48px] lg:text-[52px] text-center">About us</div>
                        <div className="font-extrabold text-[48px] lg:text-[58px] text-center mb-[20px]">
                            {first.title}
                        </div>

                        {
                            first.content.map((item, index) => (
                                <div key={index} className="mb-[10px] text-[20px] text-center">
                                    {item}
                                </div>
                            ))
                        }

                        <FallInPlace>
                            <div className="flex gap-3 mt-[20px]">
                                <ButtonLink href="/contact" variant="outline" size="lg">
                                    Contact Us
                                </ButtonLink>
                                <ButtonLink
                                    size="lg"
                                    href="/portfolio"
                                    variant="outline"
                                    rightIcon={
                                        <Icon
                                            as={FiArrowRight}
                                            sx={{
                                                transitionProperty: "common",
                                                transitionDuration: "normal",
                                                ".chakra-button:hover &": {
                                                    transform: "translate(5px)",
                                                },
                                            }}
                                        />
                                    }
                                >
                                    Learn More
                                </ButtonLink>
                            </div>
                        </FallInPlace>
                    </div>
                    <FallInPlace>
                        {/* Second */}
                        {second && <Container maxW="container.xl" py="5">
                            <div className="flex flex-col sm:flex-row justify-start items-center p-8 border-[1px] rounded-lg gap-5 w-full">
                                <div className="w-full sm:w-1/2">
                                    <div className="font-bold text-[22px] sm:text-[30px]">
                                        Our Skills
                                    </div>
                                </div>

                                <div>With the software engineering support of onshore, nearshore and offshore teams, our development capabilities are as broad as they are deep. Our full-stack teams provide the front-end and back-end support your software projects deserve.</div>
                            </div>
                        </Container>}
                    </FallInPlace>

                    <Container maxW="container.xl" overflow="hidden">
                        <Box
                            display="flex"
                            w="full"
                            justifyContent="space-between"
                            animation={`${slide} 20s linear infinite`}
                            className="gap-6"
                        >
                            {skills.map((skill, index) => (
                                <Image
                                    key={index}
                                    src={`/static/images/skills/${skill}.png`}
                                    width={{ base: 50, md: 150, lg: 200 }}
                                    height={{ base: 50, md: 150, lg: 200 }}
                                    alt="Theme logo"
                                />
                            ))}

                            {skills.map((skill, index) => (
                                <Image
                                    key={index}
                                    src={`/static/images/skills/${skill}.png`}
                                    width={{ base: 50, md: 150, lg: 200 }}
                                    height={{ base: 50, md: 150, lg: 200 }}
                                    alt="Theme logo"
                                />
                            ))}
                        </Box>
                    </Container>

                    <FallInPlace>
                        {third && <div className="w-full mt-[90px]">
                            {
                                third.map((item, index) => {
                                    return (
                                        <div key={index} className="w-full mt-[40px]">
                                            <div className="font-bold text-center mb-[10px] text-[30px]">{item.title}</div>
                                            <div className="text-center mb-[10px]">{item.description}</div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[20px]">
                                                {
                                                    item.content.map((it, id) => (
                                                        <div key={id} className="flex text-center items-center sm:text-start gap-4">
                                                            <div><FiCheckCircle size={28} /></div>
                                                            <div className="text-[18px]">
                                                                {it}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>}
                    </FallInPlace>

                    <FallInPlace>
                        {forth && <div className="w-full mt-[90px]">
                            {
                                <>
                                    <div className="font-bold text-center mb-[10px] text-[30px]">{forth.title}</div>
                                    <div>{
                                        forth.description.map((item, index) => (
                                            <div key={index} className="text-center">{item}</div>
                                        ))
                                    }</div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {
                                            forth.content.map((item, index) => (
                                                <div key={index} className="mt-[10px] border-[1px] p-5 rounded-lg">
                                                    <div className="font-bold text-[24px]">{item.title}</div>
                                                    <div>{item.content}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                            }
                        </div>}
                    </FallInPlace>

                    <FallInPlace>
                        <div className="w-full mt-[90px]">
                            <div className="font-bold text-center mb-[10px] text-[30px]">The Team</div>
                            <div className="text-center">With the software engineering support of onshore, nearshore and offshore teams, our development capabilities are as broad as they are deep. Our full-stack teams provide the front-end and back-end support your software projects deserve.</div>
                            <div className="mt-[20px]">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px]">
                                    {
                                        team.map((item, index) => (
                                            <div key={index} className="border-[1px] rounded-lg flex w-full h-full flex-col items-center justify-center" style={{ height: '500px' }}>
                                                <Image
                                                    src={`/static/images/team/${index + 1}.png`}
                                                    width={130}
                                                    height={130}
                                                    className="rounded-full"
                                                    alt="back image"
                                                />
                                                <div className="font-bold text-[30px] mt-[30px]">{item.name}</div>
                                                <div className="text-[20px]">{item.role}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </FallInPlace>

                    <FallInPlace>
                        <div className="flex flex-col mt-[60px] items-center border-[1px] p-10 rounded-xl mb-[60px]">
                            <div className="font-bold text-center mb-[10px] text-[30px]">We combine code with creativity</div>
                            <button className="mt-[30px] border-[1px] w-[300px] p-3 rounded-full bg-[#4353ff]">Tell Us About Your Next Project</button>
                        </div>
                    </FallInPlace>

                </Container>
            </Box >
        </Box>
    )
}

export default Page;