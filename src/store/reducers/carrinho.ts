import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ProductsList = {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

type CarrinhoState = {
  isOpen: boolean
  itens: ProductsList[]
}

const initialState: CarrinhoState = {
  isOpen: false,
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    addCart: (state, action: PayloadAction<ProductsList>) => {
      const existingProducts = state.itens.find(
        (item) => item.name === action.payload.name
      )

      if (!existingProducts) {
        state.itens.push(action.payload)
      } else {
        alert('Esse Produto já foi adicionado ao carrinho')
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { open, close, addCart, removeCart } = carrinhoSlice.actions

export default carrinhoSlice.reducer
