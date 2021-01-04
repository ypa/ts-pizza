import React from 'react';
import { CartItem, useStateDispatch } from './AppState';

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

// Three different ways/options to share functionalities between components

// Option 1: Higher Order Component
export function withAddToCart<OriginalProps extends AddToCartProps>(ChildComponent: React.ComponentType<OriginalProps>) {
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick: AddToCartProps['addToCart'] = (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item: item
        }
      })
    };
    return <ChildComponent {...(props as OriginalProps)} addToCart={handleAddToCartClick} />;
  };
  return AddToCartHOC;
}

// Option 2: Render Props Component
export const WithAddToCartProps: React.FC<{ children: (props: AddToCartProps) => JSX.Element }> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps['addToCart'] = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: item
      }
    })
  };
  return children({ addToCart })
};

// Option 3: Custom Hook
export const useAddToCart = () => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps['addToCart'] = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: item
      }
    })
  };

  return addToCart;
};
