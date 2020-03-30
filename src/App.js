import React, { Component } from 'react';
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main style={{ marginTop: "64px" }}>
          <p>this is fucking shit</p>
        </main>
      </div>
    );
  }
}

export default App;
