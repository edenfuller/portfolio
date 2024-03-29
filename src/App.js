import React, { Component } from 'react';
import { config } from './config.js';
import './App.css';
import { Entry } from './Entry.js';
import { Portfolio } from './Portfolio.js';
import { Nav } from './Nav.js';
import { About } from './About.js';
import { Contact } from './Contact.js';

const startingState = {
    config,
    entry: undefined,
    showAbout: false,
    showContact: false,
    tags: {},
}

class App extends Component {
    constructor() {
        super();
        this.state = startingState;
        for ( let i = 0; i < config.categories.length; i += 1) {
            this.state.tags[config.categories[i]] = false;
        }
        this.selectEntry = this.selectEntry.bind( this );
        this.hideEntry = this.hideEntry.bind( this );
        this.selectCategory = this.selectCategory.bind( this );
        this.toggleAbout = this.toggleAbout.bind( this );
        this.toggleContact = this.toggleContact.bind( this );
    }
    selectEntry(id) {
        this.setState({ entry: config.entries[id] });
    }

    selectCategory(tag) {
        const newTags = this.state.tags;
        newTags[tag] = !newTags[tag];
        this.setState(newTags);
    }
    hideEntry() {
        this.setState({ entry: undefined });
    }
    toggleAbout() {
        this.setState({ showAbout: !this.state.showAbout });
    }
    toggleContact() {
        this.setState({ showContact: !this.state.showContact });
    }
  render() {
    return (
      <div className="App">
        <Portfolio state={this.state} selectEntry={this.selectEntry} />
        <Nav state={this.state} selectCategory={this.selectCategory} toggleContact={this.toggleContact} toggleAbout={this.toggleAbout} />
        <Entry state={this.state} selectEntry={this.selectEntry} hideEntry={this.hideEntry} />
        <About state={this.state} toggleAbout={this.toggleAbout} toggleContact={this.toggleContact} />
        <Contact state={this.state} toggleContact={this.toggleContact} />
      </div>
    );
  }
}

export default App;
