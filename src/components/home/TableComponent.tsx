import React, { ReactElement } from 'react';

import {
  Text,
  Grid,
  GridItem,
  Table
} from '@constellation/core';

import { AccTableHead } from './HomePageContent';

export function TableComponent({data}): ReactElement {
  return (
          <div className='table-container'>
            <div className="table-header">
              <div className="search-bar">
                <span>115 Accounts <b>Search: </b></span>
                <input type="text" id="search-cat" placeholder="search category" />
                <input type="text" id="search-txt" placeholder="search accounts..." />
              </div>
              <div className="filters">
                <label htmlFor="status-filter">Status:</label>
                <select id="status-filter">
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                </select>

                <label htmlFor="bank-filter">Bank:</label>
                <select id="bank-filter">
                  <option value="">Lloyds Accounts</option>
                  <option value="bank1">Halifax Accounts</option>
                  <option value="bank2">Scottish Widows</option>
                </select>
              </div>
            </div>
     
            <table>
              <thead>
                <tr>
                  <th>{AccTableHead.ACTION}</th>
                  <th>{AccTableHead.ACC_NO}</th>
                  <th>{AccTableHead.SORT}</th>
                  <th>{AccTableHead.ACC_NAME}</th>
                  <th>{AccTableHead.NICK_NAME}</th>
                  <th>{AccTableHead.AVAIL_BAL}</th>
                  <th>{AccTableHead.BOOK_BAL}</th>
                  <th>{AccTableHead.INTERIM_BAL}</th>
                  <th>{AccTableHead.INTERIM_BOOK_BAL}</th>
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
          </div>
  );
}
