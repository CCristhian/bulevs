import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EleccionScreen, HomeScreen, SinginScreen } from "./screens";
import './App.css';
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/eleccion">
          <EleccionScreen />
        </Route>
        <Route path="/singin">
          <SinginScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
