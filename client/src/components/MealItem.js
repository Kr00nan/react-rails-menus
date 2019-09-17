import React from 'react'
import { Header, Button, Icon } from 'semantic-ui-react'

const MealItem = ({ id, name, meal_type, updateItem, deleteItem}) => (
  <div style={styles.flex}>
    <Header as='h3'>{name}</Header>
    <br />
    <br />
    <p>{meal_type}</p>
  </div>
)

const styles = {
  pointer: {
    cursor: 'pointer'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default MealItem;