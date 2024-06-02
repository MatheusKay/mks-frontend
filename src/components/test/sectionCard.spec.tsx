import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import { store } from '../../store'

import SectionCard from '../SectionCard'
import Carrinho from '../Carrinho'

describe('SectionCards', () => {
  it('deve renderizar a seção primeiro com o skeleton e depois com os produtos na tela.', async () => {
    render(
      <Provider store={store}>
        <SectionCard />
      </Provider>
    )

    //Captura a seção com o skeleton dentro para testa-lo.
    const containerSkeleton = screen.getByTestId('section-skeleton')

    //Verifica se a seção esta sendo renderizada corretamente na DOM
    expect(containerSkeleton).toBeInTheDocument()

    //Simula o delay coloca na seção para mostras o skeleton e depois os produtos
    setTimeout(() => {
      //Captura a seção com os produtos dentro dentro para testa-lo.
      const containerProducts = screen.getByTestId('section-cards')

      //Verifica se a seção esta sendo renderizada corretamente com os produtos na DOM
      expect(containerProducts).toBeInTheDocument()
    }, 5000)
  })

  it('deve renderizar os cards com seus elementos corretamente', () => {
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

  it('deve adicionar o produto ao carrinho quando o botao for clicado', () => {
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

        //Captura o component do carrinho e algun elemento para verificar se o carrinho abriu.
        const cartOpen = screen.getByTestId('cart')
        const containCart = screen.getByText('Carrinho de compras')

        //Verifica se ele abriu corretamente.
        expect(cartOpen).toContainElement(containCart)

        //Verifica se o card do produto foi realmente adicionado ao carrinho e confere se tem os elementos no container do card
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
