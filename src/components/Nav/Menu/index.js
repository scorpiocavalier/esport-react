import React, { useState } from 'react'
import styled from 'styled-components'
import { BurgerMenu } from './BurgerMenu'
import { Menudropdown } from './MenuDropdown'

export function Menu() {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(!open)

  return (
    <Wrapper>
      <BurgerMenu open={ open } handleClick={ handleClick } />
      <h2>{ open ? 'CLOSE' : 'MENU' }</h2>
      <Menudropdown open={ open } />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20%;
`