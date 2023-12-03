import * as React from "react";
import "./employment.scss";
import { AppConstantsContext } from "../../App";
import ScrollFadeInSection from "../ScrollFadeInSection";
import CrossfadeImageCarousel from "../CrossfadeImageCarousel";

const Employment: React.FC = () => {
    const appConstants = React.useContext(AppConstantsContext);

    return (
        <div id="employment">
            <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS}>
                <h1 className="text-center">Employment</h1>
                <hr className="half-centered"/>
                
                <div className="software-engineer-group">
                    <h2>Full-Stack Software Engineer</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aliquid beatae nemo minima illum facilis? Commodi earum sequi explicabo excepturi sed facilis hic fuga facere tempore quo vero, voluptatem quisquam, maiores at aperiam! Reprehenderit veritatis dolores ipsam soluta et architecto dignissimos! Ducimus hic facere quidem necessitatibus sequi iste placeat alias libero, officiis excepturi distinctio iure voluptate blanditiis sed voluptatem dolorem accusamus eveniet reprehenderit, tempore velit deserunt quas nesciunt! Suscipit cumque quos maxime molestiae? Sit asperiores omnis fugit. Fugiat praesentium alias, perferendis fuga minus a, odit eligendi molestiae veniam eius dignissimos voluptatem magnam incidunt! Excepturi explicabo at beatae quam ullam laboriosam?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum aut odit natus nobis cupiditate esse soluta cum maxime ex iure amet, laudantium, ipsum veniam atque. Cupiditate cumque sed amet rem iure placeat esse reprehenderit animi veniam quis blanditiis asperiores ex totam consequatur repellendus eius inventore, nulla dolore maxime, perferendis aliquam ratione. Eligendi porro dolorem cupiditate! Praesentium magni doloremque, obcaecati voluptatum natus deleniti deserunt dolor dolores est nihil tempora fuga nobis ipsa suscipit, eligendi ratione accusantium expedita facilis earum. Ipsa ducimus quasi amet corporis illum excepturi debitis! Autem unde a accusantium dignissimos porro neque. Ex ullam repellendus mollitia. Minus, recusandae.
                    </p>
                </div>

                <div className="ghd-engineer-group">
                    <h2>Global Helpdesk Support Engineer</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aliquid beatae nemo minima illum facilis? Commodi earum sequi explicabo excepturi sed facilis hic fuga facere tempore quo vero, voluptatem quisquam, maiores at aperiam! Reprehenderit veritatis dolores ipsam soluta et architecto dignissimos! Ducimus hic facere quidem necessitatibus sequi iste placeat alias libero, officiis excepturi distinctio iure voluptate blanditiis sed voluptatem dolorem accusamus eveniet reprehenderit, tempore velit deserunt quas nesciunt! Suscipit cumque quos maxime molestiae? Sit asperiores omnis fugit. Fugiat praesentium alias, perferendis fuga minus a, odit eligendi molestiae veniam eius dignissimos voluptatem magnam incidunt! Excepturi explicabo at beatae quam ullam laboriosam?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum aut odit natus nobis cupiditate esse soluta cum maxime ex iure amet, laudantium, ipsum veniam atque. Cupiditate cumque sed amet rem iure placeat esse reprehenderit animi veniam quis blanditiis asperiores ex totam consequatur repellendus eius inventore, nulla dolore maxime, perferendis aliquam ratione. Eligendi porro dolorem cupiditate! Praesentium magni doloremque, obcaecati voluptatum natus deleniti deserunt dolor dolores est nihil tempora fuga nobis ipsa suscipit, eligendi ratione accusantium expedita facilis earum. Ipsa ducimus quasi amet corporis illum excepturi debitis! Autem unde a accusantium dignissimos porro neque. Ex ullam repellendus mollitia. Minus, recusandae.
                    </p>
                </div>
            </ScrollFadeInSection>

            <CrossfadeImageCarousel
                className="ghd-carousel"
                images={[
                    "Img/GHD/IMG_0114.JPG",
                    "Img/GHD/IMG_0116.JPG",
                    "Img/GHD/IMG_0128.JPG",
                    "Img/GHD/IMG_0129.JPG",

                ]}
            />

        </div>
    );
}

export default Employment;