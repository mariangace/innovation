import React  from 'react'
import { Slide, Heading, Image, FlexBox , Grid} from 'spectacle';

function SlideEigth() {

  return (
    <Slide>
      <Heading>Landing Page</Heading>
        <FlexBox >
          
          <Image width='300px' src="../images/social_media.gif"/>
         
          <Grid><Image width='600px' src="../images/landing.png"/>
          <FlexBox justifyContent='center' marginTop='60px'>
            <Image width='100px' src="../images/wp.png"/>
            <Image width='100px' src="../images/wix.png"/>
          </FlexBox>
          </Grid>
          <Image width='300px' src="../images/dashboard.png"/>
        </FlexBox>        
    </Slide>
  )
}

export default SlideEigth;
