import * as React from 'react';
import './scrollable-area.scss';
import classNames from 'classnames';

interface IScrollableAreaProps {
    children         : React.ReactNode
    className?       : string
    contentClassName?: string
    overflowX?       : 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
    overflowY?       : 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
    areaRef?         : React.RefObject<HTMLDivElement>
    contentRef?      : React.RefObject<HTMLDivElement>
}

const ScrollableArea: React.FC<IScrollableAreaProps> = (props) => {
    return (
        <div className={classNames('scrollable-area', props.className)} ref={props.areaRef}>
            <div
                className={classNames('scrollable-content', props.contentClassName)}
                style={{
                    overflowX: props.overflowX || 'auto',
                    overflowY: props.overflowY || 'auto',
                }}
                ref={props.contentRef}
            >
                {props.children}
            </div>
        </div>
    );
};

export default ScrollableArea;