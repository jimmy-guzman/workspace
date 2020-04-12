import styled, { keyframes } from 'styled-components'

const long = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`

const short = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`

const Bar = styled.div`
  margin: 0;
  position: relative;
  height: 8px;
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  overflow: hidden;
`

const Progress = styled.div`
  background-color: ${({ theme }) => theme.colors.quaternary};
  &:before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${long} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${short} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
  }
`

export const Styled = {
  Bar,
  Progress,
}
