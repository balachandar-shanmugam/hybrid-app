import React, { ReactElement } from 'react';

import { FooterItem, Paragraph, Footer } from '@constellation/core';

import dataQaIds from '../../examples/dataModel/dataQaIds';

export default function FooterComponent(): ReactElement {
  return (
    <Footer marginTop="03" data-qa-id={dataQaIds.footer.container}>
      <FooterItem>
        <Paragraph marginBottom="06" marginTop="06">
          {}{' '}
        </Paragraph>
      </FooterItem>
    </Footer>
  );
}
