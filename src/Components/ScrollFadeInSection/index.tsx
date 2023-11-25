import * as React from 'react';
import './scroll-fade-in-section.scss';

// A wrapper component that fades in its children when they are scrolled into view.
const ScrollFadeInSection: React.FC = (props) => {
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

    return (
        <div className={`scroll-fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    );
}

export default ScrollFadeInSection;