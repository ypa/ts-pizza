import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCSS from './Cart.module.css';

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={CartCSS.cartContainer}>
        <button className={CartCSS.button} type="button">
          <FiShoppingCart />
          <span>2 pizza(s)</span>
        </button>
        <div className={CartCSS.cartDropDown}>
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
