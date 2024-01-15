import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import DescriptionBox from '../Components/DescriptionBox/Descriptionbox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';
const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product
