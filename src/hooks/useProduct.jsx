import { useEffect, useState } from 'react';
import ProductService from '../services/product.service';

const useProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setLoading(true);

    const projects$ = ProductService.state$.subscribe((state) => {
      setError(state.error);
      setProduct(state.product);
      setLoading(state.loading);
    });

    return () => {
      projects$.unsubscribe();
    };
  }, []);
  return {
    loading,
    error,
    product,
  };
};

export default useProduct;
