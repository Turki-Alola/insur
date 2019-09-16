import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Listing from './panelListing.js'
import '../Forms/form.css'


export default class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ""
        }
    }

    getTheme = () =>{
        this.setState({
            theme: this.props.panel
        });
        return this.state.theme;
    }
    render() {
        if (this.props.display) {
            return (
                <div className ="form" id="masterForm" > 
                    <span>{this.props.panel}</span>
                <div className="listing" >
                    <Scrollbars
                        autoHeight
                        autoHeightMax={window.innerHeight * 0.65}
                        universal
                    >
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>
                    <Listing panel = {this.props.panel}/>

                        
                    </Scrollbars>
                </div>
                </div>
            );
        } else { return null; }
    }
}
