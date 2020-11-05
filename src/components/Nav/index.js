import React from 'react'
import styled from 'styled-components'
import { BurgerMenu } from './BurgerMenu'

export default function Nav() {


  return (
    <Wrapper>
      <BurgerMenu />
      <div>
        <ul>
          <li>Team</li>
          <li>Shop</li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`