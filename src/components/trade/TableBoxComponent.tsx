import React, { ReactElement, useState } from 'react';

import {
  Text,
  Table,
  TableRow,
  TableCol
} from '@constellation/core';

import { Funds, TableHeader } from './TradePageContent';

export function TableBoxComponent({onFundClick}): ReactElement {


const [selectedIndex, setSelectedIndex] = useState(null);

const handleClick = (fund, index) => {
    setSelectedIndex(index);
    onFundClick(fund);
  }

  return (
          <div className='table-box-container'>
            <Table>
              <TableRow>
                  {TableHeader && TableHeader.map((tableHead) => (
                    <TableCol className='table-header'>{tableHead}</TableCol>
                  ))}
              </TableRow>
                {Funds && Funds.map((fund, index) => (
                <TableRow 
                  key={index} 
                  className={`table-row ${selectedIndex === index ? 'selected' : ''}`}
                  onClick={() => handleClick(fund, index)} >
                  <TableCol>
                    <div className="rounded-icon">
                     <img src="./assets/axe.png" alt="logo"/>
                    </div>
                    <Text as="span" marginLeft="03" marginRight='05' 
                      className="ellipsis">
                        {fund.name} 
                    </Text>
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
