import * as React from "react";
import {
    Container,
    Box,
    Icon,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from "@chakra-ui/react";
import { FallInPlace } from "components/motion/fall-in-place";
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    FiArrowRight,
    FiCheckCircle
} from "react-icons/fi";
import { BackgroundGradient } from "components/gradients/background-gradient";

import { ButtonLink } from "components/button-link/button-link";

const Service = ({
    first,
    second,
    third,
    forth,
    fifth,
    sixth,
    seventh,
    eighth,
    nineth,
    tenth
}) => {
    // const first = {
    //     title: <div className="font-extrabold text-[48px] lg:text-[58px] text-center mb-[20px]">
    //         Software Development Staffing Company
    //     </div>,
    //     content: <div className="mb-[80px] text-[20px] text-center">
    //         One of the biggest challenges in software development (and IT) is finding the skilled, experienced professionals necessary to see your project to completion. There’s a talent shortage in the tech world, and recruiting takes both time and money.
    //         That’s why many organizations are turning to software development staffing companies to fulfill their staffing needs.
    //     </div>
    // }

    // const second = {
    //     title: "The Benefits of Hiring a Software Development Staffing Company",
    //     content: "Hiring a software development staffing company yields multiple benefits simultaneously:"
    // }

    // const third = [
    //     {
    //         title: "",
    //         description: "",
    //         content:
    //             [
    //                 {
    //                     title: "Save time",
    //                     content: 'First, a staffing agency will save you time. Rather than investing countless hours into a recruiting strategy that may or may not pay off, you can develop a recruiting strategy with a staffing firm and let them take care of most of the grunt work. Instead, you can focus your efforts where they’re needed most.'
    //                 },
    //                 {
    //                     title: "Save money",
    //                     content: 'It may seem counterintuitive, since you’ll typically need to pay for staffing services, but a software development staffing company can help you save money. You’ll face less overhead, since you’ll be able to thrive with fewer full-time, onsite software engineers, and you can reduce overall labor costs dramatically.'
    //                 },
    //                 {
    //                     title: "Get access to top talent",
    //                     content: 'At the same time, a software development staffing company helps you get access to some of the best talent in the industry. Whatever skill sets you’re looking for, you’ll be able to find worthy candidates who give you what you need. Depending on the complexity of the project you’re working on, this may be the best way to find the talent you require.'
    //                 },
    //                 {
    //                     title: "Cover all your skilled needs",
    //                     content: 'A software development staffing company will have access to people with complex skills and experience in fields like ML, IoT, the blockchain, AR, VR, and more. You’ll also get access to candidates with specific experience in various industries, like healthcare, manufacturing, and real estate.'
    //                 }
    //             ]
    //     },
    // ]

    // const forth = [
    //     {
    //         title: "Mobile Development Services",
    //         description: "Whatever your mobile app development needs are, we have services that can help you.",
    //         content: [
    //             "Mobile strategy and consulting.",
    //             "Existing mobile app redesign.",
    //             "Cross-platform development.",
    //             "Cloud application support.",
    //             "iOS and Android development support."
    //         ]
    //     }
    // ]

    // const fifth = {
    //     title: "How to Choose a Software Development Staffing Company",
    //     description: [
    //         "Of course, not all software development staffing companies are created equal.",
    //         "When searching for a potential staffing partner, make sure you consider:"
    //     ],
    //     content: [
    //         {
    //             title: "Experience",
    //             content: "Valuable IT and software development staffing companies have plenty of experience. They understand the core needs of most of their clientele, and can anticipate the usual barriers to success."
    //         },
    //         {
    //             title: "Speed",
    //             content: "Even if your project isn’t time-sensitive, you’ll still want a partner who can get you the staff members you need as quickly as possible. That way, you can get results faster—and potentially start generating revenue faster."
    //         },
    //         {
    //             title: "Access",
    //             content: "What kinds of talent is this staffing agency able to secure? Do they have access to people in a variety of different niches? What are your needs?"
    //         },
    //         {
    //             title: "Communication",
    //             content: "A good staffing partner will collaborate with you, and collaboration demands effective communication. Is it easy to talk with this partner, and discuss your vision?"
    //         }
    //     ]
    // }

    // const sixth = {
    //     title: "How to Choose a Software Development Staffing Company",
    //     description: [
    //         "Of course, not all software development staffing companies are created equal.",
    //         "When searching for a potential staffing partner, make sure you consider:"
    //     ],
    //     content: [
    //         {
    //             title: "Experience",
    //             content: "Valuable IT and software development staffing companies have plenty of experience. They understand the core needs of most of their clientele, and can anticipate the usual barriers to success."
    //         },
    //         {
    //             title: "Speed",
    //             content: "Even if your project isn’t time-sensitive, you’ll still want a partner who can get you the staff members you need as quickly as possible. That way, you can get results faster—and potentially start generating revenue faster."
    //         },
    //         {
    //             title: "Access",
    //             content: "What kinds of talent is this staffing agency able to secure? Do they have access to people in a variety of different niches? What are your needs?"
    //         },
    //         {
    //             title: "Communication",
    //             content: "A good staffing partner will collaborate with you, and collaboration demands effective communication. Is it easy to talk with this partner, and discuss your vision?"
    //         }
    //     ]
    // }

    // const seventh = [
    //     {
    //         title: "Understanding",
    //         content: "Background details vision & values target personas Stakeholder insights"
    //     },
    //     {
    //         title: "Research & Discovery",
    //         content: "Customer research Competitive analysis Expert audits & insights Current market Positioning"
    //     },
    //     {
    //         title: "Strategy",
    //         content: "Story & personality Market opportunities Positioning & messaging Creative brief development"
    //     },
    //     {
    //         title: "Creative",
    //         content: "Naming Logo development Graphics standards Verify function Messaging framework"
    //     },
    //     {
    //         title: "Deliver",
    //         content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
    //     }
    // ]

    // const eighth = {
    //     title: "Contact DEV.co",
    //     content: "Are you interested in developing a mobile app for your business? Or do you need advice on your current mobile technology? Contact DEV.co today for a free quote, or a free consultation!"
    // }

    return (
        <Box>
            <Box position="relative" overflow="hidden" className="mt-[-50px]">
                <BackgroundGradient height="80%" zIndex="-1" />
                <Container maxW="container.xl" pt={{ base: 40, lg: 60 }}>
                    <div className=" flex flex-col items-center">
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
                        {second && <Container maxW="container.xl" py="50">
                            <div className="flex flex-col sm:flex-row justify-start items-center p-8 border-[1px] rounded-lg gap-5 w-full">
                                <div className="w-full sm:w-1/2">
                                    <div className="font-bold text-[22px] sm:text-[30px]">
                                        {second.title}
                                    </div>
                                    {
                                        second.description.map((item, index) => (
                                            <div key={index} className="text-sm mt-[10px]">
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="w-full sm:w-1/2">
                                    {
                                        second.content.map((item, index) => (
                                            <div key={index} className="text-sm mt-[10px]">
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Container>}
                    </FallInPlace>

                    {/* Third */}
                    <FallInPlace>
                        {third && <div className="w-full">
                            {
                                third.map((item, index) => {
                                    return (
                                        <div className="w-full mt-[40px]" key={index}>
                                            <div className="font-bold text-center mb-[10px] text-[30px]">{item.title}</div>
                                            <div className="text-center mb-[10px]">
                                                {
                                                    item.description.map((it, id) => (
                                                        <div key={id}>
                                                            {
                                                                it
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {
                                                    item.content.map((it, id) => (
                                                        <div key={id} className="flex flex-col text-center sm:text-start border-[1px] rounded-lg gap-2 p-5">
                                                            <div className="font-bold text-[18px]">
                                                                {it.title}
                                                            </div>
                                                            <div className="text-sm">
                                                                {it.content}
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

                    {/* Forth */}
                    <FallInPlace>
                        {forth && <div className="w-full mt-[90px]">
                            {
                                forth.map((item, index) => {
                                    return (
                                        <div key={index} className="w-full mt-[40px]">
                                            <div className="font-bold text-center mb-[10px] text-[30px]">{item.title}</div>
                                            <div className="text-center mb-[10px]">{item.description}</div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[20px]">
                                                {
                                                    item.content.map((it, id) => (
                                                        <div key={id} className="flex text-center items-center sm:text-start gap-4">
                                                            <div><FiCheckCircle size={28} /></div>
                                                            <div className="font-bold text-[18px] text-center">
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

                    {/* Fifth */}
                    <FallInPlace>
                        {fifth && <div className="w-full mt-[90px]">
                            {
                                <>
                                    <div className="font-bold text-center mb-[10px] text-[30px]">{fifth.title}</div>
                                    <div>{
                                        fifth.description.map((item, index) => (
                                            <div key={index} className="text-center">{item}</div>
                                        ))
                                    }</div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {
                                            fifth.content.map((item, index) => (
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

                    {/* Sixth */}
                    <FallInPlace>
                        {sixth && <div className="w-full mt-[90px]">
                            {
                                <>
                                    <div className="font-bold text-center mb-[10px] text-[30px]">{sixth.title}</div>
                                    <div>{
                                        sixth.description.map((item, index) => (
                                            <div key={index} className="text-center">{item}</div>
                                        ))
                                    }</div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {
                                            sixth.content.map((item, index) => (
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

                    {/* Seventh */}
                    {
                        seventh && <div className="w-full mt-[90px]">
                            {
                                seventh.map(item => (
                                    <>
                                        <div className="hidden sm:block font-bold text-center mb-[10px] text-[30px]">{item.title}</div>
                                        <div className="text-center mb-[10px]">{item.description}</div>

                                        <div>
                                            {
                                                item.content.map((it, id) => (
                                                    <div key={id}>
                                                        {
                                                            it
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    }

                    {/* Eighth */}
                    <FallInPlace>
                        {eighth && <div className="w-full mt-[90px]">
                            {
                                <>
                                    <div className="hidden sm:block font-bold text-center mb-[10px] text-[30px]">Our Development Process</div>

                                    <div className="hidden md:grid md:grid-cols-5 gap-8">
                                        {
                                            eighth.map((item, index) => (
                                                <div key={index} className="flex flex-col border-[1px] px-4 py-10 rounded-lg gap-2 min-h-[200px]">
                                                    <div className="font-bold" >
                                                        {
                                                            item.title
                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            item.content
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                            }
                        </div>}
                    </FallInPlace>

                    {/* Nineth */}
                    <FallInPlace>
                        {nineth && <div className="flex flex-col mt-[60px] items-center border-[1px] p-10 rounded-xl mb-[60px]">
                            <div className="font-bold text-center mb-[10px] text-[30px]">{nineth.title}</div>
                            {
                                nineth.content.map((item, index) => (
                                    <div key={index} className="text-center">{item}</div>
                                ))
                            }
                            <button className="mt-[30px] border-[1px] w-[300px] p-3 rounded-full bg-[#4353ff]">Tell Us About Your Next Project</button>
                        </div>}
                    </FallInPlace>

                    {/* Tenth */}
                    <FallInPlace>
                        {tenth && <div>
                            <div className="text-center font-bold text-[20px] sm:text-[30px]">{tenth.title}</div>
                            <div className="text-mute mt-[15px] text-center">{tenth.description}</div>

                            <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" minWidth="100%" className="mt-[20px] mb-[60px]">
                                {
                                    tenth.content.map((item, index) => (
                                        <AccordionItem key={index}>
                                            <AccordionButton
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                p={4}>
                                                <Text fontSize="md">{item.title}</Text>
                                                <ChevronDownIcon fontSize="24px" />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                {item.content}
                                            </AccordionPanel>
                                        </AccordionItem>
                                    ))
                                }
                            </Accordion>
                        </div>}
                    </FallInPlace>

                </Container>
            </Box >
        </Box>
    )
}

export default Service;