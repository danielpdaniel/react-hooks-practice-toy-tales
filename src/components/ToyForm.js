import React, {useState} from "react";

function ToyForm({ onNewToy }) {
  const [newToyName, setNewToyName] = useState("");
  const [newToyImg, setNewToyImg] = useState("");

  function handleFormChange(e){
    if(e.target.name === "name"){
    setNewToyName(e.target.value)
    }else if(e.target.name === "image"){
    setNewToyImg(e.target.value)
  }
  }

  function handleSubmit(e){
    e.preventDefault();

    const newToy = {
      name: newToyName,
      image: newToyImg,
      likes: 0
    }

    onNewToy(newToy)

  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToyName}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToyImg}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
