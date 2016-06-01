import React from 'react';
import ReactDOM from 'react-dom';
import ProductOptions from './product-options.jsx';
import _ from 'lodash';

const exteriorColors = [
  "Black",
  "Blue Metallic",
  "Deep Blue Metallic",
  "Gray Metallic",
  "Midnight Silver Metallic",
  "Obsidian Black",
  "Pearl White Multi-Coat",
  "Red Multi-Coat",
  "Silver Metallic",
  "Solid White",
  "Titanium Metallic",
  "White"
];
const drive = ["Rear Wheel Drive", "All Wheel Drive"];

function cartesianProductOf(){
  return _.reduce(arguments, function(mtrx, vals){
    return _.reduce(vals, function(array, val){
      return array.concat(
        _.map(mtrx, function(row){ return row.concat(val); })
      );
    }, []);
  }, [[]]);
}

function getModelPrice(m) {
  switch(m) {
    case '70D':
      return '7090000';
    case '90D':
      return '9950000';
    case 'P90D':
      return '11950000';
  };
}

const variants70d =
  cartesianProductOf(["70D"], exteriorColors, drive)
    .map((arr, index) => {
      return {
        id: index + 1,
        title: `${arr[0]} / ${arr[1]} / ${arr[2]}`,
        option1: arr[0],
        option2: arr[1],
        option3: arr[2],
        available: true,
        price: getModelPrice(arr[0])
      };
    });

const variantsOther =
  cartesianProductOf(["90D", "P90D"], exteriorColors, ["All Wheel Drive"])
    .map((arr, index) => {
      return {
        id: variants70d.length + (index + 1),
        title: `${arr[0]} / ${arr[1]} / ${arr[2]}`,
        option1: arr[0],
        option2: arr[1],
        option3: arr[2],
        available: true,
        price: getModelPrice(arr[0])
      };
    });

const product = {
  "id": 1,
  "title": "Tesla Model S",
  "options": ["Model", "Color", "Drive"],
  "variants": variants70d.concat(variantsOther)
};
ReactDOM.render(<ProductOptions options={product.options} variants={product.variants}/>, document.getElementById('react'));
