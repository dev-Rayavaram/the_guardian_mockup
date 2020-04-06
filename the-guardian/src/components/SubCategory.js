import React,{Component} from 'react';
 

class SubCategory extends Component
    {
      constructor(props){
        super(props)
        this.state={
          sectionName:this.props.subCategory
        }
      }
      render(){
        return (
          <div className="App">
            <h1>{this.props.subCategory}</h1>
          </div>
        );
      }
        
      }
export default SubCategory;