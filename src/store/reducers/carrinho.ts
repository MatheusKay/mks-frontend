import { createSlice } from '@reduxjs/toolkit'

type CarrinhoState = {
  isOpen: boolean
}

const initialState: CarrinhoState = {
  isOpen: false
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
    }
  }
})

export const { open, close } = carrinhoSlice.actions

export default carrinhoSlice.reducer
