import React  from 'react'
import { Slide, Heading, Image, FlexBox} from 'spectacle';

function SlideNine() {

  return (
    <Slide>
      <Heading>Customer vs User</Heading>
        <FlexBox>
          <Image width='80%' src="../images/uservsclient.png"/>
        </FlexBox>        
    </Slide>
  )
}

export default SlideNine;
