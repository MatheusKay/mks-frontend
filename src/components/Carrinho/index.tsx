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
import { close, removeCart } from '../../store/reducers/carrinho'

import { totalPrice } from '../../utility/index'

const Carrinho = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.carrinho)

  const dispatch = useDispatch()

  const accPrice = totalPrice(itens)

  return (
    <CarrinhoContain className={isOpen === false ? 'is_close' : ''}>
      <div className="carrinho_contain_infos">
        <div>
          <HeaderCarrinho>
            <h2>Carrinho de compras</h2>
            <ButtonClose onClick={() => dispatch(close())} size={'38px'} />
          </HeaderCarrinho>
          <ul>
            {itens.map((productCart) => (
              <li key={productCart.id}>
                <CardCarrinho
                  name={productCart.name}
                  photo={productCart.photo}
                  price={productCart.price}
                  onClick={() => dispatch(removeCart(productCart.id))}
                />
              </li>
            ))}
          </ul>
        </div>
        <CarrinhoPrice>
          <h3>Total</h3>
          <span>R$ {accPrice}</span>
        </CarrinhoPrice>
      </div>
      <ButtonBuy onClick={() => console.log(itens)}>Finalizar Compra</ButtonBuy>
    </CarrinhoContain>
  )
}

export default Carrinho
