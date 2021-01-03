import React, { useContext } from 'react';
import PizzaCSS from './Pizza.module.css'
import { AppDispatchContext, useStateDispatch } from './AppState';
import { Pizza as PizzaType } from '../types'

interface Props {
  pizza: PizzaType;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();
  const handleAddToCartClick = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: { id: pizza.id, name: pizza.name, price: pizza.price }
      }
    })
  }

  return <li className={PizzaCSS.container}>
    <h2>{pizza.name}</h2>
    <p>{pizza.description}</p>
    <p>{pizza.price}</p>
    <button type="button" onClick={handleAddToCartClick}>Add to Cart</button>
  </li>;
};

export default Pizza;
