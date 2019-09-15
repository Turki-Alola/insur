import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Listing from '../Forms/subforms/listing'
import '../Forms/form.css'


export default class UserPanel extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        if (this.props.display) {
            return (
                <div className ="form" id="masterForm" > 
                <div className="listing" >
                    <Scrollbars
                        autoHeight
                        autoHeightMax={window.innerHeight * 0.65}
                        universal
                    >
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                    </Scrollbars>
                </div>
                </div>
            );
        } else { return null; }
    }
}
