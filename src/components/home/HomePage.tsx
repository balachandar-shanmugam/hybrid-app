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
           <Grid className='summary-box'>
            <GridItem xs={4}>
              <div className="summary-item">
                <Text color="brand" size='s2'>Closing Available Balance</Text><i className="fas fa-info-circle"></i>
                <div><Text as="p" color="subdued">£8,345.67</Text></div>
              </div>
            </GridItem>
            <GridItem xs={4}>
              <div className="summary-item">
                <Text color="brand" size='s2' >Closing Booked Balance</Text><i className="fas fa-info-circle"></i>
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
                {data.accounts.map((account) => (
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
          </>
        )}
        </Container>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
