import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.css';
//components
import Logo from './components/InputBar/logo.js';
import Form from './components/InputBar/form2.js';
import Header from './components/InputBar/header'



const ParticlesOptions = {
  particles: {
    number: {
      value: 5,
      density: {
        enable: false,
        value_area: 1000,
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      display: true
    }
  }
  click = () => {
    console.log('clicked');
    this.setState({
      clicked: !this.state.clicked,
      currentStep: 1
    });
    this.displayForm();
    // this.render();
  }
  displayForm = () => {
    console.log(this.state.display);
    this.setState({
      display: !this.state.display,
      currentStep: 1
    })
  }

  render() {
    return (
      <div className='App'>
        <Particles 
        className='particles'
          params={ParticlesOptions}
          style={{
            width: '100%',
          }}
        />
        <Header />
        <Logo onClick={this.click} clicked={this.state.clicked} />
        <Form display={this.state.display} onClick={this.displayForm} currentStep = {this.state.currentStep} />

      </div>
    );
  }
}

export default App;
