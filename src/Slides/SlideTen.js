import React  from 'react'
import { Slide, Heading, Image, FlexBox, Text} from 'spectacle';

function SlideTen() {

  return (
    <Slide>
      <Heading>Design Thinking</Heading>
        <FlexBox>
          <Image width='50%' src="../images/design_thinking.jpg"/>
        </FlexBox>
       <Text textAlign='center'>"Prueba rápido, fracasa rápido"</Text>
    </Slide>
  )
}

export default SlideTen;
