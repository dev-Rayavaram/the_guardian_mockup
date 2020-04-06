import React,{Component} from 'react';
 

class SubCategory extends Component
    {
      constructor(props){
        super(props)
        this.state={
          sectionName:this.props.subCategory,
          style:{
            color:'#ab0613'
          }
        }
      }
      render(){
        return (
          <React.Fragment>
            <div className='subcategory'>

             {this.props.subCategory.map((sub) => {
            return (
                <h1 style={this.state.style}>
                    {sub}
                </h1>
            )
          })}
           </div>

          </React.Fragment>
        );
      }
        
      }
export default SubCategory;