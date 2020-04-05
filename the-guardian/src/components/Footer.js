import React,{Component} from 'react';
import Navbar from '../components/Navbar.js'
 

class Footer extends Component
    {
      render(){
        return (
            <React.Fragment>
               <Navbar className='footer1'/>
                <p className='footer3'>About us<br></br>Contact us<br></br>Complaints $ Corrections</p>
                <SubFooter className='footer2'/>
            </React.Fragment>
 
        );
      }
        
    }
    function SubFooter(){
        return(
            <React.Fragment>
            <h1 style={{'fontFamily':'Jacques Francois',
            'fontSize': '30px' ,color:'gold'}}>Support The Guardian</h1><br/>
            <button >Contribute</button>
            <button >Subscribe</button>

            </React.Fragment>
        )
    }
export default Footer;