import Card from '../Card'

import { SectionContain } from './style'

import { useGetProductsACSQuery } from '../../services/api'

const SectionCard = () => {
  const { data: response } = useGetProductsACSQuery({
    page: 1,
    rows: 10,
    sortBy: 'price',
    orderBy: 'ASC'
  })

  const products = response?.products || []

  return (
    <SectionContain className="container">
      {products?.map((product) => (
        <Card
          name={product.name}
          description={product.description}
          photo={product.photo}
          price={product.price}
          key={product.id}
        />
      ))}
    </SectionContain>
  )
}

export default SectionCard
