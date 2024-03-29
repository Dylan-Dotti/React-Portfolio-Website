import * as React from "react";
import "./employment.scss";
import FadeInSection from "../FadeInSection";
import CrossfadeImageCarousel from "../CrossfadeImageCarousel";
import HrWithCircle from "../Visual/HrWithCircle";
import { HashLink } from "react-router-hash-link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Employment: React.FC = () => {

    return (
        <div id="employment">
            <FadeInSection className="title-section content-container">
                <h1 className="text-center page-header">Employment</h1>
                <HrWithCircle widthClass="half-centered" />
            </FadeInSection>
                
            <div className="job-section ghd-section content-container">
                <FadeInEmploymentSection>
                    <h2 className="job-title">Global Helpdesk Support Engineer</h2>
                </FadeInEmploymentSection>
                <FadeInEmploymentSection className="img-wrapper right-img">
                    <LazyLoadImage
                        src="img/Swisslog/cranes.PNG"
                        alt=""
                        effect="blur"
                    />
                </FadeInEmploymentSection>

                <FadeInEmploymentSection>
                    <p>
                        Following my graduation from CNU, my former university advisor presented me with an opportunity for a helpdesk support engineer position at Swisslog, a global intralogistics company. Although the position did not involve any software development, the pay and benefits were enticing, and the prospect of being involved with software that interacted with the physical world was an interesting one. I decided that this position would be a good way to learn the industry and that I had the potential to move to a development role within the company at a later time, so I accepted the offer.
                    </p>
                </FadeInEmploymentSection>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Job Summary</h4>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            The helpdesk role involved a few main tasks. If a customer had an issue or question related to their warehouse, they would email or call in to the helpdesk. If I received a call, I would need to gather information from the customer about their issue. Using that information, I would create a support ticket for the purposes of tracking and providing updates.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            Helpdesk engineers were assigned to tickets based on their availability and proficiency with a specific site. Resolving a customer issue required some combination of prior site knowledge, researching previous tickets and existing documentation, and collaboration with other engineers. If the issue could not be resolved within a required timeframe, I would need to escalate the issue to a more experienced resource, which generally was an integration or software engineer that worked on the project. After an escalated issue was resolved, I would create an article detailing the resolution process, in order to prevent future escalations for the same issue.
                        </p>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">HBC Project</h4>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <CrossfadeImageCarousel
                            className="hbc-carousel"
                            images={[
                                "img/GHD/HBC/IMG_0114.JPG",
                                "img/GHD/HBC/IMG_0116.JPG",
                                "img/GHD/HBC/IMG_0128.JPG",
                                "img/GHD/HBC/IMG_0129.JPG",
                                "img/GHD/HBC/IMG_0133.JPG",
                                "img/GHD/HBC/IMG_0136.JPG",
                                "img/GHD/HBC/IMG_0137.JPG",
                                "img/GHD/HBC/IMG_0163.JPG",
                            ]}
                            imgHoldDurationMS={12_000}
                            imgFadeDurationMS={4_000}
                        />
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            After my onboarding and initial training, I was selected to travel to support a relatively new warehouse project commissioned by Hudson's Bay Company (HBC) for two weeks. The site was utilizing Swisslog's CarryPick system, which works by managing a fleet of mobile robots that move around a grid of product racks using AR tags on the floor to keep track of their position. When a product is requested by the system, a robot will physically pick up a rack with the desired product, then bring it to a manned workstation for picking.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            By reviewing the existing documentation and observing the field service engineers when issues occurred, I was able to learn the basics of the system rather quickly, and soon I was troubleshooting issues brought to me by the floor manager on a daily basis. At one point, I was left to watch over the entire system for a couple hours while the managers and FSEs were occupied elsewhere. One interesting issue involved a two-sided rack that I identified as having all of its products on the wrong sides. I wanted to see if I was right, and no one else seemed to want to fix it at the time, so I spent over an hour manually moving the products to the correct side of the rack (while getting some strange looks from the pickers). I was able to confirm that I was correct, and the issue was resolved.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            My time at the HBC site was a great learning experience for me. The workflow of the system made a lot of sense to me, and I loved being able to interact with and learn about how the robots worked. My managers all thought that I did quite well, and after returning from the trip, I was generally among the first engineers to be assigned new issues for the site.
                        </p>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Forte Group</h4>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            About a year into the helpdesk job, I was asked by my manager to start handling support tickets for sites running Forte software. Forte was a smaller warehouse automation company that was previously acquired by Swisslog. Normally, GHD engineers would only pass these tickets along to the individuals assigned to Forte support, but I was tasked with learning the Forte systems and providing basic support for the sites. I was told I was rather successful in this endeavor, compared to the previous attempts at integrating the helpdesk, and I was soon able to handle basic and recurring issues for Forte sites using their existing documentation.
                        </p>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Time Entry App</h4>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            In the later half of 2021, I was given the opportunity to work on a software project with another of the helpdesk engineers. He had been working on a way of parsing excel sheets containing support ticket time data, which could be generated by our ticketing system. He was attempting to automate part of the time entry process, which could be rather tedious. When he presented this project to our manager, I was recognized as the best candidate to work with the other engineer and manage the creation of something useful.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            I created a Github repository for us and created a diagram to plan out the high-level architecture of the application. I elected for Python as the language for the project, since it had some libraries I was familiar with that I knew would be useful, and the other engineer had experience using it. In hindsight, I think C# may have been the better choice, as the Python project requires a good amount of setup on the user's end.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            After a few months, we were able to produce an app capable of automating a large portion of the time entry process. I rather enjoyed working on this project and getting to play senior developer for a bit. More details about this project can be found <HashLink to="/projects#ghd-auto-time-entry">on my projects page</HashLink>.
                        </p>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">New Job Offer</h4>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            Near the end of my second year at the helpdesk, the Forte group decided that I would be a good fit for their team, and I was offered a software engineering position. I was enthusiastic about finally being able to put my skillset to use, so I accepted the offer.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            The helpdesk was a good introductory tech role and provided me a good look into the inner workings of the warehouse automation industry. It frequently brought me out of my comfort zone by having me interact with customers in situations of high uncertainty and under time pressure. I am appreciative to have been given the opportunity, considering I had such little prior experience at the time.
                        </p>
                    </FadeInEmploymentSection>
                </div>

            </div>

            <FadeInEmploymentSection className="content-container job-divider">
                <HrWithCircle className="softer" />
            </FadeInEmploymentSection>

            <div className="job-section content-container">
                <FadeInEmploymentSection>
                    <h2 className="job-title">Full-Stack Software Engineer</h2>
                </FadeInEmploymentSection>
                <FadeInEmploymentSection className="img-wrapper right-img">
                    <LazyLoadImage
                        src="img/Lenox/IMG_1769.jpg"
                        alt=""
                        effect="blur"
                    />
                </FadeInEmploymentSection>

                <FadeInEmploymentSection>
                    <p>
                        In this role, I worked as part of a team of 5 engineers - two developers (myself and a senior), two integration/QA engineers, and a manager. The team was responsible for the development and maintenance of a light-goods conveyor automation system called Automation Director. The software portion of the system consisted of a front-end web application made with React, a back-end API made with .NET Web API and C#, an SQL Server database, and a set of business logic services called agents.
                    </p>
                </FadeInEmploymentSection>
                <FadeInEmploymentSection>
                    <p>
                        In addition to the main Automation Director system, we also worked on a few supporting applications. This included a web-based directory tool for keeping track of the software, servers, devices, and configurations for each of the customer sites, and a desktop application for testing various aspects of the systems.
                    </p>
                </FadeInEmploymentSection>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Directory Tool</h4>
                    </FadeInEmploymentSection>

                    <FadeInEmploymentSection>
                        <p>
                            At the time that I joined the team, customer project work was relatively light. Though I made a few minor changes to project UIs, much of my development time was spent working on our customer directory tool. We used this tool to keep track of important data for each of the customer sites, such as the server names and IPs, software versions, accounts and passwords, and links to documentation.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            The tool was a web application consisting of a React, Typescript, and Sass front-end, a .NET C# WebAPI back-end, and an SQL Server database. I effectively took over as the primary developer for this project, freeing up my senior developer to work on more important tasks.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            One of the most helpful features I implemented for this project was a server availability checker. This feature would periodically ping each of our test servers and display their availability status in the UI. This was a great help to our team, as it allowed us to quickly identify whether or not a server was turned on.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            This was a great introductory project for me, as it allowed me to familiarize myself with the development workflow and to improve my front-end programming skills without the possibility of damaging a customer's production system.
                        </p>
                    </FadeInEmploymentSection>
                </div>
                
                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Tester Tool</h4>
                    </FadeInEmploymentSection>

                    <FadeInEmploymentSection>
                        <p>
                            After a few months in this role, my senior developer felt that my skills had progressed enough for me to be brought onto a more complex project, so I started receiving assignments for the group's AD Tester Tool. This was a desktop application that was used to test portions of the Automation Director system. It was made using Electron, a framework for creating dekstop applications using web technologies. Like the other projects in our group, it consisted of a React, Typescript, and Sass front-end, a .NET C# WebAPI back-end, and an SQL Server database.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            Unlike the Directory Tool, this project was used in production by our customers to test their systems, so I had to be more mindful of my changes. The code was also more challenging to understand, as it integrated with the Automation Director system in a low-level way.
                        </p>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Automation Director</h4>
                    </FadeInEmploymentSection>

                    <FadeInEmploymentSection>
                        <p>
                            Around a year into the role, my senior developer decided that I was ready to start assisting with the development of the new version of the Automation Director UI. This was a recreation of the older Angular.js UI, and as previously mentioned, consisted of a React front-end, a .NET WebAPI back-end, and an SQL Server database. Notably, it also included a 3D visualization of the conveyor system that was made using Three.js.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            As this UI was to be used in production by many customers, I had to be very careful with my changes. My senior developer would review each of my contributions before they were merged into the main branch, and I learned a lot from his feedback.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p className="pre-list">
                            Some of my more notable contributions to this project included:
                        </p>
                        <ul className="blue-circle-list">
                            <li>
                                Creating a set of database scripts and API endpoints for providing summaries and statistics related to system alarms. This allowed us to create a new alarm statistics screen in the UI.
                            </li>
                            <li>
                                Porting a TCP messages screen from the older version of the UI. I needed to create a rather complex algorithm that parsed the XML messages in order to highlight text that matched a search query. For this algorithm, I utilized the OOP command pattern to allow me to undo certain operations that were performed on the text.
                            </li>
                            <li>
                                Creating a complex form for configuring alarm email notifications. This allowed specified users to receive emails when certain system alarms were triggered.
                            </li>
                            <li>
                                Creating login and logout forms that interacted with the API's authentication endpoints.
                            </li>
                            <li>
                                Porting a form from the old UI for configuring conveyor lane tags. This allowed authorized users to assign certain functionalities to specific sections of the conveyor system.
                            </li>
                        </ul>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">PASWare</h4>
                    </FadeInEmploymentSection>

                    <FadeInEmploymentSection>
                        <p>
                            At the end of 2022, I was selected to work on a project called PASWare. This was a legacy system produced by another company that was previously acquired by Swisslog. There was effectively one developer left at Swissog who was somewhat familiar with the system, and the original developers, who had since left the company, had decided to cut their support for it.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            The customer was requesting a small expansion of their conveyor system. My manager was informed of this request, and asked if I would be willing to take on the project. I thought this would be a good opportunity to stand out as a developer, so I accepted.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            The PASWare system consisted of a front-end web application made with AngularJS and served from an ASP.NET backend, as well as an SQL Server database. The UI also contained an embedded Unity application that was used to visualize the conveyor system. As documenation was very limited, my strategy for this project was to trace the flow of data from the Unity application to the database. This allowed me to identify the relevant portions of the codebase.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            As a newly-professional developer, this project was a true trial by fire. In addition to learning the codebase, I needed to meet regularly with the customer and project managers to discuss progress and requirements. Swisslog was able to schedule a single 1-hour meeting with one of the original developers, which was very helpful in clarifying some of the more obscure portions of the system. Additionally, I had several meetings with one of the customer's PLC engineers to discuss how the software and PLC would communicate, and to test the communication once my implementation was complete.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            In the end, I was able to successfully complete my portion of this project. I identified the necessary database changes by looking through the migrations performed for a previous conveyor expansion, and my testing with the customer's PLC engineer confirmed the flow of data between the PLC and UI. The hardware was installed some time after my work was complete, but I was not involved in that portion of the project.
                        </p>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Lenox Trip</h4>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <CrossfadeImageCarousel
                            className="lenox-carousel"
                            images={[
                                "img/Lenox/IMG_2350.jpg",
                                //"img/Lenox/IMG_2321.jpg",
                                //"img/Lenox/IMG_2322.jpg",
                                //"img/Lenox/IMG_2325.jpg",
                                "img/Lenox/IMG_2339.jpg",
                                "img/Lenox/IMG_2341.jpg",
                                "img/Lenox/IMG_2346.jpg",
                                "img/Lenox/IMG_2349.jpg",
                            ]}
                            imgHoldDurationMS={12_000}
                            imgFadeDurationMS={4_000}
                        />
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            As the new Automation Director UI was nearing completion, our team began attempts to sell the upgrade to our customers. Among the first customers to agree to the upgrade was Lenox, a company known for selling tableware, giftware, and collectible products. As this was the first time that the new UI would be installed, my manager wanted our group to be present for the installation in order to observe it in production and to provide support for any potential issues.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            This was an excellent opportunity for me to learn more about the Automation Director system and to see the workflow in action. Compared to my HBC trip while working at the helpdesk, however, this trip was a much more relaxed one. The installation went rather smoothly, and there were few issues that required our attention. Most of my time was spent observing the system, the operators, and the interactions with the customer, and making minor adjustments to the UI.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            More importantly, this was my first time meeting the rest of my team in person. I had been working with them for almost two years at this point, but I had only ever met them over video calls. It was a good team-building experience, with highlights such as dinners, a trip to the Gettysburg Civil War Museum, and shopping in a Spencer's store at the local mall.
                        </p>
                    </FadeInEmploymentSection>
                </div>

                <div className="chapter-section">
                    <FadeInEmploymentSection>
                        <h4 className="chapter-title">Conclusion</h4>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            Unfortunately, a few months after the Lenox trip, I was informed that my position was being eliminated. The company's financials were in a declining state, and while my group was still profitable, the company decided to cut costs by initiating a round of layoffs. As the least experienced member of the group, I was among those chosen to be let go.
                        </p>
                    </FadeInEmploymentSection>
                    <FadeInEmploymentSection>
                        <p>
                            This position was an excellent opportunity for me to learn and grow as a developer. I learned a lot about the software development processes, and I was provided plenty of opportunities to cultivate my web development skills. I was also able to learn more about the warehouse automation industry, which I find to be an interesting one. I am grateful to have been given the opportunity to work on this team, considering I had no professional development experience at the time.
                        </p>
                    </FadeInEmploymentSection>
                </div>
            </div>

        </div>
    );
}

interface FadeInEmploymentSectionProps {
    children: React.ReactNode
    className?: string
}

const FadeInEmploymentSection: React.FC<FadeInEmploymentSectionProps> = (props) => {
    return (
        <FadeInSection className={props.className} rootMargin="-10%">
            {props.children}
        </FadeInSection>
    );
}

export default Employment;