import * as React from 'react';
import './tag.scss';
import classNames from 'classnames';

interface ITagProps {
    text: string
    className?: string
};

const Tag: React.FC<ITagProps> = (props) => {
    
    const { text, className } = props;

    return (
        <span className={classNames('custom-tag', className)}>
            {text}
        </span>
    );

};

export default Tag;