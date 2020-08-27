import React from 'react'
import Card from './Card'
import './List.css'

function List(prop) {
   const customLis = prop.cards.map((card) => {
    return <Card key={card.id} id={card.id} title={card.title} content={card.content} onDelete={prop.onDelete} cards={prop.cards}/>
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{prop.header}</h2>
      </header>
      <div className="List-cards">
      {customLis}
      <button onClick={()=>prop.onAdd(prop.id)}type="button" className="List-add-button">
              + Add Random Card
            </button>
      </div>
      
    </section>
  )
 
}

List.defaultProps={
  onAdd: ()=>{}
}
export default List;