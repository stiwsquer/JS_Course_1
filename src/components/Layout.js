import { func } from "prop-types";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewsletterForm from "./NewsletterForm";
import SignIn from "./SignIn";
import Register from "./Register";

export default function Layout(props) {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <NewsletterForm />
      <Footer />
    </Router>
  );
}
