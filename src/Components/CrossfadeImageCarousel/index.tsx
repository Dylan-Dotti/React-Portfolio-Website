import * as React from 'react';
import './crossfade-image-carousel.scss';
import classNames from 'classnames';

interface ICrossfadeImageCarouselProps {
    images: string[]
    imgHoldDurationMS?: number
    imgFadeDurationMS?: number
    className?: string
}

const CrossfadeImageCarousel: React.FC<ICrossfadeImageCarouselProps> = (props) => {

    const { images, imgHoldDurationMS = 5000, imgFadeDurationMS = 1500, className } = props;

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, imgHoldDurationMS);
        return () => clearInterval(interval);
    }, [currentImageIndex, imgHoldDurationMS, images.length]);

    const style: React.CSSProperties = {
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: `background-image ${imgFadeDurationMS}ms ease-out`,
    };

    return (
        <div className={classNames('crossfade-image-carousel', className)} style={style} />
    );

}

export default CrossfadeImageCarousel;