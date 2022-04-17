import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const CheckoutDetails = () => {
    const {checkId} = useParams();
    const [services,setServices] = useFetch();
  return (
    <div>CheckoutDetails</div>
  )
}

export default CheckoutDetails