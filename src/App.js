import React from 'react';
import { Deck, FullScreen, Box, Progress, FlexBox } from 'spectacle';
import  SlideOne   from 'Slides/SlideOne';
import  SlideTwo   from 'Slides/SlideTwo';
import  SlideThree   from 'Slides/SlideThree';
import  SlideFour   from 'Slides/SlideFour';
import  SlideFive   from 'Slides/SlideFive';
import  SlideSix   from 'Slides/SlideSix';
import  SlideSeven   from 'Slides/SlideSeven';
import  SlideEight   from 'Slides/SlideEight';
import  SlideNine   from 'Slides/SlideNine';
import SlideTen from 'Slides/SlideTen';
import SlideEleven from 'Slides/SlideEleven';
import SlideTwelve from 'Slides/SlideTwelve';
import SlideEnd from 'Slides/SlideEnd';

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function App() {

  return (
    <Deck template={template}>
      <SlideOne/>
      <SlideTwo />
      <SlideThree />
      <SlideFour />
      <SlideFive />
      <SlideSix />
      <SlideTen />
      <SlideTwelve/>
      <SlideSeven />
      <SlideEight />
      <SlideNine />
      <SlideEleven/>
      <SlideEnd/>
    </Deck>
  );
}
export default App;
