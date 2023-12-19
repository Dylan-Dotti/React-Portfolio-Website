import * as React from 'react';
import './hr-with-circle.scss';
import classNames from 'classnames';

interface HrWithCircleProps {
    solidDot?  : boolean
    widthClass?: "half-centered" | "quarter-centered"
    className? : string
}

const HrWithCircle: React.FC<HrWithCircleProps> = (props) => {
    const className = classNames('hr-with-circle', props.widthClass, props.className);
    const circleClassName = classNames('circle', props.solidDot && "solid-dot");

    return (
        <div className={className}>
            <div className="custom-hr"></div>
            <div className={circleClassName}></div>
            <div className="custom-hr"></div>
        </div>
    );
}

export default HrWithCircle;