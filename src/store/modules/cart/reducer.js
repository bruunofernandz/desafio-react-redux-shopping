import produce from 'immer';

const INITIAL_STATE = {
    items: []
};

function cart(state = INITIAL_STATE, action) {
    return produce(state, draft => {

        switch (action.type) {
            case "ADD_PRODUCT_TO_CART": {
                const { product } = action.payload;

                const productInCartIndex = draft.items.findIndex(item => 
                    item.product.id === product.id,
                );

                if(productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++;
                    draft.items[productInCartIndex].subtotal = draft.items[productInCartIndex].quantity * draft.items[productInCartIndex].product.price;
                } else {
                    draft.items.push({
                        product,
                        quantity: 1,
                        subtotal: product.price
                    });
                }

                // return {
                //     ...state,
                //     items: [
                //         ...state.items,
                //         {
                //             product,
                //             quantity: 1
                //         }
                //     ]
                // };
                break;

            }

            case "SUBTRACT_TO_CART": {
                const { product } = action.payload;
                const productInCartIndex = draft.items.findIndex(item =>
                    item.product.id === product.id,
                );

                if(productInCartIndex >= 0) {
                    if(draft.items[productInCartIndex].quantity > 1) {
                        draft.items[productInCartIndex].quantity--;
                        draft.items[productInCartIndex].subtotal = draft.items[productInCartIndex].quantity * draft.items[productInCartIndex].product.price;
                        window.location.reload(true);

                    } else if (draft.items[productInCartIndex].quantity === 1){
                        const confirmRemove = window.confirm('Remove this item ?');

                        if(confirmRemove === true) {
                            draft.items.splice(productInCartIndex, 1);
                            window.location.reload(true);
                        }

                    }
                }

                break;
            }
            case "REMOVE_PRODUCT_TO_CART": {
                const { product } = action.payload;
                const confirmRemove = window.confirm('Remove this item ?');

                if(confirmRemove === true) {
                    draft.items.splice(draft.items.findIndex(item =>
                        item.product.id === product.id,
                    ), 1);
                }
                break;
            }
            case "ADD_QUANTITY_TO_CART": {
                const { product } = action.payload;

                const productInCartIndex = draft.items.findIndex(item => 
                    item.product.id === product.id,
                );

                if(productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++;
                    draft.items[productInCartIndex].subtotal = draft.items[productInCartIndex].quantity * draft.items[productInCartIndex].product.price;
                    window.location.reload(true);
                }

                break;
            }
            default: {
                return state;
            }
        }
    });
};

export default cart;