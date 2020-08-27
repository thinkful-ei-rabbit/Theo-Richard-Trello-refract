import React from 'react'
import Card from './Card'
import './List.css'

function List(prop) {
   const customLis = prop.cards.map(function(card) {
    return <Card key={card.id} title={card.title} content={card.content}/>
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{prop.header}</h2>
      </header>
      <div className="List-cards">
      {customLis}
      <button onClick={prop.handler()}type="button" className="List-add-button">
              + Add Random Card
            </button>
      </div>
      
    </section>
  );
}

export default List;