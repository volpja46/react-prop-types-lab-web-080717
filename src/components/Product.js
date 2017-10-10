import React from "react"
 import PropTypes from 'prop-types'

 export default class Product extends React.Component{
   render(){
     const {name, producer, hasWatermark, color, weight} = this.props
     return(
       <h1>Name: {name}</h1>,
       <h2>Producer: {producer}</h2>,
       <h2>Watermark: {hasWatermark}</h2>,
       <h2>color: {color}</h2>,
       <h2>Weight: {weight}</h2>
     )
   }
 }

 Product.defaultProps = {
   hasWatermark: false
 }

 Product.propTypes = {
   name: PropTypes.string.isRequired,
   producer: PropTypes.string,
   hasWatermark: PropTypes.bool,
   color: PropTypes.oneOf([
     "white",
     "eggshell-white",
     "salmon"
   ]).isRequired,
   weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }

 }
