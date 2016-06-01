import React, { PropTypes } from 'react';

const SelectOptions = (props) => {
  const handleChange = e => {
    props.changeHandler(props.name, e.target.value )
  };
  return (
    <div>
      <label>{props.name}</label>
      <select onChange={handleChange}>
        {props.values.map((value, index) => {
          return (
            <option
              key={index}
              value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectOptions.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,
  changeHandler: PropTypes.func
};

export default SelectOptions;
