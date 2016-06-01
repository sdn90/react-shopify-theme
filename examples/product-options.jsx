import React from 'react';
import VariantSelect from './../src/variant-select.jsx';
import { formatMoney } from 'preamble-utils';
import className from 'classname';

const ProductOptions = props => {
  const formattedPrice = formatMoney(props.selectedVariant.price);

  return (
    <div className="max-width-4 mx-auto">

      <div className="clearfix">
        <div className="col col-12">
          <h1 className="caps regular">
            Tesla Model S
          </h1>
          <hr/>
        </div>
      </div>

      <div className="clearfix mxn2">
        <div className="col col-8 px2">
          {props.uniqueOptions.map((unique, index) => {
            return (
              <OptionContainer
                key={index}
                selectedVariant={props.selectedVariant}
                changeHandler={props.changeHandler}
                name={unique.name}
                values={unique.values}/>
            );
          })}
        </div>

        <div className="col col-4 p3 rounded bg-black center">
          <h1 className="regular mt0 white">
            {formattedPrice}
          </h1>
          <div className="mt2">
            {props.options.map((option, index) => {
              return (
                <div className="mb2">
                  <div className="caps gray">
                    {option}
                  </div>
                  <span className="white h4 silver">
                    {props.selectedVariant['option' + (index + 1)]}
                  </span>
                </div>
              );
            })}
          </div>
          <AddCartButton
            selectedVariant={props.selectedVariant}
            disabled={props.addDisabled}
            />
        </div>
      </div>

    </div>
  );
}

export default VariantSelect(ProductOptions);

const OptionContainer = (props) => {
  const changeHandler = e => {
    props.changeHandler(props.name, e.target.value);
  };

  const defaultContainer = (
    <div>
      <h4 className="caps gray regular">
        Select a {props.name}
      </h4>
      <select
        className="col-12 select"
        onChange={changeHandler}>
        {props.values.map((value, index) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );

  switch (props.name) {
    case 'Model':
    return (
      <ModelContainer
        selectedValue={props.selectedVariant.option1}
        values={props.values}
        changeHandler={props.changeHandler}/>
    );
    case 'Color':
    return (
      <ColorContainer
        changeHandler={props.changeHandler}
        selectedValue={props.selectedVariant.option2}
        values={props.values}/>
    );
    default:
    return defaultContainer;
  }
};

const ModelContainer = (props) => {
  return (
    <div>
      <h4 className="caps gray regular">
        Select a model
      </h4>
      <div className="clearfix mxn2">
        {props.values.map(value => {

          const changeHandler = props.changeHandler.bind(null, 'Model', value);
          const isSelected = props.selectedValue === value;
          const selectedStyle = isSelected ? { borderColor: '#999', borderWidth: 2 } : {};

          return (
            <div
              className="col col-4 px2"
              onClick={changeHandler}>
              <div
                className="center p4 border border-box rounded pointer"
                style={selectedStyle}>
                <span className="h1">
                  {value}
                </span>
              </div>
            </div>
          );

        })}
      </div>
    </div>
  );
}

const ColorContainer = (props) => {
  const colorHex = {
    "Black": "#222",
    "Blue Metallic": "#112250",
    "Deep Blue Metallic": "#183378",
    "Gray Metallic": "",
    "Midnight Silver Metallic": "#282C30",
    "Obsidian Black": "#1B181A",
    "Pearl White Multi-Coat": "#183378",
    "Red Multi-Coat": "#a11e2c",
    "Silver Metallic": "#949494",
    "Solid White": "#f6f6f6",
    "Titanium Metallic": "#534E4A",
    "White": "#FCFCFC"
  };
  return (
    <div>
      <h4 className="caps gray regular">
        Select a Color
      </h4>
      {props.values.map((value, index) => {

        const isSelected = props.selectedValue === value;

        return (
          <div
            onClick={props.changeHandler.bind(null, 'Color', value)}
            style={{
              backgroundColor: colorHex[value],
              width: 100,
              height: 100,
              display: 'inline-block',
              marginRight: 10,
              border: isSelected ? '2px #999 solid' : '' }}/>
          );
        })}
      </div>
    )
  };

  const AddCartButton = (props) => {
    const message = props.disabled ? 'Out of Stock' : 'Add to Cart';
    return (
      <button
        className="btn p2 col-12 mt2"
        style={{
          backgroundColor: '#222',
          border: 0,
          fontSize: 18,
          color: '#fff'
        }}
        disabled={props.disabled}>
        {message}
      </button>
    );
  }
