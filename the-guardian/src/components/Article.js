import React,{Component} from 'react';
 

class Article extends Component
    {
      render(){
       
        return (
          <div className='box2'>
            <h1>{this.props.data}</h1>
      
          </div>
        );
      }
        
      }
export default Article;