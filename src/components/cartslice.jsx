import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    cart: []
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,


    reducers: {
       addtocart: (state, action) => {
    const plant = state.cart.find(
        item => item.name === action.payload.name
    );

    if (plant) {
        plant.qty += 1;
    } else {
        state.cart.push({
            ...action.payload,   // ✅ clone
            qty: 1,
            inCart: true
        });
    }
},



            // check this  ERROR and DEBUG 



            //but the issue is when in product component when new added the product to the cart instead adding new plant still the quantity increases of existing plant 
       
minusq: (state, action) => {
    const plant = state.cart.find(
        item => item.name === action.payload.name
    );

    if (!plant) return;

    if (plant.qty > 1) {
        plant.qty -= 1;
    } else {
        // Remove item completely
        state.cart = state.cart.filter(
            item => item.name !== action.payload.name
        );
    }
},
        addq: (state, action) => {
            const plant = state.cart.find(item => item.name === action.payload.name);
            if (plant) {
                plant.qty += 1;
            }
        },
      remove: (state, action) => {
    const plant = state.cart.find(item => item.name === action.payload.name);

    if (plant) {
        plant.inCart = !plant.inCart;
    }

    // Keep only items that are in cart
    state.cart = state.cart.filter(item => item.inCart);
}




    }
});
export const { addtocart, minusq, addq, remove } = cartSlice.actions;
export default cartSlice.reducer;