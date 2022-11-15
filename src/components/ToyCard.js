import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  const {name, image, likes} = toy;

  function handleDelete(){
    onDelete(toy)
  };

  function handleLike(){
    onLike(toy)
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
