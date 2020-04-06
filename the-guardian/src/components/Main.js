import React,{Component} from 'react';
 import image from '../assets/images/1208.jpg'

class Main extends Component
    {
      render(){
        const openInNewTab=(url)=> {
           window.open(url, '_blank');
        }
        return (
          <React.Fragment>
           <h1>{this.props.main.webTitle}</h1><caption>{this.props.main.webPublicationDate}</caption>
           <div>
              <img src={image} alt="main" width='400px' height='400px'></img>
           </div>
          </React.Fragment>
        );
      }
        
      }
export default Main;