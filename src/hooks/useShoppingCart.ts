import { create } from "zustand"

type Store = {
	cart: CartItem[],
	addToCart: (carItem: CartItem) => void
}

export const useShoppingCart = create<Store>()((set) => ({
	cart: [],
	addToCart: (cartItem) => set( (state) => ({ cart: [...state.cart, cartItem] }) )
}))