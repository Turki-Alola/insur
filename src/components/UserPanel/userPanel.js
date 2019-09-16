import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button } from 'reactstrap';
import Listing from './panelListing.js'
import '../Forms/form.css'
import './panelListing.css'


export default class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ""
        }
    }

    get getIndicator (){
        switch (this.props.panel){
            case "goodStanding":
                return (
                    <Button color="success" id="btn-circle" data-tip="Polices in good standings" >3</Button>
                );
            case "nearExpiry":
                return(
                    <Button color="warning" id="btn-circle" data-tip="Polices near expiry" >2</Button>
                );
            case "expired":
                return(
                    <Button color="danger" id="btn-circle" data-tip="Polices in good standings" >4</Button>
                );
        }
    }
      getCount = ()=>{
        let i =0;
        switch (this.props.panel){
            case "goodStanding":
                return 3;
            case "nearExpiry":
                return 2;
            case "expired":
                return 4;
        }
    }

     get getListing (){
        let listings = []
        let count = this.getCount();
        for (let i =0; i < count; i++){
            listings.push(<Listing/>);
        }
        console.log(listings)
        return listings;
    }

    render() {
        if (this.props.display) {
            return (
                <div className ="form" id="masterForm" > 
                    <div id="shapeContainer">
                    {this.getIndicator}
                    </div>
                <div className="listing" >
                    <Scrollbars
                        autoHeight
                        autoHeightMax={window.innerHeight * 0.65}
                        universal
                    >
                    {this.getListing}
                    </Scrollbars>
                </div>
                </div>
            );
        } else { return null; }
    }
}
