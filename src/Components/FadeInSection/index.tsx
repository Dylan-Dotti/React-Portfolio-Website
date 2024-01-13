import * as React from 'react';
import './fade-in-section.scss';
import classNames from 'classnames';
import AppConfig from '../../Config/config';

export enum FadeInDirection {
    Up, Down, Left, Right
}

interface FadeInSectionProps {
    children?        : React.ReactNode
    direction?       : FadeInDirection
    delayMS?         : number
    durationMS?      : number
    shiftValue?      : string
    className?       : string
    rootMargin?      : string
    easingFunction?  : 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end'
    onClick?         : () => void
}

// A wrapper component that fades in its children when they are scrolled into view.
const FadeInSection: React.FC<FadeInSectionProps> = (props) => {

    const { 
        children,
        direction = FadeInDirection.Up,
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
        case FadeInDirection.Up:
            style.top = isVisible ? '0' : shiftValue;
            break;
        case FadeInDirection.Down:
            style.bottom = isVisible ? '0' : shiftValue;
            break;
        case FadeInDirection.Left:
            style.left = isVisible ? '0' : shiftValue;
            break;
        case FadeInDirection.Right:
            style.right = isVisible ? '0' : shiftValue;
            break;
        default:
            break;
    }

    const className = classNames('fade-in-section', { 'hidden': !isVisible }, props.className);

    return (
        <div className={className} ref={domRef} style={style} onClick={onClick}>
            {children}
        </div>
    );
}

export default FadeInSection;