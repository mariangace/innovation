import React  from 'react'
import { Slide, Heading, Image, FlexBox} from 'spectacle';

function SlideSeven() {

  return (
    <Slide>
      <Heading>MVP</Heading>
        <FlexBox flexDirection='column'>
          <Image width='600px' src="../images/mvp.gif"/>
        </FlexBox>        
    </Slide>
  )
}

export default SlideSeven;
