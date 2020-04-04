import React from 'react';
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import Article from './components/Article.js'
import Leftbar from './components/Leftbar.js'
import Main from './components/Main.js'
import Navbar from './components/Navbar.js'
import Rightbar from './components/Rightbar.js'
import SubCategory from './components/SubCategory.js'
import Weather from './components/Weather.js'
class App extends React.Component {
  state = {
    rowData: [{
      id: 1,
      style: {
        color: 'blue'
      }
    }, 
    {
      id: 2,
      style: {
        color: 'blue',
        backgroundColor: '#000',
        width: "100%",
        fontSize: "2em"
      }
    }]
  }; 
  render() {
    return (
        <div className='App'>
          <div className='header'>
            <div className='headerLeft'>
              <div className='weather'>
                <Weather/>
              </div>
              <div className='navbar'>
                <Navbar/>
              </div>
             </div>
            <div className='headerRight'>
              <div className='rightheader1'>
                HI
              </div>
              <div className='rightheader2'>
                HI
              </div>
            </div>
         </div>
          <div className='body'>
              <div className='left'>
                <div className='sub-category'>HI</div>
              </div>
              <div className='main'>
                <div className='box1'>Hi</div>
              </div>
          </div>
          <div className='footer'>Hi</div>

        </div>
    )
    
   
  }}
  
  export default App;