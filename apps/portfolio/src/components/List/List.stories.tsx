import React from 'react'
import { Styled } from './List.syles'
import { withThemeProvider } from '@portfolio/utils'

export default {
  title: 'portfolio/components/List',
  component: Styled.List,
  decorators: [withThemeProvider],
}

export const basic = () => (
  <Styled.List>
    <Styled.ListItem>List Item 1</Styled.ListItem>
    <Styled.ListItem>List Item 2</Styled.ListItem>
    <Styled.ListItem>List Item 3</Styled.ListItem>
  </Styled.List>
)

export const centered = () => (
  <Styled.List centered>
    <Styled.ListItem>List Item 1</Styled.ListItem>
    <Styled.ListItem>List Item 2</Styled.ListItem>
    <Styled.ListItem>List Item 3</Styled.ListItem>
  </Styled.List>
)
