import React from 'react'
import styled from 'styled-components'

export function Menudropdown({ open }) {
  return (
    <Wrapper open={ open }>
      <List>
        <ListItem>
          <ItemName>TEAM</ItemName>
          <Sublist open={ open } isHovered={ true }>
            <SublistItem>Player Name 1</SublistItem>
            <SublistItem>Player Name 2</SublistItem>
            <SublistItem>Player Name 3</SublistItem>
            <SublistItem>Player Name 4</SublistItem>
            <SublistItem>Player Name 5</SublistItem>
          </Sublist>
        </ListItem>

        <ListItem>
          <ItemName>SHOP</ItemName>
          <Sublist open={ open } isHovered={ false }>
            <SublistItem>Caps</SublistItem>
            <SublistItem>Hoodies</SublistItem>
            <SublistItem>T-Shirts</SublistItem>
            <SublistItem>Keychains</SublistItem>
          </Sublist>
        </ListItem>
      </List>

      <Footer>
        <h2>FOOTER</h2>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  visibility: ${ props => props.open ? 'visible' : 'hidden' };
  width: 100vw;
  height: 90vh;
  position: absolute;
  top: 10vh;
  left: 0;
  background: black;
  z-index: 10;
  transition: visibility 0.2s ease-out;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 60%;
  /* border: solid pink; */
`

const ListItem = styled.li`
  display: flex;
  width: 100%;
  /* border: solid green; */
`

const ItemName = styled.span`
  padding-bottom: 10px;
  width: 50%;
  font-size: 5em;
  letter-spacing: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

const Sublist = styled.ul`
  visibility: ${ props => props.open && props.isHovered ? 'visible' : 'hidden' };
  position: absolute;
  left: 50%;
  width: 300px;
  transition: visibility 0.2s ease-out;
  /* border: solid pink; */
`

const SublistItem = styled.li`
  margin-bottom: 15px;
  font-size: 1.5em;
  /* border: solid green; */
`

const Footer = styled.div`
  width: 60%;
  height: 15%;
  font-size: 3em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 10px;
  /* border: solid pink; */
`