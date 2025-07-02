import React, { ReactElement,useEffect, useState } from 'react';

import {
  Button,
  Grid,
  GridItem,
  TextField,
  ContentGroup
} from '@constellation/core';
import { TableBoxComponent } from './TableBoxComponent';
import { SummaryBoxComponent } from './SummaryBoxComponent';
import { Buttons } from './TradePageContent';


function TradePage(): ReactElement {
  return (
    <>
      <Grid className="trade-container">
        <GridItem xs={9}>
          <ContentGroup marginBottom="03">
          <div className="trade-search-box">
               <i className="fas fa-search"></i><TextField name="search" label={''} marginBottom="05" /> 
          </div> 
          <div className='filter-nav'>
            <Button  variation="secondary">{Buttons.ALL}(5)</Button>
            <Button variation="secondary">{Buttons.PRIMARY}(8)</Button>
            <Button variation="secondary">{Buttons.SECONDARY}(5)</Button>
            <Button variation="secondary" disabled>{Buttons.REDEEMABLE}(2)</Button>
            <Button  variation="secondary">{Buttons.MMF}(2)</Button>

          </div>
          </ContentGroup>
          <TableBoxComponent/>
        </GridItem>
        <GridItem xs={3}>
          <SummaryBoxComponent />
        </GridItem>
      </Grid>
    </>
  );
}

export default TradePage;
