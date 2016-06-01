import React from 'react';
import fetch from 'fetch-ponyfill';

export default function CartEnhancer(ComposedComponent) {
  return class Cart extends React.Component {
    constructor() {
      super();

      this.state = {
        isLoading: false,
        cart: {
          attributes: {},
          items: [{
            discounts: [],
            gift_card: false,
            grams: 0,
            handle: '',
            id: 0,
            image: '',
            key: '',
            line_price: 0,
            original_line_price: 0,
            price: 0,
            product_description: '',
            product_id: 0,
            product_title: '',
            product_type: '',
            properties: {},
            quantity: 0,
            requires_shipping: true,
            sku: '',
            title: '',
            total_discount: 0,
            url: '',
            variant_id: 0,
            variant_options: [''],
            variant_title: '',
            vendor: ''
          }],
          note: null,
          original_total_price: 0,
          requires_shipping: true,
          token: '',
          total_discount: 0,
          total_price: 0,
          total_weight: 0,
        }
      };
    }
    getCart() {
      this.setState({ isLoading: true });

      return fetch('/cart.js')
        .then(res => res.json())
        .then(json => {
          this.setState({ isLoading: false })
          return json;
        });
    }
    updateItem(id, quantity) {
      this.setState({ isLoading: true });

      return fetch('/cart/update.js', {
        method: 'POST',
        body: JSON.stringify({
          id, quantity
        })
        .then(res => res.json())
        .then(json => {
          this.setState({ isLoading: false })
          return json;
        });
      })
    }
    removeItem(id) {
      return this.updateItem(id, 0);
    }
    addItem(id, quantity) {
      this.setState({ isLoading: true });

      return fetch('/cart/add.js', {
        method: 'POST',
        body: JSON.stringify({
          id, quantity
        })
        .then(res => res.json())
        .then(json => {
          this.setState({ isLoading: true });
          return json;
        })
      })
    }
    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
        />
      )
    }
  }
}
