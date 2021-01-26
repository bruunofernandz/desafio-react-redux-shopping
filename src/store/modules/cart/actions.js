function addProductToCart(product) {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: {
            product,
        }
    }
}

function subtractToCart(product) {
    return {
        type: 'SUBTRACT_TO_CART',
        payload: {
            product,
        }
    }
}

function removeProduct(product) {
    return {
        type: 'REMOVE_PRODUCT_TO_CART',
        payload: {
            product,
        }
    }
}

function addQuantityToCart(product) {
    return {
        type: 'ADD_QUANTITY_TO_CART',
        payload: {
            product,
        }
    }
}

export {addProductToCart, subtractToCart, removeProduct, addQuantityToCart};