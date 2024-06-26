import { useDispatch, useSelector } from 'react-redux'

import ButtonClose from '../ButtonClose'
import CardCarrinho from '../CardCarrinho'

import {
  Contain,
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
    <Contain
      initial={{ opacity: 0, x: '-100%', zIndex: -2 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? '0%' : '-100%',
        zIndex: 1
      }}
      transition={{ duration: 0.5 }}
      data-testid="cart"
    >
      <div onClick={() => dispatch(close())} className="overlay"></div>
      <CarrinhoContain>
        <div className="carrinho_contain_infos">
          <div>
            <HeaderCarrinho>
              <h2>Carrinho de compras</h2>
              <ButtonClose onClick={() => dispatch(close())} size={'38px'} />
            </HeaderCarrinho>
            <div className="info_product">
              <ul>
                {itens.map((productCart) => (
                  <li key={productCart.id}>
                    <CardCarrinho
                      name={productCart.name}
                      photo={productCart.photo}
                      price={productCart.price}
                      onClick={() => dispatch(removeCart(productCart.id))}
                      product={productCart}
                      amount={productCart.amount}
                      dataTestid="card-cart"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <CarrinhoPrice>
            <h3>Total:</h3>
            <span>R$ {accPrice}</span>
          </CarrinhoPrice>
        </div>
        <ButtonBuy onClick={() => console.log(itens)}>
          Finalizar Compra
        </ButtonBuy>
      </CarrinhoContain>
    </Contain>
  )
}

export default Carrinho
