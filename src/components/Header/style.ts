import styled from 'styled-components'

export const HeaderContain = styled.header`
  padding: 28px 64px;
  display: flex;
  justify-content: space-between;
  background-color: #0f52ba;
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: end;
  column-gap: 8px;
  color: #fff;

  h1 {
    font-size: 40px;
    font-weight: 600;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    opacity: 0.75;
  }
`

export const HeaderCart = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;

  span {
    margin-left: 16px;
    font-size: 18px;
    font-weight: 700;
  }
`
