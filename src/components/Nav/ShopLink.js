import React from 'react'
import styled from 'styled-components'
import ShopLogo from '../../icons/football-shirt.svg'

export function ShopLink() {
  return (
    <Wrapper>
      <h2>SHOP</h2>
      <Image src={ShopLogo} alt="Shop Logo"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`

const Image = styled.img`
  height: 40px;
  margin-left: 1rem;
`