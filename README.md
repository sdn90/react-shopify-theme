[![Build Status](https://travis-ci.org/sdn90/react-shopify-theme.svg?branch=master)](https://travis-ci.org/sdn90/react-shopify-theme)

React Shopify Theme
======================================
React components for Shopify themes

## OptionSelectionEnhancer
`OptionSelectionEnhancer` is a [higher order component](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)
which handles all the state of an Option Selector.

The enhanced component will require the following props:

## variants: object[]
The array of variants
## options: string[]
The array of options

-----------------------------------

These props will automatically be passed down to your enhanced component:

## addDisabled: boolean
If the current selected variant is **not** able to be added to the cart.

## changeHandler: function(optionName:string, optionValue:string) : void
The function to change the current selected variant.

## hasVariants: boolean
## uniqueOptions: object

```javascript
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { OptionSelectionEnhancer } from 'react-shopify-theme';

const OptionSelector = OptionSelectorEnhancer((props) => {
  // you can now access the props listed above
  return <div/>
});

// PRODUCT is the output of {{ product | json }} in your Liquid template
ReactDOM.render(
  <OptionSelector
    variants={PRODUCT.variants}
    options={PRODUCT.options}
  />,
  document.getElementById('some-id')
);
```
