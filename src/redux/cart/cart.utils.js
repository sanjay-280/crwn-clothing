export const addItemToCart = (cartItems, itemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]

};

export const removeItemFromCart = (cartItems, itemsToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemsToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemsToRemove.id)
    };

    return cartItems.map(cartItem => cartItem.id === itemsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}
