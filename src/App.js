import Nav from './components/Nav'
import Hero from './components/Hero'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Hero />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`