import { renderHook, act } from '@testing-library/react-hooks'

import { useDynamicHeight } from './useDynamicHeight'

const mockResizeWindow = (width: number, height: number): void => {
  ;(window as any).innerWidth = width
  ;(window as any).innerHeight = height

  window.dispatchEvent(new Event('resize'))
}

describe('useDynamicHeight', () => {
  it('should return height when resized', () => {
    const { result } = renderHook(() => useDynamicHeight())

    expect(result.current).toBe(768)

    act(() => {
      mockResizeWindow(500, 300)
    })

    expect(result.current).toBe(300)
  })
})
