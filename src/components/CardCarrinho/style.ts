import styled from 'styled-components'

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
  }

  .text_qtd {
    font-size: 6px;
  }

  .button_contain {
    position: absolute;
    top: -6px;
    right: -6px;
  }

  h4 {
    margin-left: 24px;
    margin-right: 9px;
    font-weight: 400;
    color: #2c2c2c;
  }

  span {
    margin-left: 40px;
    font-weight: 700;
    color: #000;
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
`
