import * as React from 'react';
import './scroll-fade-in-section.scss';
import classNames from 'classnames';
import AppConfig from '../../Config/config';

export enum ScrollFadeInDirection {
    Up, Down, Left, Right
}

interface IScrollFadeInSectionProps {
    children?        : React.ReactNode
    direction?       : ScrollFadeInDirection
    delayMS?         : number
    durationMS?      : number
    shiftValue?      : string
    className?       : string
    rootMargin?      : string
    easingFunction?  : 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end'
    onClick?         : () => void
}

// A wrapper component that fades in its children when they are scrolled into view.
const ScrollFadeInSection: React.FC<IScrollFadeInSectionProps> = (props) => {

    const { 
        children,
        direction = ScrollFadeInDirection.Up,
        durationMS = AppConfig.defaultFadeInMS,
        delayMS = 0,
        shiftValue = '0px',
        rootMargin = "-15%",
        easingFunction = 'ease-out',
        onClick,
    } = props;

    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(entry.isIntersecting), delayMS);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: `${rootMargin} 0px ${rootMargin} 0px`,
        });

        const domRefCurrent = domRef.current;
        observer.observe(domRefCurrent!);

        return () => observer.unobserve(domRefCurrent!);
        
    }, [delayMS, rootMargin]);

    const style: React.CSSProperties = {
        transition: `
            opacity ${durationMS}ms ${easingFunction},
            top ${durationMS}ms ${easingFunction},
            bottom ${durationMS}ms ${easingFunction},
            left ${durationMS}ms ${easingFunction},
            right ${durationMS}ms ${easingFunction},
            filter ${durationMS / 3}ms ${easingFunction}
        ` as string,
    };

    switch (direction) {
        case ScrollFadeInDirection.Up:
            style.top = isVisible ? '0' : shiftValue;
            break;
        case ScrollFadeInDirection.Down:
            style.bottom = isVisible ? '0' : shiftValue;
            break;
        case ScrollFadeInDirection.Left:
            style.left = isVisible ? '0' : shiftValue;
            break;
        case ScrollFadeInDirection.Right:
            style.right = isVisible ? '0' : shiftValue;
            break;
        default:
            break;
    }

    const className = classNames('scroll-fade-in-section', { 'hidden': !isVisible }, props.className);

    return (
        <div className={className} ref={domRef} style={style} onClick={onClick}>
            {children}
        </div>
    );
}

export default ScrollFadeInSection;