import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Vision from '../Assets/logo.ico'

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
            <div color= "green" style={{transition: "1s"}}>
             <ListGroup flush >
        <ListGroupItem href="#" tag="button" class= "border-0" color={this.getTheme()} style={{backgroundColor: "transparent", margin: "10px 15px 10px 10px"}} >
            <img src={Vision} alt="" style={{width: "64px", 
                                            height: "64px",
                                            position: "relative",
                                            float: "left"
                                            }}/>
          <ListGroupItemHeading >Custom name, default is license plate number </ListGroupItemHeading>
          <ListGroupItemText>
          Expiry date
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      </div>
        );
    }
}