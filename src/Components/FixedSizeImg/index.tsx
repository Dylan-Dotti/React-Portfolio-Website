import * as React from 'react';
import './index.scss';

export interface IFixedSizeImgProps {
    src                : string
    width?             : string | number
    height?            : string | number
    alt?               : string
    containerClassName?: string
    imgClassName?      : string
}

export interface IFixedSizeImgState {
}

export default class FixedSizeImg extends React.Component<IFixedSizeImgProps, IFixedSizeImgState> {

    constructor(props: IFixedSizeImgProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div
                className={`fixed-size-img-container ${this.props.containerClassName || ""}`}
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
            >
                <img 
                    src={this.props.src}
                    alt={this.props.alt || "FixedSizeImg"}
                    className={this.props.imgClassName || ""}
                 />
            </div>
        );
    }
}