import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ShopLogo from '../../icons/football-shirt.svg'

export function ShopLink() {
  return (
    <Wrapper>
      <h2>SHOP</h2>
      <Link to='/shop'>
        <Image src={ ShopLogo } alt="Shop Logo" />
      </Link>
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
  cursor: pointer;
`