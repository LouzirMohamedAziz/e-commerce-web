import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import './Breadcrums.css';

const Breadcrums = (props) => {

    const {product} = props;

    // const capitalizeFirstLetter = (string) => {
    //   return string.charAt(0).toUpperCase() + string.slice(1) + "s";
    // };

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrums
