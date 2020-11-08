import React from 'react'
import styled from 'styled-components'
import HeroSection from './HeroSection'
import { NewSection } from './NewSection'
// import { ProductionSection } from './ProductionSection'
// import { ShopSection } from './ShopSection'

export function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <NewSection />
      {/* <ProductionSection /> */}
      {/* <ShopSection /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`