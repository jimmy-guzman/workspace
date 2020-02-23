import { renderHook, act } from '@testing-library/react-hooks'

import useTest from './useTest'

test('should use test', () => {
  const { result } = renderHook(() => useTest())

  expect(result.current[0]).toBe(0)
  expect(typeof result.current[1]).toBe('function')
})

test('should increment counter', () => {
  const { result } = renderHook(() => useTest())

  act(() => {
    result.current[1]()
  })

  expect(result.current[0]).toBe(1)
})
