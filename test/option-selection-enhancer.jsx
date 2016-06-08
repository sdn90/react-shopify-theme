import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import OptionSelectionEnhancer from './../src/option-selection-enhancer.jsx';

const product = {
  "id": 1,
  "title": "Test Product",
  "variants": [{
    "id": 1,
    "title": "Blue Small",
    "options": ["Color", "Size"],
    "option1": "Blue",
    "option2": "Small",
    "option3": null,
    "available": true
  },{
    "id": 2,
    "title": "Blue Medium",
    "options": ["Color", "Size"],
    "option1": "Blue",
    "option2": "Medium",
    "option3": null,
    "available": true
  }],
  "options": ["Color", "Size"]
};

const SimpleContainer = (props) => {
  return (
    <div>
      {this.props.uniqueOptions.map((unique) => {
        return (
          <OptionContainer
            key={unique.name}
            changeHandler={this.props.changeHandler}
            name={unique.name}
            values={unique.values}/>
        );
      })}
    </div>
  );
};

const OptionContainer = (props) => {
  const changeHandler = e => {
    props.changeHandler(props.name, e.target.value);
  };
  return (
    <div>
      <h2>{props.name}</h2>

      <select onChange={changeHandler}>
        {props.values.map(value => {
          return <option value={value}/>;
        })}
      </select>

    </div>
  );
};


const SimpleSelect = OptionSelectionEnhancer(SimpleContainer);

describe('Variant Select', () => {

  it('should return a valid react component', () => {

    const renderedComponent = shallow(
      <SimpleSelect
        variants={product.variants}
        options={product.options}
        />
    );

  });

  it('should set the initial selected variant prop as the selectedVariant', () => {
    const componentWithID = shallow(
      <SimpleSelect
        variants={product.variants}
        options={product.options}
        initialVariantID={2} />
    );

    expect(
      componentWithID
      .state()
      .selectedVariant
    ).toEqual(product.variants[1]);
  });

  it('should set the first available variant if no initialVariantID is given', () => {
    const componentWithoutID = shallow(
      <SimpleSelect
        variants={product.variants}
        options={product.options} />
    );

    expect(
      componentWithoutID
      .state()
      .selectedVariant
    ).toEqual(product.variants[0]);
  });

  it('should change options', () => {
    const wrapper = shallow(
      <SimpleSelect
        variants={product.variants}
        options={product.options} />
    );

    wrapper.props().changeHandler('Color', 'Blue');
    wrapper.props().changeHandler('Size', 'Medium');
    wrapper.update();
    expect(wrapper.props().selectedVariant).toEqual(product.variants[1]);

    wrapper.props().changeHandler('Color', 'Blue');
    wrapper.props().changeHandler('Size', 'Small');
    wrapper.update();
    expect(wrapper.props().selectedVariant).toEqual(product.variants[0]);

  });
});
