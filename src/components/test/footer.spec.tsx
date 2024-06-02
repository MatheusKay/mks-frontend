import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import { store } from '../../store'
import Footer from '../Footer'

describe('Footer', () => {
  it('', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    )

    const textFooter = screen.getByText(
      'MKS sistemas © Todos os direitos reservados'
    )

    expect(textFooter).toBeInTheDocument()
  })
})
