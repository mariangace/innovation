import React  from 'react'
import { Slide, Heading, Image, FlexBox} from 'spectacle';

function SlideTen() {

  return (
    <Slide>
      <Heading>¿Quién es usuario? ¿Quién es cliente?</Heading>
        <FlexBox>
          <Image width='30%' src="../images/fb.png"/>
          <Image width='30%' src="../images/wa.jpg"/>
        </FlexBox>
    </Slide>
  )
}

export default SlideTen;
