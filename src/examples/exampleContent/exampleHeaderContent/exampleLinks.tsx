import React, { ReactElement } from 'react';

import { useContent } from '@interstellar/react-app-content';

import { HeaderContent } from './exampleHeader.config';
import { StyledLink } from '../../../components/header/HeaderComponent.styled';
import StyledNavLinks from '../../../components/header/NavLinks.styled';
import * as exampleRoutes from '../../exampleRoutes/manifest';

export default function ExampleLinks(): ReactElement {
  const { aboutUsLink } = useContent<HeaderContent>();
  const { webViewLink } = useContent<HeaderContent>();

  return (
    <StyledNavLinks>
      <StyledLink to={exampleRoutes.WebView}>{webViewLink}</StyledLink>
      <StyledLink to={exampleRoutes.AboutUs}>{aboutUsLink}</StyledLink>
    </StyledNavLinks>
  );
}
