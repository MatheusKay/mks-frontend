import styled from 'styled-components'

import { media } from '../../styleGlobal/estiloGlobal'

export const CardContain = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 16px 0;
  position: relative;
  font-size: 14px;
  border-radius: 8px;
  background-color: #fff;

  .info_produto {
    display: flex;
    align-items: center;

    > img {
      margin-left: 24px;
      width: 48px;
    }

    @media (max-width: ${media.tablet}) {
      flex-direction: column;

      img {
        margin-left: 0;
        width: 80px;
      }

      button {
        font-size: 20px;
      }
    }
  }

  .info_produto_opcoes {
    display: flex;
    align-items: center;

    @media (max-width: ${media.tablet}) {
      margin-top: 12px;
    }
  }

  .text_qtd {
    font-size: 6px;

    @media (max-width: ${media.tablet}) {
      display: none;
    }
  }

  .button_contain {
    position: absolute;
    top: -4px;
    right: -4px;

    @media (max-width: ${media.tablet}) {
      top: 6px;
      right: 6px;

      button {
        width: 24px;
        height: 24px;
      }
    }
  }

  h4 {
    width: 25%;
    margin-left: 24px;
    margin-right: 9px;
    font-weight: 400;
    color: #2c2c2c;

    @media (max-width: ${media.tablet}) {
      width: 100%;
      font-size: 16px;
      text-align: center;
    }
  }

  span {
    margin-left: 40px;
    font-weight: 700;
    color: #000;

    @media (max-width: ${media.tablet}) {
      padding: 8px 16px;
      background-color: #373737;
      color: #fff;
      font-size: 16px;
      border-radius: 6px;
    }
  }
`

export const AumentarProduto = styled.div`
  padding: 4px 8px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 8px;
  border: 0.3px solid #ccc;
  border-radius: 4px;

  input {
    width: 14px;
    height: 12px;
    border: none;
    border-left: 0.2px solid #ccc;
    border-right: 1px solid #ccc;
    text-align: center;
  }

  button {
    background-color: transparent;
    border: none;
  }

  @media (max-width: ${media.tablet}) {
    margin-top: 0;
    font-size: 20px;

    input {
      width: 32px;
    }
  }
`
