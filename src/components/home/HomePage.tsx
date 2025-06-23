import React, { ReactElement,useEffect, useState } from 'react';

import {
  Heading,
  Paragraph,
  Text,
  Button,
  Grid,
  GridItem,
  Strong,
  Accordion,
  Container,
  Table
} from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';
import { TableComponent } from './TableComponent';
import { SummaryBoxComponent } from './SummaryBoxComponent';
import { HomePageContent } from './HomePageContent';
import {fetchHome} from '../../services/homeApi'


function HomePage(): ReactElement {
  const { coreFeaturesDesc } =
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
        <Heading weight="normal" marginBottom="04">Accounts by entity</Heading>
      </GridItem>
      <GridItem xs={2} className='sidebar'>
        <Accordion label='Entity'>CMP Account</Accordion>
      </GridItem>
      <GridItem xs={10}>
        <Container className='home-container'>
        {data && (
          <>
            <SummaryBoxComponent />
            <TableComponent data={data}/>
          </>
        )}
        </Container>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
