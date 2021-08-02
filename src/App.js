import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/signIn">{/* <SignIn /> */}</Route>
          <Route path="/register">{/* <Register /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
