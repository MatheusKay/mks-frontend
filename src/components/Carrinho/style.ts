import styled from 'styled-components'

export const CarrinhoContain = styled.aside`
  max-width: 488px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
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
  }

  ul {
    li {
      margin-bottom: 24px;
      list-style: none;
    }
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
`

export const CarrinhoPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`
