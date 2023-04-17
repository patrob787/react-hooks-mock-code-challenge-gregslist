import React, { useState } from 'react'

function Submit({ onFormSubmit }) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

 function handleDescChange(e) {
    setDescription(e.target.value)
  }

  function handleLocChange(e) {
    setLocation(e.target.value)
  }

  function handleImgChange(e) {
    setImage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const newListing = {
        description: description,
        image: image,
        location: location
    }

    fetch("http://localhost:6001/listings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newListing)
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
        onFormSubmit(data);
    })

    //console.log(newListing, "from submit")
    //onFormSubmit(newListing);
  }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Description: </label>
            <input onChange={handleDescChange} type="text" value={description} placeholder='description' />
            <label> Location: </label>
            <input onChange={handleLocChange}  type="text" value={location} placeholder='location' />
            <label> Image URL: </label>
            <input onChange={handleImgChange}  type='text' value={image} placeholder='image' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Submit