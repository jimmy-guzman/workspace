import { useState } from 'react'

const previous = (length: number, current: number): number => {
  return (current - 1 + length) % length
}

const next = (length: number, current: number): number => {
  return (current + 1) % length
}

export enum TO_SLIDE {
  PREVIOUS = 'PREVIOUS',
  NEXT = 'NEXT',
}

type UseSlides = (numberOfSlides: number) => [number, (to: TO_SLIDE) => void]

export const useSlides: UseSlides = numberOfSlides => {
  const [active, setActive] = useState<number>(0)

  const updateActive = (to: TO_SLIDE) => {
    if (to === TO_SLIDE.NEXT) {
      setActive(next(numberOfSlides, active))
    }

    if (to === TO_SLIDE.PREVIOUS) {
      setActive(previous(numberOfSlides, active))
    }
  }

  return [active, updateActive]
}
