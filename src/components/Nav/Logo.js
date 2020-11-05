import React from 'react'
import styled from 'styled-components'

export function Logo() {
  return (
    <Wrapper>
      <Image src="/images/logo.jpeg" alt="Garden Barber Logo" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: inherit;
`

const Image = styled.img`
  height: inherit;
`