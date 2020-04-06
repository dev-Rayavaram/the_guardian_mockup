import React,{Component} from 'react';
 import image from '../assets/images/5000.jpg'

class Main extends Component
    {
      render(){
        return (
          <React.Fragment>
           <h1>{this.props.main.webTitle}</h1><caption>{this.props.main.webPublicationDate}</caption>
           <div>
              <img src={image} alt="main" width='100%' height='400px'></img>
           </div>
          </React.Fragment>
        );
      }
        
      }
export default Main;