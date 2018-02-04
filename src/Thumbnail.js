import React, { Component } from 'react';
import color_design from './media/color_design.svg';
import color_dev from './media/color_dev.svg';
import color_illustration from './media/color_illustration.svg';

export class Thumbnail extends Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.selectEntry = props.selectEntry;
    }
    render() {
        const state = this.props.state;
        let entry = state.config.entries[this.props.id];
        let tagMatch = 'no-match';
        if (entry.tags && Object.values(state.tags).indexOf(true) === -1 ) {
            tagMatch = '';
        }
        // otherwise, check to see if any value of entry.tags matches any true value of state.tags
        else if (entry.tags) {
            for (let j = 0; j < entry.tags.length; j += 1) {
                console.log(entry.tags[j]);
                if(state.tags[entry.tags[j]]) {
                    tagMatch = 'match';
                    break;
                }
            }
        }
        let className = '';
        let tagNames = '';
        if(entry.tags){
            for (let k = 0; k < entry.tags.length; k += 1){
                tagNames += entry.tags[k] + ' ';
            }
        }
        className += tagNames;
        className += entry.thumbnailShape || '';
        className += ' thumbnail ';
        className += tagMatch;
        let classIllustration = 'color color-illustration ' + tagNames;
        let classDesign = 'color color-design ' + tagNames;
        let classDev = 'color color-dev ' + tagNames;
        // className += entry.color || '';
        let inner;
        if ( entry.title ){
            inner = <div className="thumbnail-content-holder">
                <img alt="" src={color_illustration} className={classIllustration} />
                <img alt="" src={color_design} className={classDesign} />
                <img alt="" src={color_dev} className={classDev} />
                <img alt="thumbnail" src={entry.thumbnail} className="thumbnail-preview" />
                <button
                    onClick={( e ) => {
                        this.selectEntry(this.props.id);

                    }}
                >
                </button>
            </div>
        }
        return (
            <div className={className}>
                {inner}
            </div>
        );
    }
};
