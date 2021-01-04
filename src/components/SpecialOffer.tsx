import React from 'react';
import { Pizza as PizzaType } from '../types';
import { AddToCartProps, withAddToCart } from './AddToCart';
import SpecialOfferCSS from './SpecialOffer.module.css';

interface Props extends AddToCartProps {
  pizza: PizzaType;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  }

  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>Add to Cart</button>
    </div>
  );
}

export default withAddToCart(SpecialOffer);
