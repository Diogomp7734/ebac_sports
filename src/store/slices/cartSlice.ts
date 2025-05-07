import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
}

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Produto>) {
      state.items.push(action.payload)
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
