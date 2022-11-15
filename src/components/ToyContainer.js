import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */
    toys ? toys.map(toy => <ToyCard key={toy.id} toy={toy} onDelete={onDelete} onLike={onLike}/>) : <h2>Loading...</h2>
    }</div>
  );
}

export default ToyContainer;
