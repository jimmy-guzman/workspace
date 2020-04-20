import styled from 'styled-components'

import { mq, em, flex } from '@portfolio/utils'
import { Card } from '../Card'
import { Link } from '../Link/Link.styles'
import { letterSpacing } from '@portfolio/styles'

export const StyledProject = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${mq('medium')}) {
    max-width: 768px;
    width: 80%;
  }
`

export const StyledProjectCard = styled(Card)`
  padding: 0 !important;
  position: relative;
`

export const StyledProjectImage = styled.img`
  display: block;
  width: 100%;
`

export const StyledProjectLinks = styled.div`
  margin-right: ${em('8px')};
`

export const StyledProjectLink = styled(Link)`
  margin-left: ${em('16px')};
`

export const StyledProjectInfo = styled.div`
  background: inherit;
  padding: ${em('16px')};
`
export const StyledProjectDesc = styled.div`
  margin: 0;
`

export const StyledProjectBar = styled.div`
  background: inherit;
  letter-spacing: ${letterSpacing.more};
  ${flex('flex', 'row', 'space-between', 'center')}
`
export const StyledProjectName = styled.span`
  padding: ${em('8px')};
  color: ${({ theme }) => theme.background.app};
  background: ${({ theme }) => theme.colors.primary};
`
