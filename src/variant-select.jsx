import React from "react";
import { findVariant, uniqueOptions } from "preamble-utils";

export default class VariantSelect extends React.Component {

  constructor() {

    super();

    this.state = {
      selectedOptions: {
        option1: null,
        option2: null,
        option3: null
      },
      selectedVariant: {}
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

  }

  /**
   * Option change handler
   * Sets the state of selectedOptions and selectedVariant.
   * @param {string} optionName The option name e.g. Color
   * @param {Event} event
   */
  handleOptionChange(optionName, event) {

    const { variants, options } = this.props;

    const optionNumber = options.indexOf(optionName) + 1;
    const selectedOption = { ["option" + optionNumber]: e.target.value };

    /**
     * If the variant is not found (most likely not enough options selected)
     * the selectedVariant is set to an empty string.
     */
    const selectedVariant = findVariant(variants, options, selectedOption) || "";

    const nextState = _.merge(this.state, {
      selectedOptions: selectedOption,
      selectedVariant
    });

    this.setState(nextState);

  }

  render() {

    const uniqueOptions = uniqueOptions(this.props.variants, this.props.options);

    const children = React.Children.map(this.props.children, child => {

      return React.cloneElement(child, {
        changeHandler: this.handleOptionChange,
        options: this.props.options,
        selectedOptions: this.state.selectedOptions,
        selectedVariant: this.state.selectedVariant,
        uniqueOptions: uniqueOptions,
        variants: this.props.variants
      });

    });

    return <div>{this.props.children}</div>;

  }
}
