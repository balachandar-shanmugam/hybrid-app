import React, { ReactElement,useEffect, useState } from 'react';

import {
  Heading,
  Paragraph,
  Text,
  Button,
  Grid,
  GridItem,
} from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';

import { HomePageContent } from './ExampleHomePageContent';
import dataQaIds from '../../../dataModel/dataQaIds';
import Content from '../content/ContentComponent';
import Hero from '../hero/HeroComponent';
import { fetchHome } from '../../../../services/homeApi.js'


function HomePage(): ReactElement {
  const { coreFeaturesDesc, heroComponentContent, promoBoxContent } =
    useContent<HomePageContent>();

  const [data, setData] = useState(null);
  useEffect(() => {
    fetchHome()
      .then((res)=>{

        setData(res);
        console.log('response success:', res);
      })
      .catch((error)=>console.log('response failed:', error))
    },[]
  );


  return (
    <Grid>
      <GridItem xs={12}>
        {heroComponentContent &&
          heroComponentContent.map(
            ({
              imgAltText,
              imageSrc,
              heading,
              subHeading,
              description,
              buttonLink,
              buttonText,
              buttonInfo,
              'data-qa-id': qaID,
            }) => (
              <Hero
                key={`hero-component-${subHeading}`}
                imgAltText={imgAltText}
                imageSrc={imageSrc || null}
                data-qa-id={`${qaID}-container`}
              >
                {/* {heading && (
                  <Text data-qa-id={`${qaID}-heading`}>{heading}</Text>
                )} */}
                <Heading as="h4" data-qa-id={`${qaID}-sub-heading`}>
                  {data && data.content.title}
                </Heading>
                <Paragraph data-qa-id={`${qaID}-description`}>
                  {data && data.content.subtitle}
                </Paragraph>
                {buttonText && (
                  <>
                    <Button onClick={buttonLink} data-qa-id={`${qaID}-button`}>
                      {data && data.content.action}
                    </Button>
                    <Paragraph
                      size="s1"
                      marginTop="03"
                      data-qa-id={`${qaID}-button-info`}
                    >
                      {buttonInfo}
                    </Paragraph>
                  </>
                )}
              </Hero>
            ),
          )}
      </GridItem>
    </Grid>
  );
}

export default HomePage;
