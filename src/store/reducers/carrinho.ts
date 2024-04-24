import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductsList {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
  amount: number
}

export interface ProductsListWithAmount extends ProductsList {
  amount: number
}

type CarrinhoState = {
  isOpen: boolean
  itens: ProductsListWithAmount[]
  amount: number
  priceBase: string
}

const initialState: CarrinhoState = {
  isOpen: false,
  itens: [],
  amount: 1,
  priceBase: '0'
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
    addCart: (state, action: PayloadAction<ProductsListWithAmount>) => {
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
    },
    addAmount: (state, action: PayloadAction<ProductsListWithAmount>) => {
      const amount = action.payload.amount + 1

      const newPrice = amount * parseFloat(action.payload.price)

      const newUnitPrice = newPrice / (amount - 1)

      state.itens = state.itens.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            price: newUnitPrice.toString(),
            amount: amount
          }
        }
        return item
      })
    },
    removeAmount: (state, action: PayloadAction<ProductsListWithAmount>) => {
      if (action.payload.amount >= 2) {
        const amount = action.payload.amount

        const priceCurrent = parseFloat(action.payload.price) / amount
        const newUnitPrice = parseFloat(action.payload.price) - priceCurrent

        const amountRmv = amount - 1

        state.itens = state.itens.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              price: newUnitPrice.toString(),
              amount: amountRmv
            }
          }
          return item
        })
      }
    }
  }
})

export const { open, close, addCart, removeCart, addAmount, removeAmount } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
