import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Main from "./Components/Main.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
