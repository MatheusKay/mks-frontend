import { ProductsList } from '../store/reducers/carrinho'

export const totalPrice = (products: ProductsList[]) => {
  return products.reduce((acumulador, valorAtual) => {
    const price = Number(valorAtual.price)

    if (price) {
      return (acumulador += price)
    }

    return 0
  }, 0)
}
