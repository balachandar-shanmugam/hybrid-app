import React, { ReactElement } from 'react';

import { ContentGroup } from '@constellation/core';

import {
  StyledPromoBoxContainer,
  StyledImgContainer,
  StyledSideImg,
  StyledParagraph,
} from './PromoBox.styled';
import { PromoBoxProps } from '../home/ExampleHomePage.config';

function PromoBoxComponent({
  'data-qa-id': qaID,
  imageDesc,
  imgAltText,
  imageSrc,
}: PromoBoxProps): ReactElement {
  return (
    <StyledPromoBoxContainer data-qa-id={qaID}>
      <ContentGroup>
        {imageSrc && (
          <StyledImgContainer
            data-testid="promo-box-img-container"
            data-qa-id={`${qaID}-img-container`}
          >
            <StyledSideImg
              data-qa-id={`${qaID}-img`}
              alt={imgAltText}
              src={imageSrc}
            />
          </StyledImgContainer>
        )}
        <StyledParagraph data-qa-id={`${qaID}-desc`}>
          {imageDesc}
        </StyledParagraph>
      </ContentGroup>
    </StyledPromoBoxContainer>
  );
}
export default PromoBoxComponent;
