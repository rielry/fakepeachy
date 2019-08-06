import React from "react";
import Home from "./components/Home/Home";
import "../src/style/App.scss";
import Store from "./store/store"

class App extends React.Component {
  render() {
    return (
      <Store.Container>
        <div className="App">
          <Home/>
        </div>
      </Store.Container>
    );
  }
}

export default App;