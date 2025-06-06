import React, { ReactElement } from 'react';

import {
  ContentGroup,
  Heading,
  Grid,
  GridItem,
  Paragraph,
} from '@constellation/core';

import { PromoBoxProps } from '../home/ExampleHomePage.config';
import PromoBox from '../promoBox/PromoBoxComponent';

export interface ContentProps {
  promoBoxes?: PromoBoxProps[];
  heading?: string;
  description?: string;
  'data-qa-id'?: string;
}

function Content({
  'data-qa-id': qaID,
  promoBoxes,
  heading,
  description,
}: ContentProps): ReactElement {
  return (
    <ContentGroup>
      <Grid data-qa-id={`${qaID}-heading`}>
        <GridItem xs={12}>
          <Heading as="h4">{heading}</Heading>
        </GridItem>
      </Grid>
      <Grid data-qa-id={`${qaID}-desc`}>
        <GridItem xs={12}>
          <Paragraph>{description}</Paragraph>
        </GridItem>
      </Grid>
      <Grid>
        {promoBoxes &&
          promoBoxes.map(({ imageSrc, imageDesc, imgAltText, id }, index) => (
            <GridItem xs={12} md={6} key={`promoBox-griditem-${id}`}>
              <PromoBox
                imageSrc={imageSrc}
                imageDesc={imageDesc}
                imgAltText={imgAltText}
                key={`promoBox-${imgAltText}`}
                data-qa-id={`${qaID}-promobox-${index}`}
              />
            </GridItem>
          ))}
      </Grid>
    </ContentGroup>
  );
}

export default Content;
