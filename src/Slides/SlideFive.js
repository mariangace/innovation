import React  from 'react'
import { Slide, Heading, Text, Image, FlexBox} from 'spectacle';

function SlideFive() {

  return (
    <Slide>
      <Heading>¿Qué fue primero?</Heading>
        <FlexBox flexDirection='column'>
          <Image width='400px' src="../images/app.gif"/>
          <Text>VS</Text>
          <Image  width='400px' src="../images/problem.gif"/>
        </FlexBox>
    </Slide>
  )
}

export default SlideFive;
