import styled from 'styled-components'

import { em, mq } from '@portfolio/utils'
import { titleMargin, titleFontSizes } from './constants'
import { fontWeights, letterSpacing } from '@portfolio/styles'

const Wrapper = styled.div`
  text-align: center;
`
const Header = styled.h1`
  margin: ${titleMargin};
  font-weight: ${fontWeights.regular};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: ${letterSpacing.more};
  font-size: ${em(titleFontSizes.default.header)};
  @media (min-width: ${mq('medium')}) {
    font-size: ${em(titleFontSizes.tablet.header)};
  }
`

const SubHeader = styled.h2`
  margin: ${titleMargin};
  font-weight: ${fontWeights.regular};
  letter-spacing: ${letterSpacing.more};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${em(titleFontSizes.default.subHeader)};
  @media (min-width: ${mq('medium')}) {
    font-size: ${em(titleFontSizes.default.subHeader)};
  }
`

export const Styled = { Wrapper, Header, SubHeader }
