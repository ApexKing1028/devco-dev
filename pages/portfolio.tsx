import * as React from "react";
import {
    Container,
    Box,
    Icon,
} from "@chakra-ui/react";
import { FallInPlace } from "components/motion/fall-in-place";
import {
    FiArrowRight,
} from "react-icons/fi";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { ButtonLink } from "components/button-link/button-link";
import Image from "next/image"

const Technology = () => {
    const devs = [
        "Law.co",
        "Groupon",
        "Emoov",
        "Mobile Applications",
        "Monumetric",
        "Pepsi",
        "Salesforce",
        "Staples",
        "Ornament Anchor",
        "Leap",
        "PEL",
        "Trading Platform"
    ]

    const designs = [
        "Taser.com",
        "GetShowing.com",
        "GlobalListings.com",
        "RealPatriotic.com",
        "BuyQBall.com",
        "DozierLaw.com",
        "Corbanone.com",
        "Invisawear.com",
        "Mackey Mechanical",
        "HMGInterests.com",
        "Light-Street.com",
        "United Final Expense Services",
        "NGU Sports Lighting",
        "NightCapit.com",
        "Bike.co",
        "Kiierr",
        "Wallace Jordan",
        "KRLawFirm.co",
        "TheListingREM",
        "Shave.net"
    ]


    return (
        <Box>
            <Box position="relative" overflow="hidden" className="mt-[-50px]">
                <BackgroundGradient height="80%" zIndex="-1" />
                <Container maxW="container.xl" pt={{ base: 20, lg: 28 }}>
                    <div className=" flex flex-col items-center">
                        <div className="font-extrabold text-[48px] lg:text-[58px] text-center mb-[20px]">
                            Portfolios
                        </div>

                        <FallInPlace>
                            <div className="flex gap-3 mt-[10px]">
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
                        <div className="flex flex-col items-center mt-[40px]">
                            <div className="text-[40px] font-bold">Software Development Work Portfolio</div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px]">
                                {
                                    devs.map((item, index) => (
                                        <div key={index} className="rounded-lg overflow-hidden flex flex-col items-center justify-center" style={{ height: '500px' }}>
                                            <Image
                                                src={`/static/images/dev/${item}.jpg`}
                                                width={600}
                                                height={800}
                                                style={{ objectFit: 'cover', width: '400px', height: '500px', filter: 'brightness(0.6)' }}
                                                alt="Hello"
                                            />
                                            <div style={{ position: 'absolute' }} className="flex flex-col items-center">
                                                <div className="font-bold text-[30px]">{item}</div>
                                                <button className="bg-[#4353ff] p-3 rounded-lg mt-[20px]">DOWNLOAD CASE STUDY</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </FallInPlace>

                    <FallInPlace>
                        <div className="flex flex-col items-center mt-[120px]">
                            <div className="text-[40px] font-bold">Software Development Work Portfolio</div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px]">
                                {
                                    designs.map((item, index) => (
                                        <div key={index} className="rounded-lg overflow-hidden flex flex-col items-center justify-center" style={{ height: '500px' }}>
                                            <Image
                                                src={`/static/images/design/${item}.jpg`}
                                                width={600}
                                                height={800}
                                                style={{ objectFit: 'cover', width: '400px', height: '500px', filter: 'brightness(0.6)' }}
                                                alt="Image"
                                            />
                                            <div style={{ position: 'absolute' }} className="flex flex-col items-center">
                                                <div className="font-bold text-[30px]">{item}</div>
                                                <button className="bg-[#4353ff] p-3 rounded-lg mt-[20px]">DOWNLOAD CASE STUDY</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </FallInPlace>

                </Container>
            </Box >
        </Box>
    )
}

export default Technology;