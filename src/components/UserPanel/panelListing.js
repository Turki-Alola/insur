import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Vision from '../Assets/logo.ico'
import "./panelListing.css"

export default class Listing extends React.Component{
    
    constructor(props){
        super(props);
    }

    getTheme = () =>{
        let theme;
        switch (this.props.panel){
            case "goodStanding":
                theme = "success";
                break;
            case "nearExpiry":
                 theme = "warning";
                 break;
            case "expired":
                 theme = "danger";
                 break;
            default:
                 theme = ""
        }
        return theme;
    }

   
    render(){
        return(
            <div>
             <ListGroup flush>
        <ListGroupItem  tag="button" id = "listing"   >
            <img src={Vision} alt="" style={{width: "64px", 
                                            height: "64px",
                                            position: "relative",
                                            float: "left"
                                            }}/>
            <div style={{textAlign: "left", marginLeft: "14%", position: "relative"}}>
          <ListGroupItemHeading >{this.props.name} </ListGroupItemHeading>
          <ListGroupItemText style={{marginLeft: "px"}}>
          {this.props.date}
          </ListGroupItemText>
            </div>
        </ListGroupItem>
      </ListGroup>
      </div>
        );
    }
}