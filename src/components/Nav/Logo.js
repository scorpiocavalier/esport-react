import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function Logo() {
  return (
    <Wrapper>
      <StyledLink to='/'>
        <Image src="/images/logo.jpeg" alt="Garden Barber Logo" />
      </StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: inherit;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  height: inherit;
`

const Image = styled.img`
  height: inherit;
`