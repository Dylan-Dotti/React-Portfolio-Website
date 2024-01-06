import React from 'react';
import './horizontal-expander.scss';
import classNames from 'classnames';

interface HorizontalExpanderProps {
    isExpanded: boolean
    className?: string
    children? : React.ReactNode
}

// expands horizontally to reveal content
const HorizontalExpander: React.FC<HorizontalExpanderProps> = (props) => {

    const className = classNames("horizontal-expander", {
        "collapsed": !props.isExpanded
    }, props.className);

    return (
        <span className={className}>
            {props.children}
        </span>
    );
};

export default HorizontalExpander;
