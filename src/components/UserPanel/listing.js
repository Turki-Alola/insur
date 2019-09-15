import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Vision from '../Assets/2030.png'

export default class Listing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div color= "green" >
             <ListGroup color = "success" backgroundColor= "yellow"  success>
        <ListGroupItem href="#" tag="button"  color="" className="text-muted">
            <img src={Vision} alt="" style={{width: "64px", 
                                            height: "64px",
                                            position: "relative",
                                            float: "left"
                                            }}/>
          <ListGroupItemHeading>Custom name, default is license plate number </ListGroupItemHeading>
          <ListGroupItemText>
          Expiry date
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      </div>
        );
    }
}