import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchData, setSearchData] = useState("");

  function onSubmit(text) {
    setSearchData(text);
  }


  return (
    <div className="app">
      <Header onSubmit={onSubmit} />
      <ListingsContainer searchData={searchData} />
    </div>
  );
}

export default App;
