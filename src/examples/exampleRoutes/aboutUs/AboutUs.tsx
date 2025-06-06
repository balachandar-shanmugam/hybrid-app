import React, { ReactElement } from 'react';

import {
  ContentGroup,
  Heading,
  Grid,
  GridItem,
  Paragraph,
  Link,
} from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';

import { AboutUsContent } from './AboutUs.config';
import dataQaIds from '../../dataModel/dataQaIds';

function AboutUs(): ReactElement {
  const {
    header,
    content,
    subContent,
    supportHeader,
    supportContent,
    supportLink,
    supportLinkText,
    sharepointLink,
  } = useContent<AboutUsContent>();

  return (
    <ContentGroup data-qa-id={dataQaIds.aboutUsPage.mainCard}>
      <Grid data-qa-id={dataQaIds.aboutUsPage.content}>
        <GridItem xs={12}>
          <Heading data-qa-id={dataQaIds.aboutUsPage.ourMissionHeading} as="h4">
            {header}
          </Heading>
        </GridItem>
        <GridItem xs={12}>
          <Paragraph>{content}</Paragraph>
        </GridItem>
        <GridItem xs={12}>
          <Paragraph>{subContent}</Paragraph>
        </GridItem>
        <GridItem xs={12}>
          <Heading data-qa-id={dataQaIds.aboutUsPage.supportHeading} as="h4">
            {supportHeader}
          </Heading>
        </GridItem>
        <GridItem xs={12}>
          <Paragraph>{supportContent}</Paragraph>
        </GridItem>
        <GridItem>
          <Paragraph>
            {supportLinkText}{' '}
            <Link
              href={sharepointLink}
              data-qa-id={dataQaIds.aboutUsPage.confluenceLink}
              target="_blank"
            >
              {supportLink}
            </Link>
          </Paragraph>
        </GridItem>
      </Grid>
    </ContentGroup>
  );
}

export default AboutUs;
