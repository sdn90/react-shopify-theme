import React from 'react';
import {
  findVariantFromOptions,
  uniqueOptions,
  firstAvailableVariant,
} from 'preamble-utils';

export default function OptionSelectionEnhancer(ComposedComponent) {
  return class extends React.Component {

    static displayName = 'VariantSelect';
    static propTypes = {
      variants: React.PropTypes.array.isRequired,
      options: React.PropTypes.array.isRequired,
      initialVariantID: React.PropTypes.number,
    };

    static defaultProps = {
      initialVariantID: 0,
    };

    constructor(props) {
      super(props);

      const defaultState = {
        selectedOptions: {
          option1: '',
          option2: '',
          option3: '',
        },
        selectedVariant: {
          option1: '',
          option2: '',
          option3: '',
          available: false,
        },
      };
      const initialVariant = this.findInitialVariant() || defaultState;

      this.state = {
        selectedOptions: {
          option1: initialVariant.option1,
          option2: initialVariant.option2,
          option3: initialVariant.option3,
        },
        selectedVariant: initialVariant,
      };

      this.handleOptionChange = this.handleOptionChange.bind(this);
      this.addDisabled = this.addDisabled.bind(this);
      this.findInitialVariant = this.findInitialVariant.bind(this);
    }

    /**
     * Returns the initial selected variant
     *
     * @param {Object[]} variants
     * @return {Object} Variant
     */
    findInitialVariant() {
      const { variants, initialVariantID } = this.props;

      if (initialVariantID) {
        return variants.filter(variant => variant.id === initialVariantID)[0];
      }

      return firstAvailableVariant(variants);
    }

    /**
     * Option change handler
     * Sets the state of selected option and sets the selected variant if
     * the selected options are found in the variants prop.
     * @param {string} optionName The option name e.g. Color
     * @param {string} optionValue
     * @return {void}
     */
    handleOptionChange(optionName, optionValue) {
      const { variants, options } = this.props;

      const optionNumber = options.indexOf(optionName) + 1;
      const selectedOption = {
        [`option${optionNumber}`]: optionValue,
      };
      const selectedVariant = findVariantFromOptions(variants, {
        ...this.state.selectedOptions,
        ...selectedOption,
      });

      const nextState = {
        selectedOptions: {
          ...this.state.selectedOptions,
          ...selectedOption,
        },
        selectedVariant: { ...selectedVariant },
      };

      this.setState(nextState);
    }

    /**
     * Returns the availability of the selected variant
     * @param {Object} selectedVariant
     * @param {string} selectedVariant.available
     * @return {boolean}
     */
    addDisabled(selectedVariant) {
      return !selectedVariant.available;
    }

    hasVariants() {
      const variants = this.props.variants;

      // conditions for a product with no variants
      const hasOneVariant = variants.length === 1;
      const hasDefaultTitle = this.props.variants[0].title === 'Default Title';
      const hasDefaultOption = this.props.variants[0].option1 === 'Default Title';

      return !hasOneVariant && !hasDefaultTitle && !hasDefaultOption;
    }

    render() {
      const unique = uniqueOptions(this.props.variants, this.props.options);

      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          addDisabled={this.addDisabled(this.state.selectedVariant)}
          changeHandler={this.handleOptionChange}
          hasVariants={this.hasVariants()}
          uniqueOptions={[...unique]}
        />
      );
    }
  };
}
