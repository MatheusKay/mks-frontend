import styled from 'styled-components'

export const CardCotain = styled.section`
  max-width: 216px;
  width: 100%;
  color: #2c2c2c;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px 2px 8px 0px #00000022;

  .padding {
    padding: 0 16px;

    .img_logo {
      max-width: 148px;
      margin: 0 auto;

      img {
        width: 100%;
        margin: 24px 0 16px;
      }
    }

    > p {
      margin: 8px 0 12px 0;
      font-size: 10px;
      font-weight: 300;
    }
  }
`

export const CardInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    font-weight: 400;
  }

  span {
    padding: 8px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    background-color: #373737;
    border-radius: 6px;
    color: #fff;
  }
`

export const CardButton = styled.button`
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 0 0 8px 8px;
  background-color: #0f52ba;
  color: #fff;
`
