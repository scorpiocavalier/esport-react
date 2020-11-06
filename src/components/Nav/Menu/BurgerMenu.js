import React from 'react'
import styled from 'styled-components'

export function BurgerMenu({ open, handleClick }) {
  return (
    <Burger onClick={ handleClick }>
      <Line1 open={ open } />
      <Line2 open={ open } />
      <Line3 open={ open } />
    </Burger>
  )
}

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  margin-right: 1rem;
  cursor: pointer;
`

const Line = styled.div`
  width: 30px;
  height: 4px;
  background-color: white;
  margin: 3px 0;
  transition: 0.4s;
`

const Line1 = styled(Line)`
  transform-origin: top right;
  transform: ${ props => props.open && `rotate(-45deg) translate(-6px, -6px)` };
`

const Line2 = styled(Line)`
  opacity: ${ props => props.open && `0` };
  background: #f90114;
`

const Line3 = styled(Line)`
  transform-origin: bottom right;
  transform: ${ props => props.open && `rotate(45deg) translate(-5px, 5px)` };
`