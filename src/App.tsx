import React from "react";
import Landing from "./components/Landing/Landing";
import "../src/style/App.scss";
import Store from "./store/store"

class App extends React.Component {
  render() {
    return (
      <Store.Container>
        <div className="App">
          <Landing/>
        </div>
      </Store.Container>
    );
  }
}

export default App;