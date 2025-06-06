import React, { ReactElement } from 'react';

import {
  ContentGroup,
  Heading,
  Grid,
  GridItem,
  Paragraph,
  Button,
  Container,
} from '@constellation/core';
import { useNgaBridgeWrapper } from '@interstellar/nga-bridge-react';
import { useContent } from '@interstellar/react-app-content';

import { WebViewContent } from './WebView.config';
import dataQaIds from '../../dataModel/dataQaIds';

function WebView(): ReactElement {
  const ngaBridge: any = useNgaBridgeWrapper();
  ngaBridge.logger = console;
  const { header, content, demoContent } = useContent<WebViewContent>();

  return (
    <ContentGroup data-qa-id={dataQaIds.webView.mainCard}>
      <Grid data-qa-id={dataQaIds.webView.content}>
        <GridItem xs={12}>
          <Heading data-qa-id={dataQaIds.webView.webViewHeading} as="h4">
            {header}
          </Heading>
        </GridItem>
        <GridItem xs={12}>
          <Paragraph>{content}</Paragraph>
        </GridItem>
        <Container marginTop="01" marginBottom="01" padding="none">
          <Button
            onClick={() => {
              ngaBridge.isIos();
            }}
            data-testid="isIos-button-test-id"
          >
            isIos
          </Button>
        </Container>
        <Container marginTop="01" marginBottom="01" padding="none">
          <Button
            onClick={() => {
              ngaBridge.isAndroid();
            }}
            data-testid="isAndroid-button-test-id"
          >
            isAndroid
          </Button>
        </Container>
        <Container marginTop="01" marginBottom="01" padding="none">
          <Button
            onClick={() => {
              ngaBridge.closeCwaJourney();
            }}
          >
            closeCwaJourney
          </Button>
        </Container>
        <Container marginTop="01" marginBottom="01" padding="none">
          <Button
            onClick={() => {
              ngaBridge.hideSpinner();
            }}
          >
            hideSpinner
          </Button>
        </Container>
        <Container marginTop="01" marginBottom="01" padding="none">
          <Button
            onClick={() => {
              ngaBridge.showSpinner();
            }}
          >
            showSpinner
          </Button>
        </Container>
        <Container marginTop="01" marginBottom="01" padding="none">
          <Button
            onClick={() => {
              ngaBridge.onFinish();
            }}
          >
            onFinish
          </Button>
        </Container>
        <GridItem xs={12}>
          <Paragraph marginTop="03">{demoContent}</Paragraph>
        </GridItem>
      </Grid>
    </ContentGroup>
  );
}

export default WebView;
