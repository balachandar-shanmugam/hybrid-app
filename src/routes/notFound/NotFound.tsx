import React, { ReactElement } from 'react';

import { ContentGroup, Heading, Grid, GridItem } from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';

import { NotFoundContent } from './NotFound.config';
import { StyledParagraph, StyledLink } from './NotFound.styled';
import dataQaIds from '../../examples/dataModel/dataQaIds';
import * as routes from '../manifest';

function NotFound(): ReactElement {
  const { heading, subHeading, footer, footerLink, subFooter } =
    useContent<NotFoundContent>();

  return (
    <ContentGroup data-qa-id={dataQaIds.notFoundPage.mainCard}>
      <Grid data-qa-id={dataQaIds.notFoundPage.title}>
        <GridItem xs={5} />
        <GridItem xs={4}>
          <Heading as="h4">{heading}</Heading>
        </GridItem>
        <GridItem xs={3} />
      </Grid>
      <Grid data-qa-id={dataQaIds.notFoundPage.subTitle}>
        <GridItem xs={12}>
          <StyledParagraph>{subHeading}</StyledParagraph>
        </GridItem>
      </Grid>
      <Grid data-qa-id={dataQaIds.notFoundPage.content}>
        <GridItem xs={12}>
          <StyledParagraph>
            {footer}{' '}
            <StyledLink
              href={routes.Home}
              data-qa-id={dataQaIds.notFoundPage.homeLink}
            >
              {footerLink}
            </StyledLink>
            {subFooter}
          </StyledParagraph>
        </GridItem>
      </Grid>
    </ContentGroup>
  );
}

export default NotFound;
