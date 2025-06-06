import React, { ReactElement, ReactNode } from 'react';

import { Grid, GridItem, ContentGroup } from '@constellation/core';

import { StyledSideImg } from './Hero.styled';

interface Props {
  children?: ReactNode;
  imgAltText: string | undefined;
  imageSrc: string | undefined;
  'data-qa-id'?: string | undefined;
}

function HeroComponent({
  'data-qa-id': qaID,
  imgAltText,
  imageSrc,
  children,
}: Props): ReactElement {
  return (
    <ContentGroup data-qa-id={qaID}>
      <Grid alignY="center" alignX="center" reversed>
        <GridItem xs={12} md={6}>
          <StyledSideImg
            alt={imgAltText}
            src={imageSrc}
            data-qa-id={`${qaID}-img`}
          />
        </GridItem>
        {children && (
          <GridItem xs={12} md={6}>
            <ContentGroup marginBottom="none">{children}</ContentGroup>
          </GridItem>
        )}
      </Grid>
    </ContentGroup>
  );
}

export default HeroComponent;
