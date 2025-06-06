import React, { ReactElement } from 'react';

import { Heading } from '@constellation/core';
import { useContent } from '@interstellar/react-app-content';

import { HomePageContent } from './HomePage.config';

function HomePageBlank(): ReactElement {
  const { heading, brandName } = useContent<HomePageContent>();
  return (
    <Heading>
      {' '}
      {heading} {brandName}{' '}
    </Heading>
  );
}

export default HomePageBlank;
