[![Build Status](https://travis-ci.org/sdn90/react-shopify-theme.svg?branch=master)](https://travis-ci.org/sdn90/react-shopify-theme)

React Shopify Theme
======================================
React components for Shopify themes

## OptionSelectionEnhancer
`OptionSelectionEnhancer` is a [higher order component](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)
which handles all the state of an Option Selector.

The enhanced component will require the following props:

**variants: object[]**  
The array of variants

**options: string[]**  
The array of options

-----------------------------------

These props will automatically be passed down to your enhanced component:

**addDisabled: boolean** 
If the current selected variant is **not** able to be added to the cart.

**changeHandler: function(optionName:string, optionValue:string) : void**  
The function to change the current selected variant.

**hasVariants: boolean**  
**uniqueOptions: object** 

## Examples
[Codepen Demo](http://codepen.io/sdn90/pen/GqopoV)
