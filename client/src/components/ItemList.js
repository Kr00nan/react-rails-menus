import React from 'react';
import MealItem from './MealItem';

const MenuList = ({ items, updateItem, deleteItem}) => (
  <React.Fragment>
    {items.map( item =>
      <MealItem
        key={item.id}
        {...item}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
      )
    }
  </React.Fragment>
)

export default MenuList;