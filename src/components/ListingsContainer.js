import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const[cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setCardData(data))
  }, [])

  console.log(cardData)

  const listingCards = cardData.map((listing) => {
    return <ListingCard 
        key={listing.id}
        description={listing.description} 
        image={listing.image} 
        location={listing.location} 
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
