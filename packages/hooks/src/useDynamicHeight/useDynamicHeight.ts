import { useState, useEffect } from 'react'

/** This hook with return the innerHeight when the window resizes. */
export const useDynamicHeight = (): number => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setDynamicHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return dynamicHeight
}
