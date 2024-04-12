import img from '../../assets/apple-watch.png'

import ButtonClose from '../ButtonClose'

import { CardContain, AumentarProduto } from './style'

const CardCarrinho = () => {
  return (
    <CardContain>
      <div className="info_produto">
        <img src={img} alt="" />
        <h4>Nome do produto</h4>
        <div>
          <p className="text_qtd">Qtd:</p>
          <AumentarProduto>
            <button>-</button>
            <input type="text" name="" id="" />
            <button>+</button>
          </AumentarProduto>
        </div>
        <span>R$ 899</span>
      </div>
      <div className="button_contain">
        <ButtonClose />
      </div>
    </CardContain>
  )
}

export default CardCarrinho
