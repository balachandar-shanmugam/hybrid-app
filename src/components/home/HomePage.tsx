import React, { ReactElement,useEffect, useState } from 'react';

import {
  Heading,
  Paragraph,
  Text,
  Button,
  Grid,
  GridItem,
  Strong,
  Accordion,
  Container,
  Table
} from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';

import { HomePageContent } from './HomePageContent';
import {fetchHome} from '../../services/homeApi'


function HomePage(): ReactElement {
  const { coreFeaturesDesc } =
    useContent<HomePageContent>();

  const [data, setData] = useState(null);
  useEffect(() => {
    fetchHome()
      .then((res)=>{

        setData(res);
        console.log('response success:', res);
      })
      .catch((error)=>console.log('response failed:', error))
    },[]
  );


  return (
    <Grid>
      <GridItem xs={12}>
        <Heading weight="normal" marginBottom="04">Accounts by entity</Heading>
      </GridItem>
      <GridItem xs={2} className='sidebar'>
        <Accordion label='Entity'>CMP Account</Accordion>
      </GridItem>
      <GridItem xs={10}>
        <Container className='home-container'>
        {data && (
          <>
           <Grid className='summary-box1'>
            <GridItem xs={4}>
              <div className="summary-item">
                <label>Closing Available Balance:</label><i className="fas fa-info-circle"></i>
                <span>£8,345.67</span>
              </div>
            </GridItem>
            <GridItem xs={4}>
              <div className="summary-item">
                <label>Closing Booked Balance:</label><i className="fas fa-info-circle"></i>
                <span>£1,100.00</span>
              </div>
            </GridItem>
            <GridItem xs={4}>
              <div className="summary-item">
                <div>
                  <label>Currency:</label>
                  <select>
                    <option>GBP</option>
                    <option>EUR</option>
                    <option>YEN</option>
                  </select>
                </div>
                <div>
                  <label>Posting Date:</label>
                  <span>2024-06-01</span>
                </div>
              </div>
            </GridItem>
            </Grid>
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
                  <th>Action</th>
                  <th>Account number</th>
                  <th>Sort code</th>
                  <th>Legal account name</th>
                  <th>Preferred name</th>
                  <th>Closing available balance</th>
                  <th>Closing booked balance</th>
                  <th>Interim available balance</th>
                  <th>Interim booked balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="fas fa-list"></i>
                    <i className="fas fa-cog" ></i>
                  </td>
                  <td>12345678</td>
                  <td>123456</td>
                  <td>ABC Accounts - Euro</td>
                  <td>ABC Corp</td>
                  <td>10.00</td>
                  <td>10.00</td>
                  <td>10.00</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-list"></i>
                    <i className="fas fa-cog" ></i>
                  </td>
                  <td>45672359</td>
                  <td>237634</td>
                  <td>CMP Holdings - Euro</td>
                  <td>ABC Corp</td>
                  <td>101.00</td>
                  <td>101.00</td>
                  <td>101.00</td>
                  <td>101.00</td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-list"></i>
                    <i className="fas fa-cog" ></i>
                  </td>
                  <td>75253187</td>
                  <td>437426</td>
                  <td>CMP Accounts - Yen</td>
                  <td>ABC Corp</td>
                  <td>56.00</td>
                  <td>56.00</td>
                  <td>56.00</td>
                  <td>56.00</td>
                </tr>                
                <tr>
                  <td>
                    <i className="fas fa-list"></i>
                    <i className="fas fa-cog" ></i>
                  </td>
                  <td>87654321</td>
                  <td>654321</td>
                  <td>CMP Account - Dollar  </td>
                  <td>CMP</td>
                  <td>50.00</td>
                  <td>50.00</td>
                  <td>50.00</td>
                  <td>50.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          </>
        )}
        </Container>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
