import React,{Component} from 'react';
 

class Article extends Component
    {
      render(){
        let items = this.props.data;
        for(let i=0;i<items.length;i++){
          console.log("inside article",i);
          console.log(items[i])
        }
        return (
          <div className="App">
            <h1>Welcome to Category</h1>
      
          </div>
        );
      }
        
      }
export default Article;