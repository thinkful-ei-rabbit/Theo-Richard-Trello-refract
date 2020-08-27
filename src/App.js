import React from 'react';
import List from './List'
import './App.css'


const newRandomCard = ()=> {

  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
    return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
        }
       
  }
class App extends React.Component {
  state = {
  store: {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    },

    }
  
    handleAddClick = (listItem) =>{

      const newCard= newRandomCard()

      const newList=this.state.store.lists.map(list=> {
        if (list.id=== listItem){
          return {
            ...list,
            cardIds:[...list.cardIds, newCard.id]
          };
        }
        return list 
      })
      this.setState({
        store:{
          lists: newList,
          allCard:{
            ...this.state.store.allCards,
            [newCard.id]: newCard
          }
        }
     })
    }

  
  /* console.log(customLis)  */
  render() {
    const customLis = this.state.store.lists.map((list) => {
      const cards = list.cardIds.map((cardId) => {
        return this.state.store.allCards[cardId]
      })
      return <List key={list.id} id={list.id} header={list.header} cards={cards} onAdd={this.handleAddClick}/>
    });
    //const customLis = this.
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
  }
};



export default App;
