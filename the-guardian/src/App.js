import React from 'react';
import { FontAwesome} from 'react-fontawesome'
import './App.css';
import Article from './components/Article.js'
import Leftbar from './components/Leftbar.js'
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'

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
              <Rightbar/>
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
