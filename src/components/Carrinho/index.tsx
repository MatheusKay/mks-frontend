import { useDispatch, useSelector } from 'react-redux'

import ButtonClose from '../ButtonClose'
import CardCarrinho from '../CardCarrinho'

import {
  CarrinhoContain,
  CarrinhoPrice,
  HeaderCarrinho,
  ButtonBuy
} from './style'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/carrinho'

const Carrinho = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.carrinho)

  const dispatch = useDispatch()

  return (
    <CarrinhoContain className={isOpen === false ? 'is_close' : ''}>
      <div className="carrinho_contain_infos">
        <div>
          <HeaderCarrinho>
            <h2>Carrinho de compras</h2>
            <ButtonClose onClick={() => dispatch(close())} size={'38px'} />
          </HeaderCarrinho>
          <ul>
            <li>
              <CardCarrinho />
            </li>
            <li>
              <CardCarrinho />
            </li>
            <li>
              <CardCarrinho />
            </li>
          </ul>
        </div>
        <CarrinhoPrice>
          <h3>Total</h3>
          <span>R$ 798</span>
        </CarrinhoPrice>
      </div>
      <ButtonBuy>Finalizar Compra</ButtonBuy>
    </CarrinhoContain>
  )
}

export default Carrinho
