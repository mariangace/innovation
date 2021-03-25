import React  from 'react'
import { Slide, Grid, FlexBox, Text, Image  } from 'spectacle';

function SlideTwo() {

  return (
    <Slide>
      <FlexBox  height='100%' alignContent='center'>
        <Grid>
          <Image src='../images/profile.jpg' />
        </Grid>
        <Grid>
         <Text textAlign={'right'}>
            Hi! I'm Mariana G.        
          </Text>
          <Text textAlign={'right'}>
            Software Engineer  🖥 ⚛️
          </Text>
          <Text textAlign={'right'}>
            Girl in Tech 👩🏻‍💻  
          </Text>
        </Grid>
      </FlexBox>
    </Slide>
  )
}

export default SlideTwo;
