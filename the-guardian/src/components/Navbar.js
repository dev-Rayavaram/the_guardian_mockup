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
            'fontFamily':'Jacques Francois',
            'fontSize': '30px'
          }
        }
      }
      render(){
        return (
 
          <Router>  
          <div>
            <nav>
                <ul>
                  <li>
                  <Link to="#"  style={this.state.style}>News</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style}>Opinion</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style}>Sport</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style}>Culture</Link>
                </li>
                <li>
                  <Link to="#"  style={this.state.style}>LifeStyle</Link>
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