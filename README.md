React Shopify Theme
======================================
React components for Shopify themes

## Variant Select
The VariantSelect component passes down these props to all children

##### changeHandler (function)
##### options (array)
##### selectedOptions (object)
##### selectedVariant (object)
##### uniqueOptions (array)
##### variants (array)

### Example

##### templates/product.liquid

```liquid
<script>
var PRODUCT_JSON = {{ product | json }};
</script>
```

##### your-component.jsx
```javascript
import React from 'react';
import { VariantSelect } from 'react-shopify-theme';


export default YourComponent extends React.Component {
  render() {
    <div>
      // referencing PRODUCT_JSON set in templates/product.liquid
      <VariantSelect product={PRODUCT_JSON}/>
        <YourOptionsContainer/>
      </VariantSelect>
    </div>
  }
}
```

##### options-container.jsx
```javascript
import React from 'react';

const YourOptionsContainer = (props) => {
  render() {
    return (
      <div>

        {props.uniqueOptions.map((option, value) => {

          return (
            <YourSelect
              key={index}
              name={uniqueOption.name}
              values={uniqueOption.values}
              changeHandler={props.changeHandler}/>
          );

        })}

      </div>
    );
  }
};

export default YourOptionsContainer;
```

##### select.jsx
```javscript
import React from 'react';

const YourSelect = (props) => {
  return (
    <div>

      <h6>{props.name}</h6>

      <select onChange={props.changeHandler.bind(null, name)}>

        {props.values.map((value, index) => {
          return <option key={index} value={value}>{value}</option>
        })}

      </select>

    </div>
  );
};

export default YourSelect;
```
