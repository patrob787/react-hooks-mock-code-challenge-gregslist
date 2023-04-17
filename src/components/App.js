import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchData, setSearchData] = useState("");
  //const [newListing, setNewListing] = useState({})
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setCardData(data))
  }, [])

  function onDelete(id) {
    const reducedListings = cardData.filter((listing) => {
      return listing.id !== id;
    })
    setCardData(reducedListings);
  }

  function onSubmit(text) {
    setSearchData(text);
  }

  function onFormSubmit(obj) {
    //console.log(obj, "from app")
    const newListings = [...cardData, obj]
    console.log(newListings)
    setCardData(newListings); 
  }


  return (
    <div className="app">
      <Header onSubmit={onSubmit} onFormSubmit={onFormSubmit} />
      <ListingsContainer 
        cardData={cardData}
        searchData={searchData}
        onDelete={onDelete} />
    </div>
  );
}

export default App;
