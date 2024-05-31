import { motion } from 'framer-motion'

import styled from 'styled-components'

import { media } from '../../styleGlobal/estiloGlobal'

export const SectionContain = styled(motion.main)`
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 36px;

  @media (max-width: ${media.tablet}) {
    grid-template-columns: 1fr;
  }

  .skeleton {
    max-width: 216px;
    min-height: 342px;
    width: 100%;
  }
`
