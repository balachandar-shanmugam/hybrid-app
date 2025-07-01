import React, { ReactElement } from 'react';

import {
  Text,
  Grid,
  GridItem,
  Table,
  TableRow,
  TableCol
} from '@constellation/core';

import { AccTableHead, TableHeader } from './TradePageContent';

export function TableBoxComponent({data}): ReactElement {
  return (
          <div className='table-box-container'>
            <Table>
              <TableRow>
                  {TableHeader && TableHeader.map((tableHead) => (
                    <TableCol className='table-header'>{tableHead}</TableCol>
                  ))}
              </TableRow>
                {data && data.accounts.map((account) => (
                <TableRow>
                  <TableCol>
                    <div className="rounded-icon">
                     <img src="../assets/common/axe.png" alt="logo"/>
                    </div>
                    <Text as="span"> Company Names </Text>
                  </TableCol>
                  <TableCol>{account.acc}</TableCol>
                  <TableCol>{account.sort}</TableCol>
                  <TableCol>{account.acc_name}</TableCol>
                  <TableCol>{account.pre_name}</TableCol>
                  <TableCol>{account.avail_bal}</TableCol>
                  <TableCol>{account.book_bal}</TableCol>
                  <TableCol>{account.interim_bal}</TableCol>
                  <TableCol>{account.interim_book_bal}</TableCol>
                </TableRow> 
                ))}

            </Table>
            
          </div>
  );
}


/*

            <table>
              <thead>
                <tr>
                  {TableHeader && TableHeader.map((tableHead) => (
                    <th>{tableHead}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data && data.accounts.map((account) => (
                <tr>
                  <td>
                    <i className="fas fa-list"></i>
                    <i className="fas fa-cog" ></i>
                  </td>
                  <td>{account.acc}</td>
                  <td>{account.sort}</td>
                  <td>{account.acc_name}</td>
                  <td>{account.pre_name}</td>
                  <td>{account.avail_bal}</td>
                  <td>{account.book_bal}</td>
                  <td>{account.interim_bal}</td>
                  <td>{account.interim_book_bal}</td>
                </tr> 
                ))}
              </tbody>
            </table>

            */
