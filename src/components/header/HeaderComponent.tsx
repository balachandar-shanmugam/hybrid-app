import React, { ReactElement } from 'react';

import {
  BackgroundProvider,
  Container,
  Grid,
  GridItem,
  pxToRem,
  useWindowSize,
  Button,
  Text
} from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';
import { NavLink } from '@interstellar/react-app-routing';
import { ThemeContext } from 'styled-components';

import { HeaderContent } from './HeaderComponent.config';
import { StyledHeader, StyledLink } from './HeaderComponent.styled';
import StyledNavLinks from './NavLinks.styled';
import ExampleLinks from '../../examples/exampleContent/exampleHeaderContent/exampleLinks';
import * as routes from '../../routes/manifest';

function Logo() {
  const theme = React.useContext(ThemeContext);
  const { width: windowWidth } = useWindowSize();
  const isNarrow = pxToRem(windowWidth) < parseFloat(theme.breakpoint_lg);
  const isWide = !isNarrow;

  if (theme && theme.assets && theme.assets.logo) {
    if (isWide) {
      return React.createElement(theme.assets.logo.wide, {
        style: {
          height: theme.header_logo_height_big,
          width: theme.header_logo_width_big,
        },
      });
    }
    return React.createElement(theme.assets.logo.base, {
      style: {
        height: theme.header_logo_height,
        width: theme.header_logo_width,
      },
    });
  }
  return null;
}

export default function HeaderComponent(): ReactElement {
  const theme = React.useContext(ThemeContext);
  const { homeLink } = useContent<HeaderContent>();

  return (
    <StyledHeader>
      <BackgroundProvider value={{ cssValue: theme.header_color_background }}>
        <Container>
          <Grid alignY="center">
            <GridItem xs={2}>
              <NavLink to={routes.Home} title="logo">
                <Logo />
              </NavLink>
            </GridItem>
            <GridItem xs={4} />
            <GridItem xs={2}>
              <Text> COMMERCIAL SAVINGS</Text>
            </GridItem>
            <GridItem xs={3}>
              <span><b>Client Id:</b> dfsdf3453fg45f45f</span><br></br>
              <span><b>Last LoggedIn:</b> 26th May</span>
            </GridItem>
            <GridItem xs={1}><Button>Logout</Button></GridItem>
          </Grid>
          <Grid>
            <div className="navbar">
              <div className="home-icon"><i className="fas fa-home"></i></div>
              <div className="menu">
                <div className="menu-item">Accounts <i className="fas fa-chevron-down"></i></div>
              </div>
            </div>
          </Grid>
        </Container>
      </BackgroundProvider>
    </StyledHeader>
  );
}
