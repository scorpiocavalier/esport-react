import React from 'react'
import styled from 'styled-components'
import { Menu } from './Menu'
import { Logo } from './Logo'
import { ShopLink } from './ShopLink'

export default function Nav() {
  return (
    <Wrapper>
      <Menu />
      <Logo />
      <ShopLink />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 10vh;
  background: black;
  color: white;
`