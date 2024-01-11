import * as React from "react";
import "./employment.scss";
import ScrollFadeInSection from "../ScrollFadeInSection";
import CrossfadeImageCarousel from "../CrossfadeImageCarousel";
import HrWithCircle from "../Visual/HrWithCircle";
import { HashLink } from "react-router-hash-link";

const Employment: React.FC = () => {

    return (
        <div id="employment">
            <ScrollFadeInSection className="title-section content-container">
                <h1 className="text-center page-header">Employment</h1>
                <HrWithCircle widthClass="half-centered" />
            </ScrollFadeInSection>
                
            <ScrollFadeInSection className="job-section ghd-section content-container">
                <h2 className="job-title">Global Helpdesk Support Engineer</h2>
                <div className="img-wrapper right-img"><img src="img/Swisslog/cranes.PNG" alt=""/></div>

                <p>
                    Following my graduation from CNU, my former university advisor presented me with an opportunity for a helpdesk support engineer position at Swisslog, a global intralogistics company. Although the position did not involve any software development, the pay and benefits were enticing, and the prospect of being involved with software that interacted with the physical world was an interesting one. I decided that this position would be a good way to learn the industry and that I had the potential to move to a development role within the company at a later time, so I accepted the offer.
                </p>

                <div className="chapter-section">
                    <h4 className="chapter-title">Job Summary</h4>
                    <p>
                        The helpdesk role involved a few main tasks. If a customer had an issue or question related to their warehouse, they would email or call in to the helpdesk. If I received a call, I would need to gather information from the customer about their issue. Using that information, I would create a support ticket for the purposes of tracking and providing updates.
                    </p>
                    <p>
                        Helpdesk engineers were assigned to tickets based on their availability and proficiency with a specific site. Resolving a customer issue required some combination of prior site knowledge, researching previous tickets and existing documentation, and collaboration with other engineers. If the issue could not be resolved within a required timeframe, I would need to escalate the issue to a more experienced resource, which generally was an integration or software engineer that worked on the project. After an escalated issue was resolved, I would create an article detailing the resolution process, in order to prevent future escalations for the same issue.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">HBC Project</h4>
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
                    <p>
                        After my onboarding and initial training, I was selected to travel to support a relatively new warehouse project commissioned by Hudson's Bay Company (HBC) for two weeks. The site was utilizing Swisslog's CarryPick system, which works by managing a fleet of mobile robots that move around a grid of product racks using AR tags on the floor to keep track of their position. When a product is requested by the system, a robot will physically pick up a rack with the desired product, then bring it to a manned workstation for picking.
                    </p>
                    <p>
                        By reviewing the existing documentation and observing the field service engineers when issues occurred, I was able to learn the basics of the system rather quickly, and soon I was troubleshooting issues brought to me by the floor manager on a daily basis.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">Forte Group</h4>
                    <p>
                        About a year into the helpdesk job, I was asked by my manager to start handling support tickets for sites running Forte software. Forte was a smaller warehouse automation company that was previously acquired by Swisslog. Normally, GHD engineers would only pass these tickets along to the individuals assigned to Forte support, but I was tasked with learning the Forte systems and providing basic support for the sites. I was told I was rather successful in this endeavor, compared to the previous attempts at integrating the helpdesk, and I was soon able to handle basic and recurring issues for Forte sites using their existing documentation.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">Time Entry App</h4>
                    <p>
                        In the later half of 2021, I was given the opportunity to work on a software project with another of the helpdesk engineers. He had been working on a way of parsing excel sheets containing support ticket time data, which could be generated by our ticketing system. He was attempting to automate part of the time entry process, which could be rather tedious. When he presented this project to our manager, I was recognized as the best candidate to work with the other engineer and manage the creation of something useful.
                    </p>
                    <p>
                        I created a Github repository for us and created a diagram to plan out the high-level architecture of the application. I elected for Python as the language for the project, since it had some libraries I was familiar with that I knew would be useful, and the other engineer had experience using it. In hindsight, I think C# may have been the better choice, as the Python project requires a good amount of setup on the user's end.
                    </p>
                    <p>
                        After a few months, we were able to produce an app capable of automating a large portion of the time entry process. I rather enjoyed working on this project and getting to play senior developer for a bit. More details about this project can be found <HashLink to="/projects#project-2">on my projects page</HashLink>.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">New Job Offer</h4>
                    <p>
                        Near the end of my second year at the helpdesk, the Forte group decided that I would be a good fit for their team, and I was offered a software engineering position. I was quite enthusiastic about finally being able to put my skillset to use, so I accepted the offer.
                    </p>
                    <p>
                        The helpdesk was a good introductory tech role and provided me a good look into the inner workings of the warehouse automation industry. It frequently brought me out of my comfort zone by having me interact with customers in situations of high uncertainty and under time pressure. I am appreciative to have been given the opportunity, considering I had such little prior experience at the time.
                    </p>
                </div>

            </ScrollFadeInSection>

            <ScrollFadeInSection className="content-container job-divider">
                <HrWithCircle className="softer" />
            </ScrollFadeInSection>

            <ScrollFadeInSection className="job-section content-container">
                <h2 className="job-title">Full-Stack Software Engineer</h2>
                <div className="img-wrapper right-img"><img src="img/Lenox/IMG_1769.jpg" alt=""/></div>

                <p>
                    In this role, I worked as part of a team of 5 engineers - two developers (myself and a senior), two integration/QA engineers, and a manager. The team was responsible for the development and maintenance of a light-goods conveyor automation system called <strong className="primary-color-text">Automation Director</strong>. The software portion of the system consisted of a front-end web application made with React, a back-end API made with .NET Web API and C#, an SQL Server database, and a set of business logic services called agents.
                </p>
                <p>
                    In addition to the main Automation Director system, we also worked on a few supporting applications. This included a web-based directory tool for keeping track of the software, servers, devices, and configurations for each of the customer sites, and a desktop application for testing various aspects of the systems.
                </p>

                <div className="chapter-section">
                    <h4 className="chapter-title">Directory Tool</h4>

                    <p>
                        At the time that I joined the team, customer project work was relatively light. Though I made a few minor changes to project UIs, much of my development time was spent working on our customer directory tool. We used this tool to keep track of important data for each of the customer sites, such as the server names and IPs, software versions, accounts and passwords, and links to documentation.
                    </p>
                    <p>
                        The tool was a web application consisting of a React, Typescript, and Sass front-end, a .NET C# WebAPI back-end, and an SQL Server database. I effectively took over as the primary developer for this project, freeing up my senior developer to work on more important tasks.
                    </p>
                    <p>
                        One of the most helpful features I implemented for this project was a server availability checker. This feature would periodically ping each of our test servers and display their availability status in the UI. This was a great help to our team, as it allowed us to quickly identify whether or not a server was turned on.
                    </p>
                    <p>
                        This was a great introductory project for me, as it allowed me to familiarize myself with the development workflow and to improve my front-end programming skills without the possibility of damaging a customer's production system.
                    </p>
                </div>
                
                <div className="chapter-section">
                    <h4 className="chapter-title">Tester Tool</h4>

                    <p>
                        After a few months in this role, my senior developer felt that my skills had progressed enough for me to be brought onto a more complex project, so I started receiving assignments for the group's AD Tester Tool. This was a desktop application that was used to test portions of the Automation Director system. It was made using Electron, a framework for creating dekstop applications using web technologies. Like the other projects in our group, it consisted of a React, Typescript, and Sass front-end, a .NET C# WebAPI back-end, and an SQL Server database.
                    </p>
                    <p>
                        Unlike the Directory Tool, this project was used in production by our customers to test their systems, so I had to be more mindful of my changes. The code was also more challenging to understand, as it integrated with the Automation Director system in a lower-level way.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">Automation Director</h4>

                    <p>
                        Around a year into the role, my senior developer decided that I was ready to start assisting with the development of the new version of the Automation Director UI. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam, neque porro maxime impedit libero nostrum ad et a, rem magnam ullam quis expedita atque? Debitis, voluptatum. Quis odio rerum illo, ipsum vero minus neque, qui non autem sequi enim.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">PASWare</h4>

                    <p>
                        At the end of 2022, I was selected to work on a project called PASWare. This was a legacy system produced by another company that was previously acquired by Swisslog. There was effectively one developer left at Swissog who was somewhat familiar with the system, and the original developers, who had since left the company, had decided to cut their support for it.
                    </p>
                    <p>
                        The customer was requesting a small expansion of their conveyor system. My manager was informed of this request, and asked if I would be willing to take on the project. I thought this would be a good opportunity to stand out as a developer, so I accepted.
                    </p>
                    <p>
                        The PASWare system consisted of a front-end web application made with AngularJS and served from an ASP.NET backend, as well as an SQL Server database. The UI also contained an embedded Unity application that was used to visualize the conveyor system. As documenation was very limited, my strategy for this project was to trace the flow of data from the Unity application to the database. This allowed me to identify the relevant portions of the codebase.
                    </p>
                    <p>
                        As a newly-professional developer, this project was a true trial by fire. In addition to learning the codebase, I needed to meet regularly with the customer and project managers to discuss progress and requirements. Swisslog was able to schedule a single 1-hour meeting with one of the original developers, which was very helpful in clarifying some of the more obscure portions of the system. Additionally, I had several meetings with one of the customer's PLC engineers to discuss how the software and PLC would communicate, and to test the communication once my implementation was complete.
                    </p>
                    <p>
                        In the end, I was able to successfully complete my portion of this project. I identified the necessary database changes by looking through the migrations performed for a previous conveyor expansion, and my testing with the customer's PLC engineer confirmed the flow of data between the PLC and UI. The hardware was installed some time after my work was complete, but I was not involved in that portion of the project.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">Lenox Trip</h4>
                    <CrossfadeImageCarousel 
                        className="lenox-carousel"
                        images={[
                            "img/Lenox/IMG_2321.jpg",
                            "img/Lenox/IMG_2322.jpg",
                            "img/Lenox/IMG_2325.jpg",
                            "img/Lenox/IMG_2339.jpg",
                            "img/Lenox/IMG_2341.jpg",
                            "img/Lenox/IMG_2346.jpg",
                            "img/Lenox/IMG_2349.jpg",
                            "img/Lenox/IMG_2350.jpg",
                        ]}
                        imgHoldDurationMS={12_000}
                        imgFadeDurationMS={4_000}
                    />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis animi vero illo perferendis et, qui at dolor? Ducimus corporis at, dolor dolores praesentium voluptatem quam laboriosam maiores porro quod repellendus eum officiis id molestiae similique repellat minus assumenda omnis est alias eveniet. Pariatur a veniam sed repellat error corrupti excepturi, eaque consequatur delectus, laborum asperiores similique labore quae. Sit accusamus itaque esse nisi eligendi impedit maiores tempore ut est natus velit quo nesciunt fugit inventore ipsum, laboriosam, totam excepturi iure possimus obcaecati quibusdam fuga. Illo porro aut veniam necessitatibus id tempora doloremque dolor unde facere harum, corporis, nam magnam ipsum.
                    </p>
                </div>

                <div className="chapter-section">
                    <h4 className="chapter-title">Conclusion</h4>
                    <p>
                        This position was an excellent opportunity for me to learn and grow as a developer. I learned a lot about the software implementation, testing, and deployment processes, and I was provided plenty of opportunities to cultivate my web development skills. I was also able to learn more about the warehouse automation industry, which I found to be quite interesting. I am grateful to have been given the opportunity to work with such a great team, and I am proud of the work we were able to accomplish together.
                    </p>
                </div>
            </ScrollFadeInSection>

        </div>
    );
}

export default Employment;