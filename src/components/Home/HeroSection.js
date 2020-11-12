import React from 'react'
import styled from 'styled-components'

export default function Hero() {
  const images = [
    {
      url: 'https://www.esportwissen.de/wp-content/uploads/2018/09/20180525_Bart-Oerbekke_ESL-ONE_Birmingham_12028-e1537189513825.jpg',
      skewY: '-10deg',
      translateX: '300px',
      zIndex: '1',
      width: '500px',
      height: '300px',
    },
    {
      url: 'https://www.futuresplatform.com/sites/default/files/styles/article_hero_image/public/2019-02/esports.jpg?itok=TK6lpK_V',
      skewY: '-10deg',
      translateX: '150px',
      zIndex: '2',
      width: '500px',
      height: '300px',
    },
    {
      url: 'https://www.casino.org/blog/wp-content/uploads/esport.jpg',
      skewY: '0',
      translateX: '0',
      zIndex: '3',
      width: '800px',
      height: '400px',
    },
    {
      url: 'https://static.owayo-cdn.com/newhp/img/magazin/popularesportsgames/most-popular-esports-games-670px.jpg',
      skewY: '10deg',
      translateX: '-150px',
      zIndex: '2',
      width: '500px',
      height: '300px',
    },
    {
      url: 'https://gammalaw.com/wp-content/uploads/2017/11/AdobeStock_169659584-1920x1036-1.jpeg',
      skewY: '10deg',
      translateX: '-300px',
      zIndex: '1',
      width: '500px',
      height: '300px',
    },
  ]
  return (
    <Wrapper>
      <Slider>
        { images.map((img, index) => (
          <Image
            key={ index }
            src={ img.url }
            skewY={ img.skewY }
            translateX={ img.translateX }
            zIndex={ img.zIndex }
            width={ img.width }
            height={ img.height }
          />
        )) }
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background: black;
  color: white;
  overflow: hidden;
`

const Slider = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
`

const Image = styled.img`
  object-fit: cover;
  height: ${ props => props.height };
  width: ${ props => props.width };
  transform: ${ props => `skewY(${ props.skewY }) translateX(${ props.translateX })` };
  z-index: ${ props => props.zIndex };
  -webkit-box-reflect: below 30px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.4)));
  box-shadow: 0 0 15px 5px rgba(250, 250, 250, 0.8);
  border-radius: 15px;
`