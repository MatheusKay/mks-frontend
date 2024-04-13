import ButtonClose from '../ButtonClose'

import { CardContain, AumentarProduto } from './style'

type Props = {
  name: string
  photo: string
  price: number
  onClick: () => void
}

const CardCarrinho = ({ name, photo, price, onClick }: Props) => {
  return (
    <CardContain>
      <div className="info_produto">
        <img src={photo} alt={name} />
        <h4>{name}</h4>
        <div className="info_produto_opcoes">
          <div>
            <p className="text_qtd">Qtd:</p>
            <AumentarProduto>
              <button>-</button>
              <input type="text" name="" id="" />
              <button>+</button>
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
