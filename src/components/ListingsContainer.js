import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ cardData, searchData, onDelete }) {
  
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
