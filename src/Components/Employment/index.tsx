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
                <img src="img/Swisslog/cranes.PNG" alt="" className="right-img"/>
                <h2 className="job-title">Global Helpdesk Support Engineer</h2>

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
                    <h4 className="chapter-title">HBC Project</h4>
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
                        The helpdesk was a good introductory tech role and provided me a good look at the inner workings of the warehouse automation industry. It frequently brought me out of my comfort zone by having me interact with customers in situations of high uncertainty and under time pressure. (...). I am appreciative to have been given the opportunity, considering I had such little prior experience at the time.
                    </p>
                </div>

            </ScrollFadeInSection>

            <ScrollFadeInSection className="content-container job-divider">
                <HrWithCircle className="softer" />
            </ScrollFadeInSection>

            <ScrollFadeInSection className="job-section content-container">
                <img src="img/Lenox/IMG_1769.jpg" alt="" className="right-img"/>
                <h2 className="job-title">Full-Stack Software Engineer</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aliquid beatae nemo minima illum facilis? Commodi earum sequi explicabo excepturi sed facilis hic fuga facere tempore quo vero, voluptatem quisquam, maiores at aperiam! Reprehenderit veritatis dolores ipsam soluta et architecto dignissimos! Ducimus hic facere quidem necessitatibus sequi iste placeat alias libero, officiis excepturi distinctio iure voluptate blanditiis sed voluptatem dolorem accusamus eveniet reprehenderit, tempore velit deserunt quas nesciunt! Suscipit cumque quos maxime molestiae? Sit asperiores omnis fugit. Fugiat praesentium alias, perferendis fuga minus a, odit eligendi molestiae veniam eius dignissimos voluptatem magnam incidunt! Excepturi explicabo at beatae quam ullam laboriosam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum aut odit natus nobis cupiditate esse soluta cum maxime ex iure amet, laudantium, ipsum veniam atque. Cupiditate cumque sed amet rem iure placeat esse reprehenderit animi veniam quis blanditiis asperiores ex totam consequatur repellendus eius inventore, nulla dolore maxime, perferendis aliquam ratione. Eligendi porro dolorem cupiditate! Praesentium magni doloremque, obcaecati voluptatum natus deleniti deserunt dolor dolores est nihil tempora fuga nobis ipsa suscipit, eligendi ratione accusantium expedita facilis earum. Ipsa ducimus quasi amet corporis illum excepturi debitis! Autem unde a accusantium dignissimos porro neque. Ex ullam repellendus mollitia. Minus, recusandae.
                </p>

                <div className="chapter-section">
                    <CrossfadeImageCarousel 
                        className="hbc-carousel"
                        images={[
                            "img/Lenox/IMG_2321.JPG",
                            "img/Lenox/IMG_2322.JPG",
                            "img/Lenox/IMG_2325.JPG",
                            "img/Lenox/IMG_2339.JPG",
                            "img/Lenox/IMG_2341.JPG",
                            "img/Lenox/IMG_2346.JPG",
                            "img/Lenox/IMG_2349.JPG",
                            "img/Lenox/IMG_2350.JPG",
                        ]}
                        imgHoldDurationMS={12_000}
                        imgFadeDurationMS={4_000}
                    />
                    <h4 className="chapter-title">Lenox Trip</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis animi vero illo perferendis et, qui at dolor? Ducimus corporis at, dolor dolores praesentium voluptatem quam laboriosam maiores porro quod repellendus eum officiis id molestiae similique repellat minus assumenda omnis est alias eveniet. Pariatur a veniam sed repellat error corrupti excepturi, eaque consequatur delectus, laborum asperiores similique labore quae. Sit accusamus itaque esse nisi eligendi impedit maiores tempore ut est natus velit quo nesciunt fugit inventore ipsum, laboriosam, totam excepturi iure possimus obcaecati quibusdam fuga. Illo porro aut veniam necessitatibus id tempora doloremque dolor unde facere harum, corporis, nam magnam ipsum.
                    </p>
                </div>
            </ScrollFadeInSection>

        </div>
    );
}

export default Employment;