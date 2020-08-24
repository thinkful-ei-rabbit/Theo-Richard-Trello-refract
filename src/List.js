import React from 'react'
import Card from './Card'

function List(prop) {
  return (
    <section class="List">
      <header class="List-header">
        <h2>{prop.header}</h2>
      </header>
      <div class="List-cards">
        {prop.card}
      </div>
    </section>
  );
}

export default List;