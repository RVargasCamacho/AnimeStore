import React from 'react'
import { useParams } from 'react-router-dom';

export function ProductDetail() {
  const { productId } = useParams();

  return <div>ProductDetail : {productId}</div>;
}
