import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

class Weather extends Component
    {
      constructor(props){
        super(props);
        this.state={
          style:{
            size:'3x'
          }
        }
      }
      render(){
        return (
          <React.Fragment>
           <div className='item1'>
                <FontAwesome
                  className=" item1  fas fa-cloud"
                  name="cloud" size={this.state.style.size}
                />
            </div>
            <div className='item2'>
                <h4><span>Plano  65 F</span></h4>
            </div>
            <div className='item3'>
                <FontAwesome
                  className="item3 fas fa-cloud"
                  name="cloud" size={this.state.style.size}
                />            </div>
            <div className='item4'>
            <FontAwesome
                  className=" item4 fas fa-cloud"
                  name="cloud" size={this.state.style.size}
                /> 
            </div>
            <div className='item5'>
                <FontAwesome
                  className=" item5 fas fa-cloud"
                  name="cloud" size={this.state.style.size}
                /> 
            </div>
 
          </React.Fragment>
       
        );
      }
        
      }
export default Weather;