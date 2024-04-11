import { HeaderCart, HeaderContain, HeaderLogo } from './style'

import cart from '../../assets/Vector.png'

const Header = () => (
  <HeaderContain>
    <HeaderLogo>
      <h1>MKS</h1>
      <p>Sistemas</p>
    </HeaderLogo>
    <HeaderCart>
      <img src={cart} alt="Imagem que representa o carrinho do site" />
      <span>0</span>
    </HeaderCart>
  </HeaderContain>
)

export default Header
