import React, { ReactNode } from "react";

export default class Employment extends React.Component {

    render(): ReactNode {
        return (
            <div id="employment">
                
                <div className="software-engineer-group">
                    <h2>Full-Stack Software Engineer</h2>
                </div>

                <div className="ghd-engineer-group">
                    <h2>Global Helpdesk Support Engineer</h2>
                </div>

            </div>
        );
    }
}