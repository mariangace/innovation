import React  from 'react'
import { Slide, Heading, Image, FlexBox} from 'spectacle';

function SlideTen() {

  return (
    <Slide>
      <Heading>¿Usuario o cliente? </Heading>
        <FlexBox heigth='100%'>
          <Image width='30%' src="../images/fb.png"/>
          <Image width='30%' src="../images/wa.jpg"/>
        </FlexBox>
    </Slide>
  )
}

export default SlideTen;
