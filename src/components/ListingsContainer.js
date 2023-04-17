import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchData }) {
  const [cardData, setCardData] = useState([]);
  // const [deleteId, setDeleteId] = useState("");
  

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

  const searchListings = cardData.filter((listing) => {
    if (listing.description.toLowerCase().includes(searchData.toLowerCase())) {
      return listing;
    }
  })
  
  const listingCards = searchListings.map((listing) => {
    return <ListingCard 
        key={listing.id}
        id={listing.id}
        description={listing.description} 
        image={listing.image} 
        location={listing.location}
        onDelete={onDelete}
      />
  })


  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
