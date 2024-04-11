import shoppBag from '../../assets/shopping-bag.png'
import exemplo from '../../assets/iphone-x.png'

import { CardButton, CardCotain, CardInfos } from './style'

const Card = () => {
  return (
    <CardCotain>
      <div className="padding">
        <div className="img_logo">
          <img src={exemplo} alt="" />
        </div>
        <CardInfos>
          <h2>Beats Headphones</h2>
          <span>
            R$ <p>899</p>
          </span>
        </CardInfos>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          necessitatibus quo.
        </p>
      </div>
      <CardButton>
        <img src={shoppBag} alt="Imagem que representa o botão de compra" />
        <span>Comprar</span>
      </CardButton>
    </CardCotain>
  )
}

export default Card
