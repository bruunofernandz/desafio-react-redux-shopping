import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AddCartButtonComponent } from './styles';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import {addProductToCart} from '../../store/modules/cart/actions';

export default function AddToCartButton({ product }) {
    const dispatch = useDispatch();

    function notify() {
        return store.addNotification({
            title: "Success",
            message: "Product add to your cart!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          });
    }

    const handleAddProductToCart = useCallback((product) => {
        dispatch(addProductToCart(product));

        notify();
      }, [dispatch]);

    return (
    <>
        <AddCartButtonComponent onClick={() => handleAddProductToCart(product)}>ADD CART</AddCartButtonComponent>
    </>
   )
}