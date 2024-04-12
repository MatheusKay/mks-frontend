import styled from 'styled-components'

import { Props } from '.'

export const CloseContain = styled.button<Props, Omit<Props, 'onClick'>>`
  width: ${(props) => (props.size === '' ? '18px' : props.size)};
  height: ${(props) => (props.size === '' ? '18px' : props.size)};
  background-color: transparent;
  border: none;

  img {
    width: 100%;
  }
`
