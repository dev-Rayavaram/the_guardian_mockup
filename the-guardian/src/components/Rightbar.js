import React,{Component} from 'react';
 

class Rightbar extends Component
    {
      constructor(props){
        super(props);
        this.state={
          style:{
            align:'left',
            color:'white' ,
            size:'25 px',
            padding:'5px',
            'fontStyle':'bold'
          }
        }
      
      }
      render(){
        return (
          <div>
              <p style={this.state.style}>Sign up | Search | Search Jobs </p>
              <p className='right2' style={this.state.style}> US Edition</p>
          </div>

        );
      }
        
      }
export default Rightbar;