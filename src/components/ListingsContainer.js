import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchData }) {
  const[cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setCardData(data))
  }, [])

  const searchListings = cardData.filter((listing) => {
    console.log(listing.description)
    console.log(searchData)
    if (listing.description.toLowerCase().includes(searchData.toLowerCase())) {
      return listing;
    }
  })
  
  const listingCards = searchListings.map((listing) => {
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
