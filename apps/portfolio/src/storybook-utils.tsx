import React from 'react'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  justify-content: center;
  align-items: end;
  padding: 1.3em 0;
  width: 100%;
  border: 0.05em dashed rgb(47, 47, 47);
  background: rgb(255, 255, 255);
`

export const withLayoutWrapper = (storyFn: () => React.ComponentType) => {
  return <LayoutWrapper>{storyFn()}</LayoutWrapper>
}
