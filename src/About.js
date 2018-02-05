import React, { Component } from 'react';

export class About extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
        this.toggleAbout = props.toggleAbout;
        this.toggleContact = props.toggleContact;
    }

    render() {
        const config = this.state.config;
        const aboutVisible = this.props.state.showAbout ? "about visible" : "about hidden";
        const title = <div id="about-title-holder"><h1  id="about-title">{config.about.title}</h1></div>
        const description = <div id="about-description-holder"><p  id="about-description">{config.about.description}</p></div>
        return (

            <div className={aboutVisible} id="about-master">
                <div id="about-holder">
                    <div id="headshot-holder">
                        <img id="headshot" src={config.about.headshot} />
                    </div>
                    <button id="about-back"
                        onClick={( e ) => {
                            this.toggleAbout();
                        }}
                    > +
                    </button>
                    {title}
                    {description}
                </div>
            </div>
        );
    }
};
