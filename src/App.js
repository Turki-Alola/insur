import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.css';
//components
import Logo from './components/Forms/logo.js';
import Form from './components/Forms/form2.js';
import Header from './components/Header/header';
import UserPanel from './components/UserPanel/policyPanel.js'



const ParticlesOptions = {
  particles: {
    number: {
      value: 7,
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
      currentStep: 1,
      display: 'form',
      panelDisplay: ""

    }
  }
  // click = () => {
  //   console.log('clicked');
  //   this.setState({
  //     clicked: !this.state.clicked,
  //     currentStep: 1
  //   });
  //   this.displayForm();
  //   // this.render();
  // }
  displayForm = () => {
    this.setState({
      currentStep: 1,
      display: 'form'
    })
  }
  handlePanelDisplay = (event) =>{
    const value = event.target.value;
    this.setState({
      panelDisplay: value,
      display: 'panel'
    }) 
    console.log(value);
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
        <Header onClick={this.handlePanelDisplay}/>
        <Logo onClick={this.displayForm}  />
        <Form display={this.state.display} onClick={this.displayForm} currentStep = {this.state.currentStep} />
        <UserPanel display={this.state.display}   panel = {this.state.panelDisplay}/>

      </div>
    );
  }
}

export default App;
