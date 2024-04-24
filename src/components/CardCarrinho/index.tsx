import { useDispatch } from 'react-redux'

import ButtonClose from '../ButtonClose'

import { CardContain, AumentarProduto } from './style'
import {
  ProductsListWithAmount,
  addAmount,
  removeAmount
} from '../../store/reducers/carrinho'

type Props = {
  product: ProductsListWithAmount
  name: string
  photo: string
  price: string
  amount: number
  onClick: () => void
}

const CardCarrinho = ({
  name,
  photo,
  price,
  onClick,
  product,
  amount
}: Props) => {
  const dispatch = useDispatch()

  return (
    <CardContain>
      <div className="info_produto">
        <img src={photo} alt={name} />
        <h4>{name}</h4>
        <div className="info_produto_opcoes">
          <div>
            <p className="text_qtd">Qtd:</p>
            <AumentarProduto>
              <button onClick={() => dispatch(removeAmount(product))}>-</button>
              <input type="text" value={amount} />
              <button onClick={() => dispatch(addAmount(product))}>+</button>
            </AumentarProduto>
          </div>
          <span>R$ {price}</span>
        </div>
      </div>
      <div onClick={onClick} className="button_contain">
        <ButtonClose />
      </div>
    </CardContain>
  )
}

export default CardCarrinho
