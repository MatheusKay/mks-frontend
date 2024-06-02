import { motion } from 'framer-motion'

import styled from 'styled-components'

import { media } from '../../styleGlobal/estiloGlobal'

export const Contain = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;

  .overlay {
    width: 70%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    @media (min-width: ${media.tablet}) and (max-width: ${media.descktop}) {
      width: 50%;
    }
  }
`

export const CarrinhoContain = styled.aside`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0f52ba;
  color: #fff;
  font-weight: 700;
  font-size: 28px;

  .carrinho_contain_infos {
    height: 100%;
    padding: 36px 24px 42px 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${media.tablet}) {
      padding: 24px;
    }
  }

  .info_product {
    max-height: 345px;
    height: 100%;
    overflow-y: overlay;
    overflow-x: hidden;

    @media (max-width: ${media.tablet}) {
      max-height: 325px;
    }
  }

  ul {
    li {
      margin-bottom: 24px;
      list-style: none;
    }
  }

  @media (max-width: ${media.tablet}) {
    width: 85%;
  }

  @media (min-width: ${media.tablet}) and (max-width: ${media.descktop}) {
    width: 50%;
  }
`

export const HeaderCarrinho = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    width: 184px;
    font-size: 27px;
  }

  @media (max-width: ${media.tablet}) {
    button {
      width: 45px;
      height: 45px;
    }
  }
`

export const CarrinhoPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${media.tablet}) {
    h3,
    span {
      font-size: 28px;
    }
  }
`

export const ButtonBuy = styled.button`
  max-width: 488px;
  width: 100%;
  height: 96px;
  background-color: #000;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 28px;

  @media (max-width: ${media.tablet}) {
    font-size: 20px;
  }

  @media (min-width: ${media.tablet}) and (max-width: ${media.descktop}) {
    max-width: unset;
  }
`
