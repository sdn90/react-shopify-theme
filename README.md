React Shopify Theme
======================================
React components for Shopify themes.

**Features**
* Easy to test
* Server renderable
* No styles included

## Variant Selector
A higher order component for creating Variant Selectors.

```javascript
import React from 'react';
import { VariantSelectEnhance } from 'react-shopify-theme';

const VariantSelect = (props) => {
  return (
    <div>
      {props.uniqueOptions.map(unique => {
        <SelectOptions
          name={unique.name}
          values={unique.values}
          changeHandler={props.changeHandler}
        />
      })}

      <AddCartButton
        selectedVariant={props.selectedVariant}
        disabled={props.addDisabled}
      />
    </div>
  )
};

export default VariantSelectEnhance(VariantSelect);
```
