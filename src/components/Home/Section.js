import React from 'react'
import styled from 'styled-components'

export function Section({ children, title }) {
  return (
    <Wrapper>
      <Title>{ title }</Title>
      { children }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f90114;
  padding: 3rem 0;
`

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`