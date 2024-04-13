import styled from 'styled-components'
import { media } from '../../styleGlobal/estiloGlobal'

export const FooterContain = styled.footer`
  width: 100%;
  padding: 8px;
  margin-top: 172px;
  background-color: #eee;

  p {
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: ${media.tablet}) {
    margin-top: 36px;
  }
`
