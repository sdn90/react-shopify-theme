import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import VariantSelect from './../src/variant-select.jsx';


const product = {"id":447524220,"title":"Glass Globe Atomizer 510 Threading","handle":"glass-globe-atomizer","description":"\u003cp\u003eThese attachments will give you HUGE hits. The tempered pyrex glass dome improves the airflow of the atomizer and allows you to see how much vapor is being produced. We highly recommend these for eGo and 510 batteries if you are trying to get better vapor production.\u003c\/p\u003e\n\u003cp\u003eOur glass globes use Grade 2 Titanium coils which heat up and cool down extremely fast compared to your traditional atomizer.\u003c\/p\u003e\n\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cstrong\u003eThis product is for aromatherapy use only.\u003c\/strong\u003e\u003c\/p\u003e","published_at":"2015-03-16T17:58:00-07:00","created_at":"2015-03-16T17:58:33-07:00","vendor":"Vape Map","type":"Atomizers","tags":["510","Glass Globe","Replacement Parts","Wax"],"price":599,"price_min":599,"price_max":599,"available":true,"price_varies":false,"compare_at_price":1999,"compare_at_price_min":1999,"compare_at_price_max":1999,"compare_at_price_varies":false,"variants":[{"id":4980347268,"title":"Default Title","options":["Default Title"],"option1":"Default Title","option2":null,"option3":null,"price":599,"weight":59,"compare_at_price":1999,"inventory_quantity":23,"inventory_management":"shopify","inventory_policy":"deny","available":true,"sku":"GLASSGLOBE-510","requires_shipping":true,"taxable":true,"barcode":"","featured_image":null}],"images":["\/\/cdn.shopify.com\/s\/files\/1\/0358\/9789\/products\/IMG_0034_1024x1024_ec112891-8463-4490-ad3d-3daed0e07863.jpg?v=1427323988"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/0358\/9789\/products\/IMG_0034_1024x1024_ec112891-8463-4490-ad3d-3daed0e07863.jpg?v=1427323988","options":["Title"],"content":"\u003cp\u003eThese attachments will give you HUGE hits. The tempered pyrex glass dome improves the airflow of the atomizer and allows you to see how much vapor is being produced. We highly recommend these for eGo and 510 batteries if you are trying to get better vapor production.\u003c\/p\u003e\n\u003cp\u003eOur glass globes use Grade 2 Titanium coils which heat up and cool down extremely fast compared to your traditional atomizer.\u003c\/p\u003e\n\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cstrong\u003eThis product is for aromatherapy use only.\u003c\/strong\u003e\u003c\/p\u003e"};



describe('Variant Select', () => {

  it('should pass props to children', () => {

    const component = shallow(
      <VariantSelect variants={product.variants} options={product.options}>
        <div>
          <div>test</div>
        </div>
      </VariantSelect>
    );

    const expectedProps = [
      'changeHandler',
      'options',
      'selectedOptions',
      'selectedVariant',
      'uniqueOptions',
      'variants',
      'addDisabled',
    ];

    component.children().forEach(child => {
      expect(child.props())
        .toIncludeKeys(expectedProps);
    });

  });

  it('should return the availability of the selectedVariant', () => {

    const component = shallow(
      <VariantSelect variants={product.variants} options={product.options}>
        <div>
          <div>test</div>
        </div>
      </VariantSelect>
    );

    expect(
      component
        .children()
        .first()
        .prop('addDisabled')
    ).toBe(false);

  });
});
