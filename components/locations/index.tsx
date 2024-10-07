import { useEffect, useState } from "react";
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
} from "react-icons/fi";
import { BackgroundGradient } from "components/gradients/background-gradient";

import { ButtonLink } from "components/button-link/button-link";
import Image from "next/image"
import Link from "next/link";
import { getImageURL } from "@/utils/getDownloadURL";

const Technology = ({
    first,
    second,
    third,
    forth,
    fifth,
    sixth,
    seventh,
    location
}) => {
    const [imageURL, setImageURL] = useState<string | null>("");

    useEffect(() => {
        const fetchImageURL = async () => {
          const url = await getImageURL(`loc/${location}.png`);
          setImageURL(url);
        };
    
        fetchImageURL();
      }, []);

    // const location = ""
    // const first = {
    //     title: "",
    //     content: []
    // }

    // const second = {
    //     title: "",
    //     description: [""],
    //     content: [
    //         "",
    //     ],
    // }

    // const third = [
    //     {
    //         title: "",
    //         content: [
    //             "",
    //         ],
    //         other: [],
    //         additional: ""
    //     },
    // ]

    // const forth = {
    //     title: "",
    //     content: [
    //         "",
    //     ]
    // }

    // const fifth = [
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
    //         title: "Deliver & Integrate",
    //         content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
    //     }
    // ]

    // const sixth = {
    //     title: "",
    //     content: [
    //         "",
    //     ]
    // }

    // const seventh = {
    //     title: "",
    //     description: "",
    //     content: [
    //         {
    //             title: "",
    //             content: [
    //                 "",
    //             ]
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
                        <div className="flex justify-center p-3 mt-[30px]">
                            <div className="flex justify-center p-3 border rounded-lg">
                                <Image
                                    src={imageURL || ""}
                                    width={600}
                                    height={800}
                                    style={{ objectFit: 'cover', width: '800px', height: '500px' }}
                                    className="rounded-lg"
                                    alt="Hello"
                                />

                            </div>
                        </div>

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

                    <FallInPlace>
                        {third &&
                            third.map((item, index) => {
                                return <div key={index} className="flex flex-col sm:flex-row my-[40px]">
                                    <div className="font-bold text-[30px] w-full  sm:w-[40%] text-center">{item.title}</div>
                                    <div className="flex flex-col w-full sm:w-[60%]">
                                        {
                                            item.content.map((it, id) => (
                                                <div key={id} className="mt-[10px]">{it}</div>
                                            ))
                                        }
                                        {
                                            item.other.map((it, id) => (
                                                <li key={id} className="mt-[10px]">{it}</li>
                                            ))
                                        }
                                        <div>{item.additional}</div>
                                    </div>
                                </div>
                            })
                        }
                    </FallInPlace>

                    <FallInPlace>
                        {
                            forth &&
                            <div className="w-full flex-col items-center">
                                <div className="font-bold text-center mb-[10px] text-[30px]">{forth.title}</div>
                                <div className="w-full flex flex-col items-center">
                                    {
                                        forth.content.map((item, index) => (
                                            <div key={index} className="text-[20px] mt-[10px] text-center">
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </FallInPlace>

                    <FallInPlace>
                        {sixth && <div className="w-full mt-[90px]">
                            {
                                <>
                                    <div className="hidden sm:block font-bold text-center mb-[10px] text-[30px]">Our Development Process</div>

                                    <div className="hidden md:grid md:grid-cols-5 gap-8">
                                        {
                                            fifth.map((item, index) => (
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

                    <FallInPlace>
                        {sixth && <div className="flex flex-col mt-[60px] items-center border-[1px] p-10 rounded-xl mb-[60px]">
                            <div className="font-bold text-center mb-[10px] text-[30px]">{sixth.title}</div>
                            {
                                sixth.content.map((item, index) => (
                                    <div key={index} className="text-center">{item}</div>
                                ))
                            }
                            <Link href="/contact" className="mt-[30px] border-[1px] w-[300px] p-3 rounded-full bg-[#4353ff] text-center">Contact US</Link>
                        </div>}
                    </FallInPlace>

                    {/* Fifth FAQ */}
                    <FallInPlace>
                        {seventh && <div>
                            <div className="text-center font-bold text-[20px] sm:text-[30px]">{fifth.title}</div>
                            <div className="text-mute mt-[15px] text-center">{sixth.description}</div>

                            <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" minWidth="100%" className="mt-[20px] mb-[60px]">
                                {
                                    seventh.content.map((item, index) => (
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
                                                {item.content.map((it, id) => (<div key={id} className="mt-[10px]">
                                                    {it}
                                                </div>))}
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