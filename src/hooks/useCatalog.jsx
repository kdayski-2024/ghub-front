import { useEffect, useState } from 'react';
import CatalogService from '../services/catalog.service';

const useCatalog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    setLoading(true);

    const projects$ = CatalogService.state$.subscribe((state) => {
      setError(state.error);
      setCatalog(state.сategory);
      setLoading(state.loading);
    });

    return () => {
      projects$.unsubscribe();
    };
  }, []);
  return {
    loading,
    error,
    catalog,
  };
};

export default useCatalog;
