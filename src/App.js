import React from 'react';
import Landing from "../src/components/Landing/Landing";
import "../src/style/App.scss";
import Store from "../src/store/store"

function App() {
  return (
    <Store.Container>
      <div className="App">
        <Landing/>
      </div>
    </Store.Container>
  );
}

export default App;