import React from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import axios from 'axios';
import {Container} from 'semantic-ui-react';

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