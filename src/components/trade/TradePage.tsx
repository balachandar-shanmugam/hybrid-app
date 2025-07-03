import React, { ReactElement, useState } from 'react';

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


  const [selectedFund, setSelectedFund] = useState(null);

  
  const handleFundClick = (data) => {
    setSelectedFund(data);
  };



  return (
    <>
      <Grid className="trade-container">
        <GridItem xs={selectedFund ? 9 : 12}>
          <ContentGroup marginBottom="03">
          <div className="trade-search-box">
               <i className="fas fa-search"></i><TextField name="search" placeholder="Search" label={''} marginBottom="05" /> 
          </div> 
          <div className='filter-nav'>
            <Button  variation="secondary">{Buttons.ALL}(15)</Button>
            <Button variation="secondary">{Buttons.PRIMARY}(15)</Button>
            <Button variation="secondary" disabled>{Buttons.SECONDARY}(0)</Button>
            <Button variation="secondary">{Buttons.REDEEMABLE}(15)</Button>
            <Button  variation="secondary">{Buttons.MMF}(15)</Button>

          </div>
          </ContentGroup>
          <TableBoxComponent onFundClick={handleFundClick}/>
        </GridItem>
        <GridItem xs={3} style={{display: selectedFund ? "block" :"none"}}>
          <SummaryBoxComponent data={selectedFund} />
        </GridItem>
      </Grid>
    </>
  );
}

export default TradePage;
