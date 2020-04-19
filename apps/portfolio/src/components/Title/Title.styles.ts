import styled from 'styled-components'

import { em, mq } from '@portfolio/utils'
import {
  FONT_WEIGHTS,
  LETTER_SPACING,
  titleFontSizes,
  TITLE_MARGIN,
} from './constants'

const Wrapper = styled.div`
  text-align: center;
`
const Header = styled.h1`
  margin: ${TITLE_MARGIN};
  font-weight: ${FONT_WEIGHTS.REGULAR};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: ${LETTER_SPACING.MORE};
  font-size: ${em(titleFontSizes.default.header)};
  @media (min-width: ${mq('medium')}) {
    font-size: ${em(titleFontSizes.tablet.header)};
  }
`

const SubHeader = styled.h2`
  margin: ${TITLE_MARGIN};
  font-weight: ${FONT_WEIGHTS.REGULAR};
  letter-spacing: ${LETTER_SPACING.MORE};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${em(titleFontSizes.default.subHeader)};
  @media (min-width: ${mq('medium')}) {
    font-size: ${em(titleFontSizes.default.subHeader)};
  }
`

export const Styled = { Wrapper, Header, SubHeader }
