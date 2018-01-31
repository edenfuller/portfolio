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
        const itemsPerRow = 4;
        let row = [];
        let rows = 0;
        for (let i = 0; i < entries.length; i += 1) {
            row.push(<Thumbnail selectEntry={this.selectEntry} state={this.props.state} id ={i} key={"thumbnail-" + i} />);
            if(row.length === itemsPerRow || i === entries.length - 1) {
                rows += 1;
                content.push(<div className="row" id={"row" + rows}>{row}</div>);
                row = [];
            }
        }
        return (
          <div id="row-holder">
              {content}
          </div>
        );
    }
};
