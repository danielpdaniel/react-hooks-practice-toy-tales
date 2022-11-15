import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

/*
App
|-Header
|-ToyForm
|-ToyContainer
  |-ToyCard
*/

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(resp=>resp.json())
    .then(data=>setToys(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToyObj){
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newToyObj)
    })
    .then(resp=>resp.json())
    .then(data => setToys([...toys, data]))
    
  }
  
  function handleDelete(toyToDelete){
    const toyId = toyToDelete.id
    const filteredToys = toys.filter(toy => toy.id !== toyId)
    setToys(filteredToys)

    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "DELETE",
    })
  }

  function handleLike(toy){
    const toyId = toy.id
   
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "PATCH",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify({"likes": toy.likes + 1})
    })
    .then(resp=>resp.json())
    .then(data=>{
      const newToys = toys.map(toy => toy.id === data.id ? data : toy)
      setToys(newToys)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onLike={handleLike}/>
    </>
  );
}

export default App;
