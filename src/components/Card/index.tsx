import shoppBag from '../../assets/shopping-bag.png'

import { CardButton, CardCotain, CardInfos } from './style'

type Props = {
  name: string
  price: string
  photo: string
  description: string
  dataTest: string
  onClick: () => void
}

const Card = ({
  name,
  price,
  photo,
  description,
  onClick,
  dataTest
}: Props) => {
  return (
    <CardCotain data-testid={dataTest}>
      <div className="padding">
        <div className="img_logo">
          <img data-testid="product-image" src={photo} alt={name} />
        </div>
        <CardInfos>
          <h2 data-testid="product-name">{name}</h2>
          <span>
            R$ <p data-testid="product-price">{price}</p>
          </span>
        </CardInfos>
        <p data-testid="product-description">{description}</p>
      </div>
      <CardButton data-testid="button-card" onClick={onClick}>
        <img src={shoppBag} alt="Imagem que representa o botão de compra" />
        <span>Comprar</span>
      </CardButton>
    </CardCotain>
  )
}

export default Card
