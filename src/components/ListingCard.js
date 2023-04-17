import React, { useState } from "react";

function ListingCard({ description, image, location, id, onDelete }) {
  const [liked, setLiked] = useState(false);
  
  function handleLikeClick() {
    setLiked(!liked);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    
    onDelete(id)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
