import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Card from '../Card'

import { SectionContain } from './style'

import { useGetProductsACSQuery } from '../../services/api'

import {
  ProductsListWithAmount,
  addCart,
  open
} from '../../store/reducers/carrinho'
import { formataPrice } from '../../utility'
import { RootReducer } from '../../store'

const SectionCard = () => {
  const { data: response } = useGetProductsACSQuery({
    page: 1,
    rows: 10,
    sortBy: 'price',
    orderBy: 'ASC'
  })

  const { isOpen } = useSelector((state: RootReducer) => state.carrinho)
  const [delay, setDelay] = useState(false)

  const dispatch = useDispatch()

  const products = response?.products || []

  const productsWithAmount: ProductsListWithAmount[] = products.map(
    (product) => ({
      ...product,
      amount: 1
    })
  )

  const addProduct = (item: ProductsListWithAmount) => {
    dispatch(addCart(item))
    dispatch(open())
  }

  setTimeout(() => {
    setDelay(true)
  }, 5000)

  return (
    <>
      {delay == false ? (
        <SectionContain className="container" data-testid="section-skeleton">
          {products.map((item) => (
            <Skeleton className="skeleton" key={item.id} />
          ))}
        </SectionContain>
      ) : (
        <SectionContain
          initial={{ position: 'relative', zIndex: 2 }}
          animate={{
            zIndex: isOpen ? -1 : 2
          }}
          className="container"
          data-testid="section-cards"
        >
          {productsWithAmount?.map((product) => (
            <Card
              name={product.name}
              description={product.description}
              photo={product.photo}
              price={formataPrice(product.price)}
              key={product.id}
              dataTest="card-product"
              onClick={() => addProduct(product)}
            />
          ))}
        </SectionContain>
      )}
    </>
  )
}

export default SectionCard
