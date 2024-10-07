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
                        Careers
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

                        <div className="flex flex-col sm:flex-row justify-start items-center p-8 border-[1px] rounded-lg gap-5 w-full">
                            <div className="w-full sm:w-1/2">
                                <div className="font-bold text-[22px] sm:text-[30px]">
                                    Software Development Careers
                                </div>
                                <div className="text-sm mt-[10px]">
                                    At DEV.co, we strive to create an environment where the self-motivated, autonomous, entrepreneurial software engineer can truly thrive.
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2">
                                <div className="text-sm mt-[10px]">
                                    If you are the type of software engineer who thrives in a challenging environment where new opportunities mean new areas for future career growth and development, then joining the DEV.co Team may be your next best career move.
                                </div>
                                <div className="text-sm mt-[10px]">
                                    As a team, we espouse the virtues of integrity, creativity, quality and in challenging the software engineering status quo. Above all, taking care of our employees is at the pinnacle of what we do as a company.
                                </div>
                                <div className="text-sm mt-[10px]">
                                    We work on extremely exciting and interesting projects in a dynamic, fun and fast-paced environment. If this sounds like a fit for you, please get in touch via the form at right.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[30px] border-[1px] rounded-lg flex justify-center py-[40px]">
                                <div className="flex flex-col p-4 w-full sm:max-w-lg">

                                    <div className="flex flex-row gap-4 mt-[30px] w-full">
                                        <input type="text" className="p-3 rounded-lg focus:border-[0px] w-1/2" placeholder="First Name" />
                                        <input type="text" className="p-3 rounded-lg focus:border-[0px] w-1/2" placeholder="Last Name" />
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

                                    <div className="w-full">
                                        <button className="mt-[30px] border-[1px] w-[240px] p-3 rounded-lg bg-[#4353ff]">Upload Resume/CV</button>
                                    </div>

                                    <div className="mt-[30px] w-full">
                                        <textarea className="p-3 rounded-lg focus:border-[0px] w-full" placeholder="Additional Info" rows={7} />
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