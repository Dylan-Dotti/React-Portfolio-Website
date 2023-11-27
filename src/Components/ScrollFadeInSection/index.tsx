import * as React from 'react';
import './scroll-fade-in-section.scss';

export enum ScrollFadeInDirection {
    Up, Down, Left, Right
}

interface IScrollFadeInSectionProps {
    children   : React.ReactNode
    direction? : ScrollFadeInDirection
    durationMS?: number
    shiftValue?: string
}

// A wrapper component that fades in its children when they are scrolled into view.
const ScrollFadeInSection: React.FC<IScrollFadeInSectionProps> = (props) => {

    const { 
        children,
        direction = ScrollFadeInDirection.Up,
        durationMS = 0, 
        shiftValue = '0px'
    } = props;

    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting)
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            });
        });

        const domRefCurrent = domRef.current;
        observer.observe(domRefCurrent!);

        return () => observer.unobserve(domRefCurrent!);
        
    }, []);

    const style: React.CSSProperties = {
        transition: `all ${durationMS}ms ease-out`,
    };

    switch (direction) {
        case ScrollFadeInDirection.Up:
            style.top = isVisible ? '0' : shiftValue;
            break;
        case ScrollFadeInDirection.Down:
            style.bottom = isVisible ? '0' : shiftValue;
            break;
        case ScrollFadeInDirection.Left:
            style.right = isVisible ? '0' : shiftValue;
            break;
        case ScrollFadeInDirection.Right:
            style.left = isVisible ? '0' : shiftValue;
            break;
        default:
            break;
    }

    return (
        <div className={`scroll-fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef} style={style}>
            {children}
        </div>
    );
}

export default ScrollFadeInSection;