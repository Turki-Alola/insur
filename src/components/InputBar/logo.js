import React from 'react';
import './InputBar.css';
import Logo from './logo.ico'
// import ImageFrame from '../ImageFrame/ImageFrame';


let clicked = false;
export default class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicked: this.props.clicked,
            currentStep: this.props.currentStep
        };
        console.log(this.state.clicked)
        // this.click()
    }
  
    // onClick =()=>{
    //     this.props.onClick();
    // }
    
    componentDidMount() {
    }

    render() {

        return (
            <div className=''  >
                
                <button onClick={this.props.onClick} >Display</button>
                <div>
                <img src="" style={{width: "400px"}}/>
                </div>
               
            </div>
        );
    }
}

// const InputBar = ({ onInputChange, onButtonSubmit, box }) => {
//     return (
//             <div className='img' style = {{left: clicked ? "10%": "50%"}} >
//                 {/* <h3>https://cdn.faceplusplus.com/mc-official/scripts/demoScript/images/demo-pic4.jpg</h3> */}
//                 {/* <div className='w-40 center form pa4 br3 shadow-5'>
//                 <input type="text" className='w-80' onChange={onInputChange} />
//                 <button className='button near-white shadow-2 w-20  f4 ph3 pv2 '
//                     onClick={onButtonSubmit}>Submit</button>
//             </div> */}
//                 <button onClick= {click} >search</button>
//                 <div>
//                     <img src="https://imgur.com/FK8yOh0.png" />
//                 </div>
//                 {/* <ImageFrame box={box}/> */}
//                 {/* <div className='pa3 center'>
//                 <img className='center' id='faceRecognition' src='' alt="" width='500px' height='auto' />
//                 <div className='bounding_box'
//                     style={{ top: box.bottom_row, right: box.right_col, left: box.left_col, bottom: box.top_row }}>
//                 </div>
//             </div> */}
//             </div>
//     )
// }

// export default InputBar;