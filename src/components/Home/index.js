import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'

export function Home() {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`