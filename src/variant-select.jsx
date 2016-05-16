import React from "react";
import deepAssign from 'deep-assign';
import { findVariant, uniqueOptions, firstVariant } from "preamble-utils";
import parseQueryString from './parse-query-string';

const { array, func, string } = React.PropTypes;

export default class VariantSelect extends React.Component {

  static propTypes = {
    variants: array,
    options: array
  };

  constructor(props) {

    super();

    this.state = {
      selectedOptions: {
        option1: null,
        option2: null,
        option3: null
      },
      selectedVariant: firstVariant(props.variants)
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.addDisabled = this.addDisabled.bind(this);

  }

  initialSelectedVariant(variants) {

    const queryParams = parseQueryString(location.search);

    if (queryParams['variant']) {

      // using filter since it works with IE9
      return variants.filter(variant => {
        return variant.id === parseInt(queryParams['variant']);
      })[0];

    } else {

      return firstVariant(variants);

    }

  }

  /**
   * Option change handler
   * Sets the state of selected option and sets the selected variant if
   * the selected options are found in the variants prop.
   * @param {string} optionName The option name e.g. Color
   * @param {string} optionValue
   */
  handleOptionChange(optionName, optionValue) {

    const { variants, options } = this.props;

    const optionNumber = options.indexOf(optionName) + 1;
    const selectedOption = {
      ["option" + optionNumber]: optionValue
    };

    /**
     * If the variant is not found (most likely not enough options selected)
     * the selectedVariant is set to an empty string.
     */
    const selectedVariant = findVariant(variants, options, selectedOption) || null;

    const nextState = deepAssign(this.state, {
      selectedOptions: selectedOption,
      selectedVariant
    });

    this.setState(nextState);

  }


  /**
   * Returns the availability of the selected variant
   * @param {Object} selectedVariant
   * @param {string} selectedVariant.available
   * @return {boolean}
   */
  addDisabled(selectedVariant) {

    if (selectedVariant) {

      return selectedVariant.available ? false : true;

    } else {

      return true;

    }

  }

  render() {

    const unique = uniqueOptions(this.props.variants, this.props.options);

    const children = React.Children.map(this.props.children, child => {

      return React.cloneElement(child, {
        ...this.state,
        ...this.props,
        changeHandler: this.handleOptionChange,
        uniqueOptions: unique,
        addDisabled: this.addDisabled(this.state.selectedVariant)
      });

    });

    return <div>{children}</div>;

  }
}
