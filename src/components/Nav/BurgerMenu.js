import React, { useState } from 'react'
import styled from 'styled-components'

export function BurgerMenu() {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(!open)

  return (
    <Burger onClick={handleClick}>
      <Line1 open={open} />
      <Line2 open={open} />
      <Line3 open={open} />
    </Burger>
  )
}

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Line = styled.div`
  width: 50px;
  height: 6px;
  background-color: black;
  margin: 5px 0;
  transition: 0.4s;
`

const Line1 = styled(Line)`
  transform-origin: top right;
  transform: ${props => props.open && `rotate(-45deg) translate(-5px, -5px)`};
`

const Line2 = styled(Line)`
  opacity: ${props => props.open && `0`};
`

const Line3 = styled(Line)`
  transform-origin: bottom right;
  transform: ${props => props.open && `rotate(45deg) translate(-3px, 5px)`};
`