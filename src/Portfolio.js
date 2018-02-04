import React, { Component } from 'react';
import { Thumbnail } from './Thumbnail.js';

export class Portfolio extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
        this.selectEntry = props.selectEntry;
    }

    render() {
        const entries = this.props.state.config.entries;
        let content = [];
        const evenOrOdd = entries.length % 2;
        let itemsPerRow = evenOrOdd === 1 ? 4 : 3;
        let row = [];
        let rows = 0;
        for (let i = 0; i < entries.length; i += 1) {
            row.push(<Thumbnail selectEntry={this.selectEntry} state={this.props.state} id ={i} key={"thumbnail-" + i} />);
            if(row.length === itemsPerRow || i === entries.length - 1) {
                rows += 1;
                content.push(<div className="row" id={"row" + rows}>{row}</div>);
                row = [];
                if( itemsPerRow === 3) {
                    itemsPerRow += 1;
                }
                else {
                    itemsPerRow -= 1;
                }
            }
        }
        let stars = [];
        let starStyles = [
            'star1',
            'star2',
            'star3',
        ];
        for(let j = 0; j < 30; j += 1) {
            const x = Math.random()*100 + 'vw';
            const y = Math.random()*100 + 'vh';
            const delayAmount = Math.random * 10 + 's';
            const animation = 'peekaboo 10s ' + delayAmount + 'linear infinite;';
            const position = 'left: ' + x + 'vw; height: ' + y + 'vw;'
            const star = <div className={'star ' + starStyles[Math.floor(Math.random() * starStyles.length)]} style={{left: x, top: y, animation: animation}} />
            stars.push(star);
        }
        return (
            <div id="portfolio-master">
                <div id="star-holder">
                    {stars}
                </div>
                <div id="row-holder">
                    {content}
                </div>
            </div>
        );
    }
};
