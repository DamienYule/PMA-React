import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "./Components/Style/Body.css"
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route exact path="/snacks">
              <Index />
            </Route>
            <Route path="/snacks/new">
              <New />
            </Route>
            <Route exact path="/snacks/:id">
              <Show />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
