import React, { PropTypes } from 'react';

const AddToCartButton = (props) => {
  const message = () => {
    if (props.selectedVariant) {
      if (!props.disabled) {
        return 'Add to Cart';
      } else {
        return 'Out of Stock';
      }
    } else {
      return 'Unavailable';
    }
  };
  return (
    <button disabled={props.disabled}>{message}</button>
  );
};

AddToCartButton.propTypes = {
  disabled: PropTypes.boolean,
  selectedVariant: PropTypes.object
};

export default AddToCartButton;
