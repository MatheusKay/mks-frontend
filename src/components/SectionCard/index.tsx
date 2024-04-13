import { useDispatch } from 'react-redux'

import Card from '../Card'

import { SectionContain } from './style'

import { useGetProductsACSQuery } from '../../services/api'

import { ProductsList, addCart, open } from '../../store/reducers/carrinho'

const SectionCard = () => {
  const { data: response } = useGetProductsACSQuery({
    page: 1,
    rows: 10,
    sortBy: 'price',
    orderBy: 'ASC'
  })

  const dispatch = useDispatch()

  const products = response?.products || []

  const addProduct = (item: ProductsList) => {
    dispatch(addCart(item))
    dispatch(open())
  }

  return (
    <SectionContain className="container">
      {products?.map((product) => (
        <Card
          name={product.name}
          description={product.description}
          photo={product.photo}
          price={product.price}
          key={product.id}
          onClick={() => addProduct(product)}
        />
      ))}
    </SectionContain>
  )
}

export default SectionCard
