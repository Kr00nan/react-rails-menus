import React from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import {Container} from 'semantic-ui-react';

class App extends React.Component {
  state = {items: []};

  componentDidMount() {
    // make a call to our rails server to get menu items
  }

  addItem = (name) => {
    // make api call to rails server to add item
    // update state
  }

  updateItem = (id) => {
    // make api call to rails server to add item
    // update state
  }

  deleteItem = (id) => {
    // make api call to delete item
    // remove it from state
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