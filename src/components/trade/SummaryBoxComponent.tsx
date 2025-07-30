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
import { SummaryCardComponent } from 'components/cards/SummaryCard';
import { SummaryCardBalance, SummaryCardTrade } from 'components/cards/SummaryCard.contents';


export function SummaryBoxComponent({data}): ReactElement {

  return (
          <Grid>
            <GridItem xs={12}>
              <SummaryBox marginBottom="0" className='trade-summary-box' title={!data ? SummaryTitle.TITLE_CA : data.name} 
              variation="primary">
                <div className="summary-logo rounded-icon">
                  <img src={data?data.icon : "#"} alt="logo"/>
                </div>
                <Text as="label" marginLeft="08" style={{backgroundColor:"#303030"}} color="inherit" className="fs12">
                  {!data ? 'ISN: EOV673DBID67' : `ISN: ${data.ISN}`}
                </Text>

              </SummaryBox>
              <div className="summary-title">
                <Grid>
                  <GridItem xs={12}>
                <Text  as="p" size="s1">
                  <Strong className="ellipsis">{!data ? SummaryTitle.TITLE_CA : data.name}</Strong>  
                        <Text as="label" className="info-label"> {!data ? 'MMT' : data.type} </Text>
                </Text>
                  </GridItem>
                  <GridItem xs={12}>
                    <Text className="fs12">Archax</Text>
                  </GridItem>
                </Grid>
                  <i style={{float:"right"}} className="fas fa-qrcode"></i>
              </div>

            </GridItem>
            <GridItem xs={12}>
              <SummaryCardComponent
                title={SummaryCardBalance.title}
                highlight={SummaryCardBalance.highlight}
                items={SummaryCardBalance.items}
                actions=""
              />
              <SummaryCardComponent
                title={SummaryCardTrade.title}
                highlight=""
                items={SummaryCardTrade.items}
                actions={SummaryCardTrade.actions}
              />
                
            </GridItem>
          </Grid>

  );
}
