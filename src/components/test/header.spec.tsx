import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import { store } from '../../store'

import Header from '../Header'
import Carrinho from '../Carrinho'

describe('HeaderComponent', () => {
  it('should render the logo in the header and the cart button with the image', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

    //Checks each element to see if they appeared correctly and if everything is ok.
    const titleH1 = screen.getByText('MKS')
    const titleP = screen.getByText('Sistemas')
    const imageCart = screen.getByAltText(
      'Imagem que representa o carrinho do site'
    )

    //Checks each element to see if they appeared correctly and if everything is ok.    expect(titleH1).toBeInTheDocument()
    expect(titleP).toBeInTheDocument()
    expect(imageCart).toBeInTheDocument()
  })

  it('should the cart appears when you click on the cart button ', () => {
    render(
      <Provider store={store}>
        <Header />
        <Carrinho />
      </Provider>
    )
    //Capture the button element to open the cart.
    const buttonCart = screen.getByTestId('button-cart')

    //Click to open the cart.
    fireEvent.click(buttonCart)

    //Captures the cart component and some element to check if the cart has opened.
    const cartOpen = screen.getByTestId('cart')
    const containCart = screen.getByText('Carrinho de compras')

    //Check if it opened correctly.
    expect(cartOpen).toContainElement(containCart)

    //Capture the button to close the cart.
    const closeCart = screen.getByTestId('close-cart')

    //Click to close the cart.
    fireEvent.click(closeCart)

    //Check if the cart is still appearing or if it has actually been closed.
    expect(cartOpen).toBeInTheDocument()
  })
})
