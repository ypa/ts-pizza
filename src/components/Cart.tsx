import React from 'react';
import { ProgressPlugin } from 'webpack';
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
        <button className={CartCSS.button} type="button">2 pizza(s)</button>
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
