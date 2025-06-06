import styled from 'styled-components';

import { StyledNavLink } from '../styledNavLink/StyledNavLink';

export const StyledLink = styled(StyledNavLink)`
  padding-right: 10px;
  color: ${({ theme }) =>
    theme.brand === 'scottish-widows' || theme.brand === 'lloyds'
      ? theme.link_color
      : '#fff !important;'};
`;

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header_color_background};
  margin-bottom: ${({ theme }) => theme.spacing_05};
  padding: ${({ theme }) => theme.spacing_05} 0;
`;
