import React, { ReactElement } from 'react';

import {
  BackgroundProvider,
  Container,
  Grid,
  GridItem,
  pxToRem,
  useWindowSize,
  Button,
  Text,
  Link,
  Paragraph,
  IconPhone
} from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';
import { NavLink } from '@interstellar/react-app-routing';
import { ThemeContext } from 'styled-components';
import { menuData } from './HeaderComponentContent'
import { HeaderContent } from './HeaderComponent.config';
import { StyledHeader, StyledLink } from './HeaderComponent.styled';
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

function toggleDropdown(element) {
  element.classList.toggle('active');

}

export default function HeaderComponent(): ReactElement {
  const theme = React.useContext(ThemeContext);
  const { homeLink } = useContent<HeaderContent>();

  return (
    <StyledHeader>
      <BackgroundProvider value={{ cssValue: theme.header_color_background }}>
        <Container width='fluid'>
          <Grid alignY="center">
            <GridItem xs={12} sm={7}>
              <NavLink to={routes.Home} title="logo">
                <Logo />
              </NavLink>
            </GridItem>
            <GridItem xs={6} sm={2}>
              <Text size="s1" style={{fontSize: "small", paddingRight:"14px"}}> COMMERCIAL BANKING </Text>
              <Text> <i className="fas">|</i>   <IconPhone iconSize='md' />  <i className="fas">|</i> </Text>

            </GridItem>
            <GridItem xs={6} sm={2}>
              <Paragraph marginBottom="none" size='s1' style={{fontSize: "small"}}>Client Id: 6002324545</Paragraph>
              <Paragraph marginBottom="none" size='s1' style={{fontSize: "small"}}>Last LoggedIn: 26th May, 2025</Paragraph>
            </GridItem>
            <GridItem xs={12} sm={1}>
              <Button variation='primary' className="login-btn"> 
                <i className="fa-sharp fa-solid fa-lock"></i> Logout
              </Button>
            </GridItem>
          </Grid>
          <Grid>
            <GridItem sm={11}>
            <div className="navbar">
              <div className="home-icon"><i className="fas fa-home"></i></div>
              <ul className="menu">
              {menuData && menuData.map((menuItem, index) => (
                <li className="menu-item" key={index} onClick={(event) => toggleDropdown(event.currentTarget)} >
                  <StyledLink to={menuItem.link}> {menuItem.name}  <i className="fas fa-chevron-down"></i></StyledLink>
                  {menuItem.subMenu && (
                    <ul className='submenu'>
                      {menuItem.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="submenu-item">
                          <StyledLink to={subItem.link}>{subItem.name}</StyledLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
             </ul>
            </div>
              </GridItem>
              <GridItem sm={1}>
              <div className="hamburger" id="hamburger">&#9776;</div>
              </GridItem>
          </Grid>
        </Container>
      </BackgroundProvider>
    </StyledHeader>
  );
}
