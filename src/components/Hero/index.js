import React from 'react'
import styled from 'styled-components'

export default function Hero() {
  return (
    <Wrapper>
      <Brand>Garden Barber 2020</Brand>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background: black;
  color: white;
`

const Brand = styled.h2`
`