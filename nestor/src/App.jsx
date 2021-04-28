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

function App() {
  
  const [count, setCount] = useState(0);

  
  
  return (
    
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Image src={Dash} rounded className="dash" />
            </Route>
            <Route path="/rucha">
              {/* Rucha enter component here */}
            </Route>
            <Route path="/myjurnee">
              <MyJurnee />
            </Route>
            <Route path="/nick">
              {/* Nick enter component here */}
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