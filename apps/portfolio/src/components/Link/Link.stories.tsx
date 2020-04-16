import React from 'react'
import { NavLink } from 'react-router-dom'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

import { withThemeProvider, withMockRouter } from '@portfolio/utils'
import { Link } from './Link'
import { withLayoutWrapper } from '@portfolio/storybook-utils'
import { COLORS, SIZES } from './constants'

export default {
  title: 'portfolio/components/Link',
  component: Link,
  decorators: [
    withKnobs,
    withThemeProvider,
    withLayoutWrapper,
    withA11y,
    withMockRouter,
  ],
}

export const sandbox = () => (
  <Link
    color={select('color', COLORS, COLORS.default)}
    size={select('size', SIZES, SIZES.default)}
    active={boolean('active', false)}
  >
    This a link
  </Link>
)

export const colors = () => (
  <>
    <Link color='default'>Default</Link>
    <Link color='primary'>Primary</Link>
    <Link color='secondary'>Secondary</Link>
  </>
)
colors.story = {
  parameters: { docs: { storyDescription: 'Three colors are supported.' } },
}

export const active = () => <Link active>Active</Link>

export const sizes = () => (
  <>
    <Link size='default'>Default</Link>
    <Link size='big'>Big</Link>
  </>
)
sizes.story = {
  parameters: { docs: { storyDescription: 'Two sizes are supported.' } },
}

export const navLink = () => (
  <Link
    color='primary'
    as={NavLink}
    to=''
    isActive={() => window.location.search.includes('nav-link')}
  >
    NavLink
  </Link>
)

navLink.story = {
  name: 'NavLink',
  parameters: {
    docs: {
      storyDescription: "Example of how to use `react-router-dom`'s `NavLink`",
    },
  },
}
