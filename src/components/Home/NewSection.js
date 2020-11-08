import React from 'react'
import styled from 'styled-components'

export function NewsSection(props) {
  const imageLinks = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLvvh0hs0NWvUAGGQ5H4gUzLNP4J5hkQc2Rg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGYSUQ7vhfksR1dwypPO7tz1D2byUfMmGvkw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDV65HO474J9GWl83CjqNPTXbgbDMOR9N8uQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUDHq6jJ1M5yM2Chdv8dr_XIR8F8yDJp1HoQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6wrKY36HLmaEg7Sc9vmM4wDT_ivExB244sA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpxMlvVAy0jEcLXBuGvps4n6p3Alzv49o8Vw&usqp=CAU'
  ]

  return (
    <Wrapper>
      <Title>Esports News</Title>
      <Gallery>
        { imageLinks.map((link, index) =>
          <Image key={ index } src={ link } />
        ) }
      </Gallery>
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

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 300px;
  /* padding: 3rem 0; */
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