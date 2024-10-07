import * as React from "react";

import { FallInPlace } from "components/motion/fall-in-place";
import {
    Container,
    Box,
    Icon,
} from "@chakra-ui/react";

import {
    FiArrowRight,
} from "react-icons/fi";

import { BackgroundGradient } from "components/gradients/background-gradient";
import { Image } from "@chakra-ui/react";
import { ButtonLink } from "components/button-link/button-link";
import Link from "next/link";
import { locations } from "@/data/locations";

const Page = () => {
    const first = {
        title: "Locations We Serve",
        content: []
    }

    const second = {
        title: "Contact Us Today!",
        content: [
            "We’d love for you to work with us and take your online presence to the next level. To learn more about how you can work with us, click here to speak to a member of our team."
        ]
    }

    const third = [
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

   

    return (
        <Box>
            <Box position="relative" overflow="hidden" className="mt-[-50px]">
                <BackgroundGradient height="80%" zIndex="-1" />
                <Container maxW="container.xl" pt={{ base: 36, lg: 36 }}>
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
                        <div className="w-full mt-[90px]">
                            <div className="mt-[20px]">
                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mt-[20px] p-8">
                                    {
                                        locations.map((item, index) => (
                                            <Link href={`${item.link}`} key={index} className="border-[1px] rounded-lg flex w-full h-full flex-col items-center justify-center" style={{ height: '400px' }}>
                                                <Image
                                                    src={`/static/images/location/${item.location}.png`}
                                                    width={130}
                                                    height={130}
                                                    className="rounded-full"
                                                    alt="back image"
                                                />
                                                <div className="font-bold text-[20px] mt-[20px] text-center">{item.location}</div>
                                                <div className="text-[20px] text-center">{item.name}</div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </FallInPlace>

                    <FallInPlace>
                        {second && <div className="flex flex-col mt-[60px] items-center border-[1px] p-10 rounded-xl mb-[60px]">
                            <div className="font-bold text-center mb-[10px] text-[30px]">{second.title}</div>
                            {
                                second.content.map((item, index) => (
                                    <div key={index} className="text-center">{item}</div>
                                ))
                            }
                            <button className="mt-[30px] border-[1px] w-[300px] p-3 rounded-full bg-[#4353ff]">Tell Us About Your Next Project</button>
                        </div>}
                    </FallInPlace>

                    <FallInPlace>
                        {third && <div className="w-full mt-[90px]">
                            {
                                <>
                                    <div className="hidden sm:block font-bold text-center mb-[10px] text-[30px]">Our Development Process</div>

                                    <div className="hidden md:grid md:grid-cols-5 gap-8">
                                        {
                                            third.map((item, index) => (
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

                </Container>
            </Box >
        </Box>
    )
}

export default Page;