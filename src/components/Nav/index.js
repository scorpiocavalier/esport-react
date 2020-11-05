import React from 'react'
import styled from 'styled-components'
import { BurgerMenu } from './BurgerMenu'
import { Logo } from './Logo'
import { ShopLink } from './ShopLink'

export default function Nav() {
  return (
    <Wrapper>
      <BurgerMenu />
      <Logo />
      <ShopLink />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid;
  padding: 0 2rem;
  height: 15vh;
  background: black;
  color: white;
`