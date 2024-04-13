import { Provider } from 'react-redux'

import Header from './components/Header'
import SectionCard from './components/SectionCard'
import Footer from './components/Footer'

import { EstiloGlobal } from './styleGlobal/estiloGlobal'

import { store } from './store'
import Carrinho from './components/Carrinho'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <SectionCard />
      <Carrinho />
      <Footer />
    </Provider>
  )
}

export default App
