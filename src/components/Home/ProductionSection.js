import React from 'react'
import { Gallery } from './Gallery'
import { Section } from './Section'

export function ProductionSection(props) {
  const title = 'Productions'
  const imageLinks = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLvvh0hs0NWvUAGGQ5H4gUzLNP4J5hkQc2Rg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGYSUQ7vhfksR1dwypPO7tz1D2byUfMmGvkw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDV65HO474J9GWl83CjqNPTXbgbDMOR9N8uQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUDHq6jJ1M5yM2Chdv8dr_XIR8F8yDJp1HoQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6wrKY36HLmaEg7Sc9vmM4wDT_ivExB244sA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpxMlvVAy0jEcLXBuGvps4n6p3Alzv49o8Vw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGYSUQ7vhfksR1dwypPO7tz1D2byUfMmGvkw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUDHq6jJ1M5yM2Chdv8dr_XIR8F8yDJp1HoQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6wrKY36HLmaEg7Sc9vmM4wDT_ivExB244sA&usqp=CAU',
  ]

  return (
    <Section title={ title }>
      <Gallery imageLinks={ imageLinks } />
    </Section>
  )
}