import { useDispatch, useSelector } from 'react-redux'

import { HeaderCart, HeaderContain, HeaderLogo } from './style'

import cart from '../../assets/Vector.png'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/carrinho'

const Header = () => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho)

  const dispatch = useDispatch()

  return (
    <HeaderContain>
      <HeaderLogo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </HeaderLogo>
      <HeaderCart onClick={() => dispatch(open())}>
        <img src={cart} alt="Imagem que representa o carrinho do site" />
        <span>{itens.length}</span>
      </HeaderCart>
    </HeaderContain>
  )
}

export default Header
