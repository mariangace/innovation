import React, { useState, useEffect  } from 'react'
import { Slide, Heading, Grid, FlexBox, Image , Text } from 'spectacle';

function SlideOne() {
  const products = ['Tecnología', 'Plataformas', 'Aplicaciones', 'Productos'];
  const [random, setrandom] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      // set number every 5s
      () => {
        if(random === products.length-1){
          setrandom(0)
        }else{
          setrandom(random+1)
        }
      },
      2000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, [random, products.length])

  return (
    <Slide >
      <FlexBox  height='100%' justifyContent={'space-around'} alignContent='center'>
        <Grid >
          <Heading textAlign='left' margin={'0px'} fontSize={'80px'}>Desarrollando
          </Heading>
          <Heading textAlign='left' margin={'0px'}>
          {products[random]}
          </Heading>
          <Text textAlign={'left'} margin={'0px'}>@mariangace</Text>
        </Grid>
        <FlexBox flexDirection='column' alignContent={'flex-end'} justifyContent={'flex-end'} >
          <Image width={'100%'} src="../images/technology.gif"></Image>
         
        </FlexBox>
      </FlexBox>
    </Slide>
  )
}

export default SlideOne;
