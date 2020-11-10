import React from 'react'
import styled from 'styled-components'

export function Gallery({ imageLinks }) {
  return (
    <Grid>
      { imageLinks.map((link, index) =>
        <Image key={ index } src={ link } />
      ) }
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 300px);
  }
`

const Image = styled.img`
  width: 300px;
  height: 200px;
  border: 2px solid white;
  background: gray;
`