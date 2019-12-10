import React, { Component } from 'react';
import logo from './logo.svg';
import APIKey from './config.js';

import Search from './Search';
import Nav from './Nav';
import PhotoGallery from './PhotoGallery';

class App extends Component {
  state = {
    searchQuery: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchQuery);
    this.setState({ searchQuery: ''});
  }

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }


  render() {
    return (
      <div className="container">
        <Search 
          submit={this.handleSubmit}
          query={this.state.searchQuery}
          changeQuery={this.handleInputChange}
        />
        <Nav />
        <PhotoGallery 
          results={this.state.searchQuery}
        />
      </div>
        
    );
  }
}

export default App;
