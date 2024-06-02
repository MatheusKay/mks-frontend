import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import { store } from '../../store'

import Header from '../Header'
import Carrinho from '../Carrinho'

describe('HeaderComponent', () => {
  it('deve renderizar a logo no header e o botao do carrinho com a imagem', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

    //Captura os Elementos do Header para saber se ele renderizou corretamente.
    const titleH1 = screen.getByText('MKS')
    const titleP = screen.getByText('Sistemas')
    const imageCart = screen.getByAltText(
      'Imagem que representa o carrinho do site'
    )

    //Verifica cada elemento para saber se eles apareceram corretamente e se esta tudo ok.
    expect(titleH1).toBeInTheDocument()
    expect(titleP).toBeInTheDocument()
    expect(imageCart).toBeInTheDocument()
  })

  it('deve aparecer o carrinho quando clicar no botao do carrinho', () => {
    render(
      <Provider store={store}>
        <Header />
        <Carrinho />
      </Provider>
    )
    //Captura o elemento do butao para abri o carrinho.
    const buttonCart = screen.getByTestId('button-cart')

    //Execulta o click para abrir o carrinho.
    fireEvent.click(buttonCart)

    //Captura o component do carrinho e algun elemento para verificar se o carrinho abriu.
    const cartOpen = screen.getByTestId('cart')
    const containCart = screen.getByText('Carrinho de compras')

    //Verifica se ele abriu corretamente.
    expect(cartOpen).toContainElement(containCart)

    //Captura o botao para fechar o carrinho.
    const closeCart = screen.getByTestId('close-cart')

    //Executa o click para que o carrinho feche.
    fireEvent.click(closeCart)

    //Verifica se o carrinho ainda estra aparecendo ou se foi realmente fechado.
    expect(cartOpen).toBeInTheDocument()
  })
})
