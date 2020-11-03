import React from 'react'
import styled from 'styled-components'

export default function Nav() {
  return (
    <Wrapper>
      <div>
        <h2>Garden Barber</h2>
      </div>
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
`