import React from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import axios from 'axios';
import {Container} from 'semantic-ui-react';

// So, I got the data passing from my rails app to my react app. The more I fiddled with it after that, the more I broke it.

// I wanted to create one table on the backend with the meal_type being which menu the food item would populate on the front end.

// There would be 3 menus present across 3 columns with the food items populating the menus.

// Adding an item would allow the user to specify which menu to display it. I got the dropdown menu working...

class App extends React.Component {
  state = {items: []};

  componentDidMount() {
    // make a call to our rails server to get menu items
    axios.get('/api/menu_items')
    .then( res => {
      this.setState({items: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  addItem = (name, meal_type) => {
    // make api call to rails server to add item
    axios.post('/api/items', {name, meal_type})
    .then(res => {
      // update state
      const {items} = this.state;
      this.setState({items: [...items, res.data]});
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateItem = (id) => {
    // make api call to rails server to add item
    axios.put(`/api/items/${id}`)
    .then( res => {
      const items = this.state.items.map( t => {
        if (t.id === id)
        return res.data;
        return t;
      })
      // update state
      this.setState({items});
    })
  }

  deleteItem = (id) => {
    // make api call to delete item
    // remove it from state
    axios.delete(`/api/items/${id}`)
    .then( res => {
      const {items} = this.state;
      this.setState({ items: items.filter(t => t.id !== id)})
    })
  }

  render() {
    return (
      <Container style={{padding: '30px 0'}}>
        <ItemForm addItem={this.addItem} />
        <br />
        <br />
        <ItemList
          items={this.state.items}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </Container>
    )
  }

};

export default App;