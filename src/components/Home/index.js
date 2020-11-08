import React from 'react'
import styled from 'styled-components'
import HeroSection from './HeroSection'
import { NewsSection } from './NewSection'
// import { ProductionSection } from './ProductionSection'
// import { ShopSection } from './ShopSection'

export function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <NewsSection />
      {/* <ProductionSection /> */}
      {/* <ShopSection /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`