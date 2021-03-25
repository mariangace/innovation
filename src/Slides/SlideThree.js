import React  from 'react'
import { Slide, UnorderedList, Appear, ListItem, Heading, Image, FlexBox } from 'spectacle';

function SlideThree() {

  return (
    <Slide>
      <Heading>Innovación</Heading>
      <UnorderedList>
        <Appear>
          <ListItem> ¿Qué es innovación?</ListItem>
        </Appear>
        <Appear>
          <ListItem>
          ¿En qué áreas se pueda innovar?
          </ListItem>
        </Appear>
          <Appear>
            <FlexBox>
              <Image width='400px' src="../images/meme.png"/>
            </FlexBox>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default SlideThree;
