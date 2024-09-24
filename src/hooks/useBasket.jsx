import { useEffect, useState } from 'react';
import BasketService from '../services/basket.service';

const useBasket = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const basket$ = BasketService.state$.subscribe((state) => {
      setError(state.error);
      setBasket(state.basket);
      setLoading(state.loading);
      setTotal(state.total);
    });

    return () => {
      basket$.unsubscribe();
    };
  }, []);
  return {
    loading,
    error,
    basket,
    total,
  };
};

export default useBasket;
