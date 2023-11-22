import * as React from 'react';
import './scrollable-area.scss';
import classNames from 'classnames';

interface IScrollableAreaProps {
    children         : React.ReactNode
    className?       : string
    contentClassName?: string
    overflowX?       : 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
    overflowY?       : 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
}

const ScrollableArea: React.FC<IScrollableAreaProps> = (props) => {
    return (
        <div className={classNames('scrollable-area', props.className)}>
            <div
                className={classNames('scrollable-content', props.contentClassName)}
                style={{
                    overflowX: props.overflowX || 'auto',
                    overflowY: props.overflowY || 'auto',
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default ScrollableArea;