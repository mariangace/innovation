import React  from 'react'
import { Slide, Heading, Image, FlexBox } from 'spectacle';

function SlideFour() {

  return (
    <Slide>
      <Heading>Tecnología en tiempos <br></br>de pandemia</Heading>
        <FlexBox>
          <Image width='300px' src="../images/ecom.gif"/>
          <Image width='300px' src="../images/edu.gif"/>
        </FlexBox>
        <FlexBox>
          <Image width='300px' src="../images/lot.gif"/>
          <Image width='300px' src="../images/fit.gif"/>
        </FlexBox>
    </Slide>
  )
}

export default SlideFour;
