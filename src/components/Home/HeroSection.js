import React from 'react'
import styled from 'styled-components'

export default function Hero() {
  return (
    <Wrapper>
      <Image src='https://www.futuresplatform.com/sites/default/files/styles/article_hero_image/public/2019-02/esports.jpg?itok=TK6lpK_V' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background: black;
  color: white;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`