import * as React from 'react';
import './scrollable-area.scss';
import classNames from 'classnames';

interface IScrollableAreaProps {
    children         : React.ReactNode
    className?       : string
    contentClassName?: string
}

const ScrollableArea: React.FC<IScrollableAreaProps> = (props) => {
    return (
        <div className={classNames('scrollable-area', props.className)}>
            <div className={classNames('scrollable-content', props.contentClassName)}>
                {props.children}
            </div>
        </div>
    );
};

export default ScrollableArea;