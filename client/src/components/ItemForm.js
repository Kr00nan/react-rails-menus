import React from 'react';
import {Form} from 'semantic-ui-react';

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
        <Form.Input
          label="Name"
          placeholder="Name of the dish"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Meal Type"
          placeholder="Breakfast, Lunch, or Dinner"
          required
          value={this.state.meal_type}
          onChange={this.handleChange}
        />
      </Form>
    )
  }

}

export default ItemForm;