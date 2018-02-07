import React, { Component } from 'react';
import { config } from './config';
import button_design from './media/button_design.svg';
import button_dev from './media/button_dev.svg';
import button_illustration from './media/button_illustration.svg';
import button_white from './media/button_white.svg';

export class Nav extends Component {
    constructor( props ) {
        super( props );
        this.filter = props.filter;
        this.state = props.state;
        this.selectCategory = props.selectCategory;
        this.toggleAbout = props.toggleAbout;
        this.toggleContact = props.toggleContact;
    }

    render() {
        const categoryMatch = config.categories.map((category, i) => (
            this.props.state.tags[category] ? "category selected" : "category"
        ));
        const buttons = [
            button_design,
            button_dev,
            button_illustration,
        ]
        return (
            <div id="nav">
                <img src={config.logo} id="logo" />
                <ul id="buttons-list">
                    <li key="button-about" className="about">
                        <button className="about"
                            onClick={( e ) => {
                                this.toggleAbout();
                            }}
                        >
                            <img className="nav-button-white-about" key="nav-button-about" alt ="About"src={button_white} />
                            <p>about</p>
                        </button>
                    </li>
                    <ul id="tags-list">
                        {config.categories.map((category, i) => (
                            <li key={i} className="tagsItem">
                                <button
                                    className={category + " " + categoryMatch[i]}
                                    onClick={( e ) => {
                                        this.selectCategory( category );
                                    }}
                                >
                                    <img className={"nav-button nav-button-" + category} key={"nav-button-" + i} alt ="nav button"src={buttons[i]} />
                                    <img className={"nav-button-white nav-button-white" + category} key={"nav-button-white-" + i} alt ={category} src={button_white} />
                                    <p>{ category }</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <li key="button-contact" className="contact">
                        <button className="contact"
                            onClick={( e ) => {
                                this.toggleContact();
                            }}
                        > <img className="nav-button-white-contact" key="nav-button-contact" alt ="Contact"src={button_white} />
                        <p>contact</p>
                        </button>
                    </li>
                </ul>
            </div>

        );
    }
};
