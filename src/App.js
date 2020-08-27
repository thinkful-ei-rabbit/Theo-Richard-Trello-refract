import React from 'react';
import List from './List';
import './App.css';
import STORE from './store';

class App extends React.Component {
  state = {
  store: STORE,
  newRandomCard: (keyId) => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    console.log(keyId)
    console.log(id);
    /*  this.setState({
          id,
          title: `Random Card ${id}`,
          content: 'lorem ipsum',
          }
      ) */ 
      console.log(this.state.store.allCards)
    /*  this.setState({
        store: {
            // Order is important!
            ...this.state.store,
            allCards: {
            ...this.state.store.allCards,
            id: id,
            title: `Random Card ${id}`,
            content: 'lorem ipsum',
            }
        }
    }); */
    console.log(this.state)
    }
    }
  

  
  render() {
    const { store } = this.state
    const customLis = store.lists.map((list) => {
      const cards = list.cardIds.map((cardId) => {
        return store.allCards[cardId]
      })
      return <List key={list.id} header={list.header} cards={cards} handler={this.state.newRandomCard}/>
    });
  
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
