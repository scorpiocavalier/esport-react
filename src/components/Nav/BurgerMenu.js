import React, { useState } from 'react'
import styled from 'styled-components'

export function BurgerMenu() {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(!open)

  return (
    <Wrapper>
      <Burger onClick={ handleClick }>
        <Line1 open={ open } />
        <Line2 open={ open } />
        <Line3 open={ open } />
      </Burger>
      <h2>Menu</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20%;
`

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  margin-right: 1rem;
`

const Line = styled.div`
  width: 40px;
  height: 5px;
  background-color: white;
  margin: 3px 0;
  transition: 0.4s;
`

const Line1 = styled(Line)`
  transform-origin: top right;
  transform: ${ props => props.open && `rotate(-45deg) translate(-2px, -6px)` };
`

const Line2 = styled(Line)`
  opacity: ${ props => props.open && `0` };
  background: #f90114;
`

const Line3 = styled(Line)`
  transform-origin: bottom right;
  transform: ${ props => props.open && `rotate(45deg) translate(-3px, 5px)` };
`