import Nav from './components/Nav'
import styled from 'styled-components'

export default function App() {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`