import styled from 'styled-components';

export const StyledSideImg = styled('img')(
  ({ theme }) => `
  display: block;
  margin: ${theme.spacing_06 || '2rem'} auto;
  max-width: 80%;
  max-height: 200px;
`,
);

export default {
  StyledSideImg,
};
