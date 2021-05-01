import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import "./index.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dash from './images/dash.png'
import Image from 'react-bootstrap/Image'
import MyJurnee from './components/MyJurnee';
import Recruiter_review_applicants from './components/Recruiter_review_applicants'
import Experience_card_max from "./Experience_card_max.js"
import WatchList from './components/WatchList';
import Apply from './components/Apply'


function App() {
  const [count, setCount] = useState(0);
  

  
  
  return (
    
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Sidebar recruiter={true} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Image src={Dash} rounded className="dash" />
            </Route>
            <Route path="/rucha">
              {/* Rucha enter component here */}
            </Route>
            <Route path="/myjurnee">
              <MyJurnee recruiter={false}/>
            </Route>
            <Route path="/watchlist">
              <WatchList />
            </Route>
            <Route path="/apply">
              <Apply />
            </Route>
            <Route path="/joblistings">
              {/* Nick enter component here */}
              <Recruiter_review_applicants/>

            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <Box className="box" component="span" m={1} >
    //     <TextField label="Sina" className="box"></TextField>
    //   </Box>
    // </div>
  );
}

export default App;
