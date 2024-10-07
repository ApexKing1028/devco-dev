import * as React from "react";
import type { NextPage } from "next";
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
import {
  Highlights,
  HighlightsItem,
} from "components/highlights";
import { Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

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

const Home: NextPage = () => {
  return (
    <Box>
      <Box position="relative" overflow="hidden" className="mt-[-50px]">
        <BackgroundGradient height="80%" zIndex="-1" />
        <Container maxW="container.xl" pt={{ base: 40, lg: 60 }}>
          <div className=" flex flex-col items-center">
            <div className="font-extrabold text-[48px] lg:text-[58px] text-center mb-[20px]">
              Software Development Company
            </div>

            <div className="mb-[80px] text-[20px] text-center">
              We design, develop & deploy across the tech stack, maximizing your software development project team with expert technical talent. Get in touch regarding your next software or web development project!
            </div>

            <FallInPlace >
              <div className="flex gap-3">
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
        </Container>
        <FallInPlace>
          <Container maxW="container.xl" pt={{ base: 40, lg: 30 }} className="flex flex-col gap-5">
            <div className="border-[1px] w-full p-8 rounded-lg gap-2 flex flex-col">
              <div className="text-[20px] font-bold">Design</div>
              <div>
                The best custom software development companies include the best UX design. The best UX starts with strategic planning. By aligning our digital transformation solutions with your vision and goals, we become a true partner, starting at UX/UI design. The best software development firms start their web development projects at the design phase. Whether you are looking for mobile app development or web development, we provide support for all of your custom software development projects, ensuring beautiful interface and design across the software development cycle.
              </div>
            </div>

            <div className="border-[1px] w-full p-8 rounded-lg gap-2 flex flex-col">
              <div className="text-[20px] font-bold">Develop</div>
              <div>
                From product design mock-ups & MVP sprints to product iteration & QA (quality assurance) testing, our expert project management team and software development services have you covered. Ground-up software development is more than using open source code or run-of-the-mill website templates. It&apos;s about understanding the user journey and strategic end-goal initiatives of our clients and developing full-stack software solutions that improve functionality and over deliver on project requirements.
              </div>
            </div>

            <div className="border-[1px] w-full p-8 rounded-lg gap-2 flex flex-col">
              <div className="text-[20px] font-bold">Deploy</div>
              <div>
                Delivery of a product ready for “prime time” also means you have the custom software development support team to shepherd you through training, upgrades and feature add-ons. Software deployment is only the beginning of a journey.
              </div>
            </div>
          </Container>

        </FallInPlace>
        {/* Highlights */}

        {/* Web Development & Software Engineering */}
        <Container maxW="container.xl" py="50">
          <div className="">
            <div className="font-bold text-[30px] text-center">
              Web Development & Software Engineering
            </div>
            <div>
              <div className="text-mute">
                <div className="mt-[10px]">
                  <Text color="muted" fontSize="xl">
                    As a premier software development firm, we provide custom engineering support of onshore, nearshore (including Latam software devs) and offshore software development teams.
                  </Text>
                </div>
                <div className="mt-[15px]">
                  <Text color="muted" fontSize="xl">
                    We adhere to the preferred development methodology, assigning tasks to our local engineers as well as remote, agile software development teams, using advanced project management tools. This ensures we maintain a rigid focus on our enterprise software development process. In this way, our business processes ensure our software engineering team can deliver digital solutions that meet and exceed client expectations that are aligned with client goals.
                  </Text>
                </div>
                <div>
                  <Text color="muted" fontSize="xl">
                    Our engineering capabilities are as broad as they are deep. Our full-stack dedicated development team provides the front-end and back-end support your software projects deserve.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container maxW="container.xl" py="50" overflow="hidden">
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

        {/* Services */}
        <Container maxWidth="container.xl" py="50" className="mt-[20px]">
          <div className="font-bold text-[30px] text-center">Innovative Software Development Services</div>
          <div className="mt-[30px] p-8 border-[1px] rounded-xl">
            <div className="font-bold text-md">
              At DEV.co, we provide full-stack custom software development solutions to businesses small and large
            </div>

            <div>
              As a custom software dev agency, we cover the full breadth of custom solutions by developing websites, mobile apps, custom portals, billing solutions, artificial intelligence, SaaS, big data and other cloud-based applications.
            </div>

            <div className="font-bold mt-[20px] text-md">
              12+ years as a software development company
            </div>
            <div>
              For over a decade, we have developed a proven, repeatable system for delivering quality code. We provide solutions across the software development life cycle, ensuring we out-deliver above other custom software development firms on the market.
            </div>
          </div>

          <div className="mt-[30px] p-8 border-[1px] rounded-xl">
            <div className="font-bold text-md">
              Mobile Application w/3M+ downloads
            </div>

            <div>
              Built for Android & Apple iOS
            </div>

            <div className="font-bold text-md mt-[20px]">
              Fortune 100 Retailer Manages $1B+ in Sales
            </div>
            <div>
              Custom delivery management for affiliate vendors
            </div>
          </div>

          <div className="mt-[30px] p-8 border-[1px] rounded-xl">
            <div className="font-bold text-md">
              Strategic software development support
            </div>

            <div>
              As an end-to-end service provider, we deliver in-depth strategic support and custom software developer services to corporations, government entities and small/medium businesses across the globe, ensuring your digital success.
            </div>

            <div className="font-bold mt-[20px] text-md">
              We aim to deliver on time and under budget
            </div>
            <div>
              Our experienced, dedicated team provides the deep end-to-end engineering talent and knowledge of programming languages to deliver the right data analytics, strategic roadmap and maintenance services required to complete your entire project at or below project cost.
            </div>
          </div>
        </Container>

        {/* Clients */}
        <Container maxWidth="container.xl" py="50">
          <div className="flex flex-col sm:flex-row justify-center sm:items-center">
            <div className="flex flex-col">
              <div className="text-[30px] sm:text-[50px] font-bold">Our Web Development Clients</div>
              <div className="text-[18px] sm:text-[20px]">Our custom dev services are trusted software companies, small businesses and Fortune 500 companies alike</div>
            </div>

            <div>
              <div className="flex items-center gap-5 pb-[30px]">
                <div className="flex flex-col">
                  <div className="font-bold text-[40px] sm:text-[50px]">210</div>
                  <div className="text-[20px]">Website Development</div>
                </div>

                <div className="text-sm sm:text-[20px] leading-7">
                  Our web development team builds dozens of websites monthly, integrating the right technology stack with cross platform applications for the best possible user experience to your web apps
                </div>
              </div>

              <hr className="pt-[10px]" />

              <div className="flex items-center gap-5 pb-[30px]">
                <div className="flex flex-col">
                  <div className="font-bold text-[40px] sm:text-[50px]">156</div>
                  <div className="text-[20px]">Mobile App Development</div>
                </div>

                <div className="text-sm sm:text-[20px] leading-7">
                  Over 150 custom developed, including one mobile app (with 3M+ downloads) for Android & iOS
                </div>
              </div>

              <hr className="pt-[10px]" />

              <div className="flex items-center gap-5 pb-[30px]">
                <div className="flex flex-col">
                  <div className="font-bold text-[40px] sm:text-[50px]" >24</div>
                  <div className="text-[20px]">Custom Platform Development</div>
                </div>

                <div className="text-sm sm:text-[20px] flex leading-7">
                  Custom developed corporate and customer-facing platform projects, including custom integrated analytics for analyzing site usage for big data consulting.
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Custom Software Development */}
        <Container maxWidth="container.xl" py="50">
          <div className="text-center font-bold text-[20px] sm:text-[30px]">A Custom Software Development Company Engineering Innovation</div>
          <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" minWidth="100%" className="mt-[20px]">
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">Vetted Software Developers</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  We only engage the top 1% of vetted software engineering talent. Our software engineers and custom software project developers come fully-vetted from years of active project-based experience, including deliverables and glowing reviews from past client engagements. We also utilize a proven candidate filtration process for sifting through thousands of active software developers worldwide, solidifying on those with the ample experience across the tech stack using live projects, engineering exams, coding challenge reports and pre-hire interviews providing you best talent available. In this way, we work as a software development partner and not just a vendor.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">Dev Staff Augmentation</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Whether you need temporary staffing support for a small project or a complete, dedicated team managed by senior developers for a dedicated, long-term engagement with cross platform applications, our IT and software development staffing solutions are there to assist throughout the process. We use sophisticated artificial intelligence (AI) in sourcing the best software engineering talent for your custom development projects, ensuring a precise match between the engineering candidates&apos; industry experience and previous performance and your unique project requirements.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">Dedicated Dev Teams</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Depending on the nature and complexity of your project, when you work with a dev team, you engage with the right software development team for your project or staffing needs. Regardless of your software project&apos;s complexity, our engineering professionals will seamlessly integrate with your in-house team to provide a custom roadmap and delivery timeline for your project&apos;s ultimate success. This value-added approach ensures you are set up for ultimate software development success from day one and that you receive the support you need for your custom product, ensuring you deliver on your project goals.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>

        {/* Combining Code */}
        <Container maxWidth="container.xl" py="50">
          <div className="w-full border-[1px] rounded-lg p-[40px] flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full sm:1-1/2 justify-center">
              <div className="font-bold text-[40px]">Software Developers Combining Code + Creativity</div>
              <div className="text-mute text-[20px] mt-[20px]">View our company&apos;s portfolio and engage with our sales team. With our white label program, we offer our engineering consulting and software dev solutions to other top software development companies.</div>
              <button className="mt-[30px] border-[1px] w-[300px] p-3 rounded-full bg-[#4353ff]">Tell Us About Your Next Project</button>
            </div>
            <div className="w-full sm:1-1/2">
              <Image
                src="/static/images/programmer.png"
                width={400}
                height={400}
                alt="Theme logo"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </Container>

        {/* FAQ */}
        <Container maxWidth="container.xl" py="50">
          <div className="text-center font-bold text-[20px] sm:text-[30px]">Frequently Asked Questions (FAQs)</div>
          <div className="text-mute mt-[15px] text-center">Here are some of the most common questions regarding our software dev services</div>

          <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" minWidth="100%" className="mt-[20px]">
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">What is Software Development?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4} className="text-sm">
                <div>
                  Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems. A software development company can provide these services to businesses of all sizes, from small businesses to large enterprise organizations.
                </div>
                <div>
                  Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems. A software development company can provide these services to businesses of all sizes, from small businesses to large enterprise organizations.
                </div>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">How Do You Choose the Best Software Development Company?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4} className="text-sm">
                <div>
                  When choosing a custom software development company, it is important to consider the company&apos;s experience and expertise. The company should have a good reputation and be able to provide references. It is also important to consider the cost of the services, and make sure that the company has a good track record of completing projects on time and on budget.
                </div>
                <div className="mt-[20px] font-bold">
                  The best software development companies have a number of characteristics in common, including:
                </div>
                <div>
                  <li>
                    They have a lot of experience and expertise in software development
                  </li>
                  <li>
                    They have a good reputation and are able to provide references
                  </li>
                  <li>
                    They are able to complete projects on time and on budget
                  </li>
                  <li>
                    They have a team of skilled developers who are able to meet the needs of the customer or client
                  </li>
                  <li>
                    They use the latest tools and technologies
                  </li>
                  <li>
                    They have a strong understanding of the software development process
                  </li>
                  <li>
                    They are able to provide support and maintenance after the software has been deployed
                  </li>
                </div>

                <div className="mt-[20px] font-bold">
                  What questions should you ask your software development company before hiring them?
                </div>
                <div>
                  <li>
                    What is your experience and expertise in software development?
                  </li>
                  <li>
                    Do you have a good reputation and are able to provide references?
                  </li>
                  <li>
                    Can you complete projects on time and on budget?
                  </li>
                  <li>
                    Do you have a team of skilled developers who are able to meet the needs of the customer or client?
                  </li>
                  <li>
                    What tools and technologies do you use?
                  </li>
                  <li>
                    Do you have a strong understanding of the software development process?
                  </li>
                  <li>
                    What kind of support and maintenance can you provide after the software has been deployed?
                  </li>
                </div>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">What is Agile Software Development?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4} className="text-sm">
                <div className="font-bold">The agile software development process consists of the following five stages:</div>

                <li className="mt-[10px]">Initiation: This stage includes gathering requirements from the customer or client, and designing the software.</li>
                <li>Planning: In this stage, the development team creates a plan for developing the software. This includes creating a schedule and budget, and determining which features will be included in each stage of the project.</li>
                <li>Execution: In this stage, the development team writes code and tests it to make sure it meets all of the requirements.</li>
                <li>Delivery: In this stage, the software is delivered to the customer or client for testing.</li>
                <li>Feedback: In this stage, the customer or client provides feedback about the software, and the development team makes changes based on that feedback.</li>

                <div className="mt-[20px] font-bold">How does agile software development differ from other methodologies? </div>
                <div className="mt-[10px]">Agile development is a process that is used to create custom software for a customer or client. It is a collaborative process that involves regular communication between the customer or client and the development team. Agile software development is based on the principle of iterative and incremental development, which means that the software is developed in stages, and new features are added after each stage has been completed. This allows the customer or client to see a working prototype of the software and provide feedback.</div>
                <div className="mt-[10px]">At any given time, we are using various software development tools to fully implement agile software development methodologies. </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">How Much Do Your Custom Software Engineering Services Cost?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4} className="text-sm">
                <div>Custom software development services can vary in price, depending on the size and complexity of the project. However, most companies charge by the hour, with rates that range from $75 to $250 per hour. Some companies also charge a fixed price for the project, which is determined by the scope of work. Contact us today for a quote on your next project!</div>
                <div className="font-bold mt-[10px]">When considering the cost of software development services, there are several factors to take into account:</div>

                <li className="mt-[10px]">The size and complexity of the project. The larger and more complex the project, the higher the cost of the services.</li>
                <li>The development team&apos;s experience and expertise. More experienced and expert developers will charge more for their services.</li>
                <li>The company&apos;s overhead costs. Companies with higher overhead costs, such as larger companies or those located in major metropolitan areas, will charge more for their services.</li>
                <li>The type of project. Some projects, such as those that require a lot of custom coding, will be more expensive than others.</li>
                <li>The development methodologies used. Agile software development is a more expensive methodology than traditional waterfall development.</li>
                <li>The number of hours required to complete the project. The more hours required, the higher the cost of the services.</li>
                <li>The level of experience and expertise of the development team. More experienced and skilled developers will charge more for their services.</li>
                <li>The geographical location of the development team. Development teams in countries such as India or China typically charge less than teams in North America or Europe.</li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">What Are the Benefits of Custom Software Development?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4} className="text-sm">
                <div className="font-bold">
                  Increased efficiency
                </div>
                <div>
                  Custom software is designed to meet the specific needs of a business, which can help to increase efficiency and productivity.
                </div>

                <div className="font-bold mt-[20px]">
                  Improved customer satisfaction
                </div>
                <div>
                  By providing a software solution that is tailored to the specific needs of a customer or client, businesses can improve customer satisfaction levels.
                </div>

                <div className="font-bold mt-[20px]">
                  Cost savings
                </div>
                <div>
                  By avoiding the need to purchase off-the-shelf software, businesses can save money on the cost of development and maintenance.
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">How Long Does it Take to Create and Build Custom Software?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4} className="text-sm">
                <div>
                  Custom software development using the agile method typically takes between 4 and 6 months, but can take longer depending on the complexity of the project.
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box >
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}
