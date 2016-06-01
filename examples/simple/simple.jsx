import React, { PropTypes } from 'react';
import VariantSelect from './../../src/variant-select';
import SelectOptions from './select-options';

const SimpleVariant = (props) => {
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

SimpleVariant.propTypes = {
  selectedOptions: PropTypes.array,
  selectedVariant: PropTypes.object,
  uniqueOptions: PropTypes.array,
  changeOption: PropTypes.func,
  addDisabled: PropTypes.boolean
};

export default VariantSelect(SimpleVariant);
