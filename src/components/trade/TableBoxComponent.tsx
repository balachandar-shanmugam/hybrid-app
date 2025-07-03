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
                     <img src={fund.icon} alt="logo"/>
                    </div>
                    <Text size="s1" as="span" marginLeft="03" marginRight='05' 
                      className="ellipsis">
                        {fund.name} 
                    </Text>
                    <Text as="span" className="fs12">{fund.ISN} </Text>
                  </TableCol>
                  <TableCol><Text size="s1">{fund.type}</Text></TableCol>
                  <TableCol><Text size="s1">{fund.currency}</Text></TableCol>
                  <TableCol><Text size="s1">{fund.indicativePL}</Text></TableCol>
                  <TableCol><Text size="s1">{fund.best_bid}</Text></TableCol>
                  <TableCol><Text size="s1">{fund.best_ask}</Text></TableCol>
                  <TableCol><Text size="s1">{fund.avail_bal}</Text></TableCol>
                </TableRow> 
                ))}

            </Table>
            
          </div>
  );
}
