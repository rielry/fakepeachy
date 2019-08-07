import React from "react";
import AppBody from "./components/AppBody/AppBody";
import "../src/style/App.scss";
import Store from "./store/store";

class App extends React.Component {
  render() {
    return (
      <Store.Container>
        <div className="App">
          <AppBody/>
        </div>
      </Store.Container>
    );
  }
}

export default App;