import { createGlobalStyle } from 'styled-components'

export const media = {
  descktop: '1024px',
  tablet: '767px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body {
    position: relative;

    button {
      cursor: pointer;
    }

    .is_close {
      display: none;
      opacity: 0;
    }
  }

  .container {
    max-width: 938px;
    width: 100%;
    margin: 120px auto 0;

    @media (max-width: ${media.tablet}) {
      width: 67%;
      margin: 18px auto 0;
    }
  }
`
