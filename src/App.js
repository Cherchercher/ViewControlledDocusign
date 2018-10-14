import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  render() {
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.iframe.bind(this)}
            >
              Click here to Secured Sign
            </Button>
            <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.about.bind(this)}
              >
              About
            </Button>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
