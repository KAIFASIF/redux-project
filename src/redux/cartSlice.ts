import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItemsProps {
  image: string;
  title: string;
  qty: number;
  price: string;
}
const initialState: any = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<cartItemsProps>) {
      const newItem = action.payload;
      const existingItem = state?.cartItems.find(
        (ele: cartItemsProps) => ele?.title === newItem?.title
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push(newItem);
      }
    },
    deleteCart(state) {
      state.cartItems=[];
    },
  },
});

export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
