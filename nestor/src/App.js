import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import "./index.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Experience_card_max from "./Experience_card_max.js"
import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  
  return (
    
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route path="/rucha">
              {/* Rucha enter component here */}
            </Route>
            <Route path="/nick">
              {/* Nick enter component here */}
              <Experience_card_max/>
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
