import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as TymioUI from './components';

const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const Main = lazy(() => import('./pages/Main/Main.jsx'));
const Catalogue = lazy(() => import('./pages/Catalogue/Catalogue.jsx'));
const Product = lazy(() => import('./pages/Product/Product.jsx'));
const Basket = lazy(() => import('./pages/Basket/Basket.jsx'));
const Order = lazy(() => import('./pages/Order/Order.jsx'));

const App = () => {
  return (
    <>
      <TymioUI.Modal />
      <TymioUI.MessageDialog />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/:parentId" element={<Catalogue />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="basket" element={<Basket />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
