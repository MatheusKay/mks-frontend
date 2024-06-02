import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import { store } from '../../store'

import SectionCard from '../SectionCard'
import Carrinho from '../Carrinho'

describe('SectionCards', () => {
  it('should render the section first with the skeleton and then with the products on the screen.', async () => {
    render(
      <Provider store={store}>
        <SectionCard />
      </Provider>
    )

    //Capture the section with the skeleton inside to test it.
    const containerSkeleton = screen.getByTestId('section-skeleton')

    //Checks if the section is being rendered correctly in the DOM
    expect(containerSkeleton).toBeInTheDocument()

    //Simulate the delay and place it in the section to show the skeleton and then the products
    setTimeout(() => {
      //Capture the section with the products inside to test it.
      const containerProducts = screen.getByTestId('section-cards')

      //Checks if the section is being rendered correctly with the products in the DOM
      expect(containerProducts).toBeInTheDocument()
    }, 5000)
  })

  it('should render cards with their elements correctly', () => {
    render(
      <Provider store={store}>
        <Carrinho />
        <SectionCard />
      </Provider>
    )

    setTimeout(() => {
      const containerProducts = screen.getByTestId('section-cards')
      const cards = screen.getAllByTestId('card-product')

      cards.forEach((card) => {
        expect(containerProducts).toContainElement(card)

        const productImage = card.querySelector('[data-testid="product-image"]')
        const productName = card.querySelector('[data-testid="product-name"]')
        const productPrice = card.querySelector('[data-testid="product-price"]')
        const productDescription = card.querySelector(
          '[data-testid="product-description"]'
        )

        expect(productImage).toBeInTheDocument()
        expect(productName).not.toBeEmptyDOMElement()
        expect(productPrice).not.toBeEmptyDOMElement()
        expect(productDescription).not.toBeEmptyDOMElement()
      })
    }, 5000)
  })

  it('should add the product to the cart when the button is clicked', () => {
    render(
      <Provider store={store}>
        <Carrinho />
        <SectionCard />
      </Provider>
    )

    setTimeout(() => {
      const containerProducts = screen.getByTestId('section-cards')
      const cards = screen.getAllByTestId('card-product')

      cards.forEach((card) => {
        expect(containerProducts).toContainElement(card)

        const buttonCard = screen.getByTestId('button-card')

        fireEvent.click(buttonCard)

        //Captures the cart component and some element to check if the cart has opened.
        const cartOpen = screen.getByTestId('cart')
        const containCart = screen.getByText('Carrinho de compras')

        //Check if it opened correctly.
        expect(cartOpen).toContainElement(containCart)

        //Checks if the product card was actually added to the cart and checks if it has the elements in the card container
        const cardCart = cartOpen.querySelector('[data-testid="card-cart"]')

        const cardImage = cardCart?.querySelector('img')
        const cardName = cardCart?.querySelector('h4')
        const cardPrice = cardCart?.querySelector('span')

        expect(cardImage).toBeInTheDocument()
        expect(cardName).toBeInTheDocument()
        expect(cardPrice).toBeInTheDocument()
      })
    }, 5000)
  })
})
