
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App = ()=> {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height = {3}
        color = 'red'
        progress = {progress}
        
        />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = 'homeGeneral'pageSize={6} country='in' category='general' />  }/>
          <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = 'business' pageSize={6} country='in' category='business' />  }/>
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = 'entertaiement' pageSize={6} country='in' category='entertainment' />  }/>
          <Route exact path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = 'general' pageSize={6} country='in' category='general' />  }/>
          <Route exact path="/health" element={<News    key = 'health' pageSize={6} country='in' category='health' />  }/>
          <Route exact path="/sciences" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = 'sciences' pageSize={6} country='in' category='sciences' />  }/>
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = 'sports' pageSize={6} country='in' category='sports' />  }/>
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = 'technology' pageSize={6} country='in' category='technology' />  }/>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App;


