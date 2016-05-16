import React from 'react';

export default class ProductAutocomplete extends React.Component {
  constructor() {
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
