import React, { ReactElement } from 'react';

import {
  Text,
  Table,
  TableRow,
  TableCol
} from '@constellation/core';

import { Funds, TableHeader } from './TradePageContent';

export function TableBoxComponent(): ReactElement {
  return (
          <div className='table-box-container'>
            <Table>
              <TableRow>
                  {TableHeader && TableHeader.map((tableHead) => (
                    <TableCol className='table-header'>{tableHead}</TableCol>
                  ))}
              </TableRow>
                {Funds && Funds.map((fund) => (
                <TableRow>
                  <TableCol>
                    <div className="rounded-icon">
                     <img src="./assets/axe.png" alt="logo"/>
                    </div>
                    <Text as="span" marginLeft="03" marginRight='05' className='ellipsis'>{fund.name} </Text>
                    <Text as="span" className="fs12">{fund.ISN} </Text>
                  </TableCol>
                  <TableCol>{fund.type}</TableCol>
                  <TableCol>{fund.currency}</TableCol>
                  <TableCol>{fund.indicativePL}</TableCol>
                  <TableCol>{fund.best_bid}</TableCol>
                  <TableCol>{fund.best_ask}</TableCol>
                  <TableCol>{fund.avail_bal}</TableCol>
                </TableRow> 
                ))}

            </Table>
            
          </div>
  );
}
