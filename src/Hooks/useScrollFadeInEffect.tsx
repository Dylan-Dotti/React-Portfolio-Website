import * as React from 'react';

export enum ScrollFadeInDirection {
    Up, Down, Left, Right
}

// defines a custom hook
const useScrollFadeInEffect = (durationMS = 0, direction = ScrollFadeInDirection.Up, shiftValue = '0px') => {

    const [isVisible, setVisible] = React.useState(false);

    const observerCallback = React.useCallback((node) => {
        if (node !== null) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(node);
        }
    }, []);

    const style: React.CSSProperties = {
        position: 'relative',
        transition: `all ${durationMS}ms ease-out`,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
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

    return { style, observerCallback };
}

export default useScrollFadeInEffect;