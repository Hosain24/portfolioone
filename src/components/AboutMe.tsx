import React from 'react'
import Container from './Container'
import Title from './Title'

const AboutMe = () => {
  return (
  <section id='aboutme'>
    <Container className='border border-zinc-400 bg-zinc-100 p-4'>
      <Title title='About Me' className='font-bold'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus illo assumenda quas voluptatibus accusantium, voluptates officia voluptatem, beatae saepe atque eligendi? Delectus perferendis, dignissimos commodi atque doloribus fuga exercitationem ipsum officia totam similique aut voluptatem possimus minima at libero illo quos, quod earum deserunt! Aut vel maiores iste laboriosam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis laborum numquam quidem aspernatur asperiores rerum tempora debitis officia fuga?</p>
    </Container>
  </section>
  )
}

export default AboutMe

