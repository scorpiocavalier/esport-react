import Nav from './components/Nav'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { Shop } from './components/Shop'

export default function App() {
  return (
    <Router>
      <Wrapper>

        <GlobalStyle />
        <Nav />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
        </Switch>

      </Wrapper>
    </Router>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`