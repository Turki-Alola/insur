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
            <div>
             <ListGroup flush >
        <ListGroupItem href="#" tag="button"   style={{backgroundColor: "transparent", margin: "10px 15px 10px 10px"}} >
            <img src={Vision} alt="" style={{width: "64px", 
                                            height: "64px",
                                            position: "relative",
                                            float: "left"
                                            }}/>
          <ListGroupItemHeading >{this.props.name} </ListGroupItemHeading>
          <ListGroupItemText>
          {this.props.date}
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      </div>
        );
    }
}