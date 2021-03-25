import React  from 'react'
import { Slide, Heading, Image, FlexBox, Text, Appear} from 'spectacle';

function SlideSeven() {

  return (
    <Slide>
      <Heading>Prototipo (tu mejor aliado)</Heading>
        <FlexBox flexDirection='column'>
          <Appear>
            <FlexBox>
              <Text>Empieza por lo más sencillo</Text>
              <Image width='500px' src="../images/paper-prototype.gif"/>
            </FlexBox>
          </Appear>
          <Appear>
            después ...
          </Appear>
          <Appear>
            <FlexBox>
              <Text>Utiliza herramientas gráficas</Text>
              <Image marginTop={'60px'} width='500px' src="../images/mock.gif"/>
            </FlexBox>
          </Appear>
        </FlexBox>        
    </Slide>
  )
}

export default SlideSeven;
