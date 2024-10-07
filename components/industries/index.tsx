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

const Technology = ({
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
    //     title: "",
    //     content: [
    //         "",
    //     ]
    // }

    // const second = {
    //     title: "",
    //     description: [""],
    //     content: [
    //         "",
    //     ]
    // }

    // const third = [
    //     {
    //         title: "",
    //         description: [],
    //         content:
    //             [
    //                 {
    //                     title: "",
    //                     content: ""
    //                 },
    //             ]
    //     },
    // ]

    // const forth = [
    //     {
    //         title: "",
    //         description: "",
    //         content: [
    //            "",
    //         ]
    //     }
    // ]

    // const fifth = {
    //     title: "",
    //     description: [
    //         "",
    //     ],
    //     content: [
    //         {
    //             title: "",
    //             content: ""
    //         },
    //     ]
    // }

    // const sixth = {
    //     title: "",
    //     description: [
    //         "",
    //     ],
    //     content: [
    //         {
    //             title: "",
    //             content: ""
    //         },
    //     ]
    // }

    // const seventh = [
    //     {
    //         title: "",
    //         content: [
    //             "",
    //         ]
    //     }
    // ]

    // const eighth = [
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

    // const nineth = {
    //     title: "",
    //     content: [
    //         "",
    //     ]
    // }

    // const tenth = {
    //     title: "",
    //     description: "",
    //     content: [
    //         {
    //             title: "",
    //             content: ""
    //         },
    //     ]
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

export default Technology;