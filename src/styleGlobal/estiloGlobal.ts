import { createGlobalStyle } from 'styled-components'

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
    }
  }

  .container {
    max-width: 938px;
    width: 100%;
    margin: 120px auto 0;
  }
`
