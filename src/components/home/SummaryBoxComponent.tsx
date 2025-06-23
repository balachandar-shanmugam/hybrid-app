import React, { ReactElement } from 'react';

import {
  Text,
  Grid,
  GridItem,
  Table
} from '@constellation/core';

import { SummaryTitle } from './HomePageContent';

export function SummaryBoxComponent(): ReactElement {
  return (
          <Grid className='summary-box'>
            <GridItem xs={4}>
              <div className="summary-item">
                <Text color="brand" size='s2'>{SummaryTitle.TITLE_CA}</Text><i className="fas fa-info-circle"></i>
                <div><Text as="p" color="subdued">£8,345.67</Text></div>
              </div>
            </GridItem>
            <GridItem xs={4}>
              <div className="summary-item">
                <Text color="brand" size='s2' >{SummaryTitle.TITLE_CB}</Text><i className="fas fa-info-circle"></i>
                <Text as="p" color="subdued">£1,100.00</Text>
              </div>
            </GridItem>
            <GridItem xs={4}>
              <div className="summary-item">
                <div>
                  <Text color="brand" size='s2'>Currency</Text>
                  <select>
                    <option>GBP</option>
                    <option>EUR</option>
                    <option>YEN</option>
                  </select>
                </div>
                <div>
                  <Text size='s2' color="brand"> Posting Date</Text>
                  <Text  size='s6' as="label" color="subdued"> 2024-06-01</Text>
                </div>
              </div>
            </GridItem>
          </Grid>
  );
}
