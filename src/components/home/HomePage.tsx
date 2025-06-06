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

import { HomePageContent } from './HomePageContent';
import {fetchHome} from '../../services/homeApi'


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
        {data && (
          <>
                <Heading as="h4">
                  {data.content.title}
                </Heading>
                <Paragraph>
                  {data.content.subtitle}
                </Paragraph>
                <Button href="#">
                  {data.content.action}
                </Button>
          </>
        )}
      </GridItem>
    </Grid>
  );
}

export default HomePage;
