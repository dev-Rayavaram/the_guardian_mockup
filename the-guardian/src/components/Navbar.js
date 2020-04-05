import React,{Component} from 'react';
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'
import Main from '../components/Main.js'


export default class Navbar extends Component
    {
      constructor(props){
        super(props);
        this.state={
          style:{
            'textDecoration':'none',
            backgroundColor:'#005689',
            color:'white',
            border:'white',
            'fontFamily':'Jacques Francois',
            'fontSize': '30px'
          }
        }
        // this.onMouseOver =  this.onMouseOver.bind(this);
        // this.onMouseClick= this.onMouseClick.bind(this);          

      }
      onMouseOver=(event)=>{
    
            
        console.log(this.state.style.backgroundColor)
      }
      onMouseClick=(event)=>{
        event.preventDefault();
        console.log("inside mouse over")
        if(event.target.innerHTML === 'News'){
          alert('News')
        }
        else if(event.target.innerHTML === 'Opinion'){
          // this.setState({style:{border:'orange'}});
          alert('Opinion')

        }
        else if(event.target.innerHTML === 'Sport'){
          alert('Sport')
        }
        else if(event.target.innerHTML === 'Sport'){
        }
        else if(event.target.innerHTML === 'Culture'){

        }
        else if(event.target.innerHTML === 'LifeStyle'){

        }  
      }

      render(){
        return (
 
          <Router>  
          <div>
            <nav>
                <ul>
                  <li>
                  <Link to="#"  style={this.state.style} onClick={this.onMouseClick} >News</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style} onClick={this.onMouseClick}>Opinion</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style} onClick={this.onMouseClick}>Sport</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style} onClick={this.onMouseClick}>Culture</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style} onClick={this.onMouseOver}>LifeStyle</Link>
                </li> 
              </ul>
            </nav>
            <Switch>
                <Route exact path="/News" component={News}>          
                </Route>
                <Route exact path="/Opinion" component={Opinion}>          
                </Route>
                <Route exact path="/Sport" component={Sport}>          
                </Route>
                <Route exact path="/Culture" component={Culture}>          
                </Route>
                <Route exact path="/LifeStyle" component={LifeStyle}>          
                </Route>

            </Switch>
           </div>
         </Router>
            );
      }
        
    } 

      class News extends Component {
        constructor(props){
          super(props);
         }
         
        render(){
          return(
            <span></span>
          );
        }
 }

          class Opinion extends Component {
            render(){
              return(
                <span></span>

              );
            

            }
     }
          class Sport extends Component {
            render(){
              return(
                <span></span>

              );
            

            }
     }
            class Culture extends Component {
              render(){
                return(
                  <span> </span>

                );
              
  
              }
       }
            class LifeStyle extends Component {
              render(){
                return(
                  <span> </span>

                )
              
  
              }
       }