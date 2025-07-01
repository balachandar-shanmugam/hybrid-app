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
  Table,
  IconSearch,
  TextField,
  ContentGroup
} from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';
import { TableBoxComponent } from './TableBoxComponent';
import { SummaryBoxComponent } from './SummaryBoxComponent';
import { HomePageContent } from './TradePageContent';
import {fetchHome} from '../../services/homeApi'


function TradePage(): ReactElement {


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
    <>
      <Grid className="trade-container">
        <GridItem xs={9}>
          <ContentGroup marginBottom="03">
          <div className="trade-search-box">
               <i className="fas fa-search"></i><TextField name="search" label={''} marginBottom="05" /> 
          </div> 
          <div className='filter-nav'>
            <Button  variation="secondary">All(5)</Button>
            <Button variation="secondary">Primary Sale(8)</Button>
            <Button variation="secondary">Secondary Sale(5)</Button>
            <Button variation="secondary" disabled>Redeemable sale</Button>
            <Button  variation="secondary">MMF(2)</Button>

          </div>
          </ContentGroup>
          {data && (
            <>
              <TableBoxComponent data={data}/>
            </>
          )}
        </GridItem>
        <GridItem xs={3}>
          <SummaryBoxComponent />
        </GridItem>
      </Grid>
    </>
  );
}

export default TradePage;
