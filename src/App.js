import React, { Component } from 'react';
import CotrollPanel from "./components/CotrollPanel";
import BillBoard from "./components/BillBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CotrollPanel/>
        <BillBoard area='서울'/>
        <BillBoard area='부산'/>
        <BillBoard area='대구'/>
        <BillBoard area='광주'/>
      </div>
    );
  }
}

export default App;
