import shoppBag from '../../assets/shopping-bag.png'

import { CardButton, CardCotain, CardInfos } from './style'

type Props = {
  name: string
  price: string
  photo: string
  description: string
}

const Card = ({ name, price, photo, description }: Props) => {
  return (
    <CardCotain>
      <div className="padding">
        <div className="img_logo">
          <img src={photo} alt={name} />
        </div>
        <CardInfos>
          <h2>{name}</h2>
          <span>
            R$ <p>{price}</p>
          </span>
        </CardInfos>
        <p>{description}</p>
      </div>
      <CardButton>
        <img src={shoppBag} alt="Imagem que representa o botão de compra" />
        <span>Comprar</span>
      </CardButton>
    </CardCotain>
  )
}

export default Card
