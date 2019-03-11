import React, { Component } from 'react';
import List from "./List"
import GroceryForm from './GroceryForm';
import './App.css';

class App extends Component {
  state = { groceries: [] }

  getUniqId = () => {
   //NOTE We are just using this as a helper function for id's since we aren't using a db yet
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqId() , complete: false }
    this.setState({ groceries: [grocery, ...groceries] }); 
    }

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === id) {
          return { ...grocery, complete: !grocery.complete, }
        }
        return grocery;
      })
    })
  }
  
  // state = {
  //   groceries: [
  //     { id: 1, name: "apples", complete: true, },
  //     { id: 2, name: "bananas", complete: false, },
  //     { id: 3, name: "carrots", complete: false, },
  //   ]
  // };

  render() {
    const { groceries } = this.state;

    return (
      <div className="List">
        <List name="Grocery List" items={groceries} handleClick={this.handleClick} />
        <hr />
        <GroceryForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
