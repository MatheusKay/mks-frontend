import { Provider } from 'react-redux'

import Header from './components/Header'
import SectionCard from './components/SectionCard'

import { EstiloGlobal } from './styleGlobal/estiloGlobal'

import { store } from './store'
import CardCarrinho from './components/CardCarrinho'
import Carrinho from './components/Carrinho'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <SectionCard />
      <Carrinho />
    </Provider>
  )
}

export default App
