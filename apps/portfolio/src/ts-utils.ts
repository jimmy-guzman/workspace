type DefaultProps<TDefaults> = { defaultProps: TDefaults }

/**
 * Use to set default props to typescript styled component
 * @param defaultProps default props to be set
 * @param component target component to set defaultProps to
 * @example withDefaultProps( { color: 'default' }, styled.a<LinkProps>`...`
 */
export const withDefaultProps = <
  TDefaults,
  T extends Partial<DefaultProps<TDefaults>>
>(
  defaultProps: TDefaults,
  component: T
): T & DefaultProps<TDefaults> => {
  component.defaultProps = defaultProps

  return component as T & DefaultProps<TDefaults>
}

// const LayoutWrapper = styled.div`
//   display: inline-grid;
//   grid-auto-flow: column;
//   grid-gap: 1em;
//   align-items: end;
// `

// export const withLayoutWrapper = (...props) => (
//   storyFn: () => React.ComponentType
// ) => {
//   return <LayoutWrapper {...props}>{storyFn()}</LayoutWrapper>
// }
