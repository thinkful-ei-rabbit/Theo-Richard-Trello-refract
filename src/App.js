import React from 'react';
import List from './List'
import './App.css'

function App(prop) {
  const customLis = prop.store.lists.map(function(list) {
    const cards = list.cardIds.map(function (cardId){
      return prop.store.allCards[cardId]
    })
    return <List key={list.id} header={list.header} cards={cards} />
  });
  /* console.log(customLis)  */
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {customLis}
      </div>
    </main>
  )
};



export default App;
