import React, { ReactElement } from 'react';

import {
  Text,
  Grid,
  GridItem,
  SummaryBox,
  ContentGroup,
  Box,
  Button,
  Strong,
  } from '@constellation/core';

import { SummaryTitle } from './TradePageContent';


export function SummaryBoxComponent({data}): ReactElement {

  return (
          <Grid>
            <GridItem xs={12}>
              <SummaryBox className='trade-summary-box' title={!data ? SummaryTitle.TITLE_CA : data.name} variation="secondary">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <Text className="ellipsis" as="p" size="s1"><Strong>{!data ? SummaryTitle.TITLE_CA : data.name}</Strong> </Text>
                  <Text as="label" className="info-label"> MMT </Text>
                  <i style={{float:"right"}} className="fas fa-qrcode"></i>
                </div>
                <Text className="fs12">Archax</Text>
                <Text className="fs12" marginLeft="05">{!data ? 'ISN: EOV673DBID67' : data.ISN}</Text>
              </SummaryBox>

            </GridItem>
            <GridItem xs={12}>
              <Box className="summary-item">
                  <Text  size='s2'><Strong>Balance</Strong></Text><i className="fas fa-info-circle"></i>
                  <Box bgColor="information"  marginTop="03" marginBottom="02"
                    style={{borderRadius: '10', padding: '14px'}}>
                    <Text as="p">
                      <Strong> Available Balance</Strong> 
                      <Text marginLeft="04" className="fs12">Last update: 15-04-25</Text>
                    </Text>
                    <Text size='s3'><Strong>£ {data ? data.avail_bal : "9000"}</Strong></Text>
                  </Box>
                  <div className="list">
                    <Text as="span">Last Buy Price</Text>
                    <Text><Strong>£1</Strong></Text>
                  </div>
                  <div className="list">
                    <Text as="span">Valuation Price</Text>
                    <Text><Strong>£1</Strong></Text>
                  </div>
              </Box>
              <Box className="summary-item">
                <ContentGroup marginBottom="02">
                  <Text size='s2' ><Strong>Trading</Strong></Text>
                  
                  <div className="list">
                    <Text as="span">Primary Price</Text>
                    <Text><Strong>£1</Strong></Text>
                  </div>
                  <div className="list">
                    <Text as="span">Available Units </Text>
                    <Text><Strong>936,466,000</Strong></Text>
                  </div>
                  <div className="list">
                    <Text>Redemption Price</Text>
                    <Text><Strong>£1</Strong></Text>
                  </div>
                </ContentGroup>
                <div className="button-group" style={{display:"flex",justifyContent:"space-between"}}> 
                  <Button variation="secondary">Redeem</Button>
                  <Button >Invest</Button>
                </div>
              </Box>

            </GridItem>
          </Grid>

  );
}
