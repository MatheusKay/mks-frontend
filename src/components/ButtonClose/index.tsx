import closeCard from '../../assets/Close_cart.png'

import { CloseContain } from './style'

export type Props = {
  size?: string
  onClick?: () => void
}

const ButtonClose = ({ size = '', onClick }: Props) => {
  return (
    <CloseContain onClick={onClick} size={size}>
      <img
        src={closeCard}
        alt="Imagem que representa o botão para fechar o carrinho"
      />
    </CloseContain>
  )
}

export default ButtonClose
