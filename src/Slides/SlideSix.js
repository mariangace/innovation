import React  from 'react'
import { Slide, Heading, Image, FlexBox, Appear, UnorderedList, ListItem} from 'spectacle';

function SlideSix() {

  return (
    <Slide>
      <Heading>Que... ¿tienes un problema?</Heading>
        <FlexBox flexDirection='column'>
          <Image width='400px' src="../images/problem.jpeg"/>
        </FlexBox>
        <UnorderedList>
        <Appear>
          <ListItem> ¿Cómo resuelven mis clientes esta problemática o necesidad actualmente? </ListItem>
        </Appear>
        <Appear>
          <ListItem> ¿Qué herramientas utilizan? </ListItem>
        </Appear>
        <Appear>
          <ListItem> ¿Existe un producto o servicio parecido al nuestro? </ListItem>
        </Appear>
      </UnorderedList>
        
    </Slide>
  )
}

export default SlideSix;
