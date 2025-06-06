import styled from 'styled-components';

const NavLinks = styled('div')(
  ({ theme }) => `
  display: flex;
  justify-content: flex-end;
  > a:not(:last-child){margin-right: ${theme.spacing_05}};
  white-space: nowrap;
`,
);

export default NavLinks;
