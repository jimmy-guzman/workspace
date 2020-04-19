import styled from 'styled-components'

import { flex, mq } from '@portfolio/utils'

export const StyledProjectButtons = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  ${flex('flex', 'row', 'space-between', 'center')};
  @media (min-width: ${mq('medium')}) {
    bottom: 50%;
  }
  @media (min-width: ${mq('large')}) {
    bottom: 50%;
  }
`
