import React from 'react';
import './App.css';
import axios from 'axios'
import Article from './components/Article.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

import Main from './components/Main.js'

import Rightbar from './components/Rightbar.js'
import SubCategory from './components/SubCategory.js'
import Weather from './components/Weather.js'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      category:'News',
      data:'',
      sectionNames:[],
      main:{
        id:'',
        sectionId:'',
        webPublicationDate:'',
        webTitle:'',
        sectionName:'',
        webUrl:''
      }
    }
  }
  
  onLinkClicked=(category)=>{
    this.setState({category:category})
  //  console.log("parent",this.state.category);

    
  }
  
  componentDidMount() {
   const getMainItem =items=>{
    let localObject={};

        localObject.id = items.id;
        localObject.sectionId = items.sectionId;
        localObject.webPublicationDate = items.webPublicationDate;
        localObject.webTitle = items.webTitle;
        localObject.sectionName = items.sectionName;
        localObject.webUrl = items.webUrl;
        this.setState({main: localObject})
    }
    let apiKey=process.env.REACT_APP_API_KEY
     axios.get(`https://content.guardianapis.com/search?api-key=${apiKey}`)
    .then(res => {
      const results = res.data.response.results;
     // console.log("results ---->", results)      
      this.setState({data: results});
      //console.log(this.state.data)
      let items=this.state.data;
      let Names=[];
      for(let i=0; i<items.length;i++){
      //  console.log(items[i].sectionName)
        Names.push(items[i].sectionName);
      }
      getMainItem(items[0]);
     // console.log("main",this.state.main);
      this.setState({sectionNames:Names})
    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }
  render() {
    return (
        <div className='App'>
          <div className='header'>
            <div className='headerLeft'>
              <div className='weather'>
                <Weather/>
              </div>
              <div className='navbar'>
                <Navbar onLinkClicked={this.onLinkClicked}/>
              </div>
             </div>
            <div className='headerRight'>
              <Rightbar/>
             </div>
         </div>
          <div className='body'>
              <div className='left'>
                <div className='sub-category'><SubCategory subCategory={this.state.sectionNames} /></div>
              </div>
              <div className='main'>
                <div className='box1'>
                    <Main main={this.state.main} />
                </div>
                  <Article data={this.state.main}/>
              </div>
          </div>
          <div className='footer'><Footer/></div>

        </div>
    )
    
   
  }
}
  
  export default App;
