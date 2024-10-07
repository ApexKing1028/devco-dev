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


const Contact = () => {
    return <Box>
        <Box position="relative" overflow="hidden" className="mt-[-50px]">
            <BackgroundGradient height="80%" zIndex="-1" />
            <Container maxW="container.xl" pt={{ base: 40, lg: 40 }}>
                <div className=" flex flex-col items-center">
                    <div className="font-extrabold text-[48px] lg:text-[58px] text-center mb-[20px]">
                        Contact US
                    </div>

                    <FallInPlace>
                        <div className="flex gap-3 mt-[20px]">
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
                    <Container maxW="container.xl" py="5">
                        <div>
                            <div className="flex flex-col justify-center items-center sm:flex-row w-full sm:justify-between gap-3">
                                <div className="flex flex-col items-center">
                                    <div className="font-bold mb-[10px]">Seattle, WA</div>
                                    <div>1425 Broadway 2269 Seattle, WA 98112</div>
                                </div>

                                <div className="flex flex-col items-center mt-[10px]">
                                    <div className="font-bold mb-[10px]">West Palm Beach, FL</div>
                                    <div className="text-center sm:text-left">700 S Rosemary Ave Suite 204 West Palm Beach, FL 33401</div>
                                </div>

                                <div className="font-bold mt-[10px]">
                                    +1(206)438-9789
                                </div>
                            </div>

                            <div className="mt-[30px] border-[1px] rounded-lg flex justify-center w-full py-[100px]">
                                <div className="flex flex-col p-4">
                                    <div className="text-center font-bold text-[30px]">Let&apos;s talk</div>

                                    <div>I&apos;d like to speak to DEV.CO about possibly working together</div>

                                    <div className="flex flex-row gap-4 mt-[30px]">
                                        <input type="text" className="p-3 rounded-lg focus:border-[0px]" placeholder="First Name" />
                                        <input type="text" className="p-3 rounded-lg focus:border-[0px]" placeholder="Last Name" />
                                    </div>

                                    <div className="mt-[30px] w-full">
                                        <input type="text" className="p-3 rounded-lg focus:border-[0px] w-full" placeholder="Email" />
                                    </div>

                                    <div className="mt-[30px] w-full">
                                        <input type="text" className="p-3 rounded-lg focus:border-[0px] w-full" placeholder="Phone" />
                                    </div>

                                    <div className="mt-[30px] w-full">
                                        <input type="text" className="p-3 rounded-lg focus:border-[0px] w-full" placeholder="How can we help?" />
                                    </div>

                                    <div className="mt-[30px] w-full">
                                        <textarea className="p-3 rounded-lg focus:border-[0px] w-full" placeholder="Tell us more about your needs" rows={7} />
                                    </div>


                                    <button className="mt-[30px] border-[1px] w-[140px] p-3 rounded-lg bg-[#4353ff]">Submit</button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </FallInPlace>
            </Container>
        </Box>
    </Box>
}

export default Contact