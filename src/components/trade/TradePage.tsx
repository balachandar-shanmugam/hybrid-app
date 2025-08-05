import React, { ReactElement, useState, ReactHTMLElement, useMemo } from 'react';

import {
  Button,
  Grid,
  GridItem,
  TextField,
  ContentGroup
} from '@constellation/core';
import { TableBoxComponent } from './TableBoxComponent';
import { SummaryBoxComponent } from './SummaryBoxComponent';
import { Buttons } from './TradePageContent';
import { Funds } from './TradePageContent';


function TradePage(): ReactElement {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFund, setSelectedFund] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  
  const handleFundClick = (data) => {
    setSelectedFund(data);
  };

  const searchSuggestions = Funds.filter(fund =>
    fund.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery !== ''
  );

  const searchedData = useMemo(() => {
    if (selectedFund) {
      return Funds.filter(d => d.name.toLowerCase().includes(selectedFund.toLowerCase()));
    }
    return Funds;
  }, [Funds, selectedFund]);

  const handleFilter = (filterType: string, name?: string) => {
    switch (filterType) {
      case 'MMF':
        setFilteredData(Funds.filter(item => item.type === 'MMF'));
        break;
      case 'Primary':
        setFilteredData(Funds.filter(item => item.type === 'Primary'));
        break;
      case 'Secondary':
        setFilteredData(Funds.filter(item => item.type === 'Secondary'));
        break;
      case 'Redeemable':
        setFilteredData(Funds.filter(item => item.type === 'Redeemable'));
        break;
      case 'All':
      default:
        setFilteredData(Funds);
        break;
    }
  };

  const counts = {
    all: Funds.length,
    mmf: Funds.filter(item => item.type === 'MMF').length,
    primary: Funds.filter(item => item.type === 'Primary').length,
    secondary: Funds.filter(item => item.type === 'Secondary').length,
    redeemable: Funds.filter(item => item.type === 'Redeemable').length,
  };



  return (
    <>
      <Grid className="trade-container">
        <GridItem xs={selectedFund ? 9 : 12}>
          <ContentGroup marginBottom="03">
          <div className="trade-search-box">
               <i className="fas fa-search"></i>
               <TextField name="search" marginBottom="05"
                     placeholder="Search" 
                     label={''} 
                     value={searchQuery} 
                     onChange={e => { setSearchQuery(e.currentTarget.value); setSelectedFund(''); }}
               /> 

               {searchSuggestions &&
                <ul>
                  {searchSuggestions.map((funds)=>( <li onClick={()=>setSelectedFund(funds)}>{funds.name}</li>))}
                 
                </ul>
                }
          </div> 
          <div className='filter-nav'>
            <Button  variation="secondary" onClick={() => handleFilter('All')}>{Buttons.ALL}({counts.all})</Button>
            <Button variation="secondary" onClick={() => handleFilter('Primary')} disabled ={counts.primary == 0}>{Buttons.PRIMARY}({counts.primary})</Button>
            <Button variation="secondary" onClick={() => handleFilter('Secondary')} disabled ={counts.secondary == 0}>{Buttons.SECONDARY}({counts.secondary})</Button>
            <Button variation="secondary" disabled ={counts.redeemable == 0}>{Buttons.REDEEMABLE}({counts.redeemable})</Button>
            <Button  variation="secondary"  onClick={() => handleFilter('MMF')} disabled ={counts.mmf == 0}>{Buttons.MMF}({counts.mmf})</Button>

          </div>
          </ContentGroup>
          { searchedData &&
          <TableBoxComponent Funds={searchedData } onFundClick={handleFundClick}/>

          }
          <TableBoxComponent Funds={(filteredData.length >=1) ? filteredData : Funds } onFundClick={handleFundClick}/>
        </GridItem>
        <GridItem xs={3} style={{display: selectedFund ? "block" :"none"}}>
          <SummaryBoxComponent data={selectedFund} />
        </GridItem>
      </Grid>
    </>
  );
}

export default TradePage;
