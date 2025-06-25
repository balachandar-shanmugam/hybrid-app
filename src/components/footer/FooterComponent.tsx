import React, { ReactElement } from 'react';

import { FooterItem, Text, Footer, Link} from '@constellation/core';

import dataQaIds from '../../examples/dataModel/dataQaIds';

export default function FooterComponent(): ReactElement {
  return (
    <Footer className="mvp-footer" width="fluid" marginTop="03" >
      <FooterItem style={{marginRight: "auto"}}>
        <Link href="#"> Last Updated:02 Jun, 2025, 10.41</Link>
      </FooterItem>
      <FooterItem>
        <Link href="#"> Cookie Policy </Link>
      </FooterItem>
      <FooterItem>
        <Link href="#"> Commercial banking </Link>
      </FooterItem>
      <FooterItem>
        <Link href="#"> Security </Link>
      </FooterItem>
      <FooterItem>
        <Link href="#"> Legal </Link>
      </FooterItem>
      <FooterItem>
        <Link href="#"> Privacy </Link>
      </FooterItem> 
    </Footer>
  );
}
