[![Build Status](https://travis-ci.org/sdn90/react-shopify-theme.svg?branch=master)](https://travis-ci.org/sdn90/react-shopify-theme)

React Shopify Theme
======================================
React components for Shopify themes.

## API

### OptionSelectionEnhancer
`OptionSelectionEnhancer` is a customizable alternative to Shopify's `option_selection.js`.

`OptionSelectionEnhancer` is a [higher order component](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775).

The enhanced component will require the following props:

#### `variants: object[]`
The array of variants
#### `options: string[]`
The array of options

-----------------------------------

The new component will receive the following props:

#### `addDisabled: boolean`
If the current selected variant is **not** able to be added to the cart.

#### `changeHandler: function(optionName:string, optionValue:string) : void`
The function to change the current selected variant.

#### `hasVariants: boolean`
Whether or not there are multiple variants. Use this to determine whether or not to show input options.

#### `selectedVariant: object`
The selected variant

#### `uniqueOptions: object[]`
The unique options and values

```
[
  {
    name: 'Color',
    values: ['Blue', 'Green', 'Red']
  },
  {
    name: 'Size,
    values: ['Small', 'Medium', 'Large']
  }
]
```


## Example
> For example purposes, this example uses a `<select>`. You can change this to a radio group, `<div>`, etc.
> 
> `props.changeHandler` is just a function that takes an option name (e.g. `Color` or `Size`) and a value (e.g. `Blue` or `Medium`).

```javascript
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { OptionSelectionEnhancer } from 'react-shopify-theme';

const OptionSelector = OptionSelectorEnhancer((props) => (
  <div>
    {props.uniqueOptions.map(option => (
      <div>
        <label>{option.name}</label>
        <select
          onChange={e => props.changeHandler(option.name, e.target.value)}
        >
          {option.map(option => (
            <option value={option.value}>{option.value</value>
          ))}
        </select>
      </div>
    ))}
    
    {/* Add to Cart button */}
    <button
      disabled={props.addDisabled}
      onClick={e => someClickHandler(props.selectedVariant)}
    >
      Add to Cart
    </button>
  </div>
));

// PRODUCT is the output of {{ product | json }} in your Liquid template
ReactDOM.render(
  <OptionSelector
    variants={PRODUCT.variants}
    options={PRODUCT.options}
  />,
  document.getElementById('some-id')
);
```
