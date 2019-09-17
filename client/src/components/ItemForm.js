import React from 'react';
import {Form, Select} from 'semantic-ui-react';

const options = [
  { key: 'b', text: 'Breakfast', value: 'breakfast' },
  { key: 'l', text: 'Lunch', value: 'lunch' },
  { key: 'd', text: 'Dinner', value: 'Dinner' },
]

class ItemForm extends React.Component {
  state = {name: '', meal_type: ''};

  handleChange = (e) => {
    this.setState({ name: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name, this.state.meal_type);
    this.setState({name: '', meal_type: ''});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
        <Form.Input
          label="Name"
          placeholder="Name of the dish"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
        <Form.Field
          control={Select}
          label='Meal Type'
          options={options}
          value={this.state.meal_type}
          placeholder='Meal Type'
          />
        </Form.Group>
      </Form>
    )
  }

}

export default ItemForm;