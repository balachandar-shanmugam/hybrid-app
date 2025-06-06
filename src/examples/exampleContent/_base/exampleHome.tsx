import React from 'react';

import { Strong, Text } from '@constellation/core';
import axeImage from 'assets/common/axe.png';
import cliImage from 'assets/common/cli.jpeg';
import constellationImage from 'assets/common/constellation.png';
import jestImage from 'assets/common/jest.png';
import lloydsReimaginedImage from 'assets/common/logo-desktop.lloyds.svg';
import storybookImage from 'assets/common/storybook.png';
import typescriptImage from 'assets/common/typescript_logo.png';
import wdioImage from 'assets/common/webdriverio.png';
import webpackImage from 'assets/common/webpack.png';

import { AppContent } from '../../../content/AppContent';
import dataQaIds from '../../dataModel/dataQaIds';

const exampleHome: AppContent['homepage'] = {
  coreFeaturesDesc:
    'The latest web development tools and packages have been used to build InterStellar' +
    ' so that you can focus on delivering the best customer experience.',
  heroComponentContent: [
    {
      imgAltText: 'lloyds reimagined',
      imageSrc: lloydsReimaginedImage,
      subHeading:
        'Digital Finance - Self Custody, Tokenization and Wallet services for Money market',
      description:
        'Customer request for tokens for the successful digital money transactions via tax and pay interests based on 0.4 basis points, where the Lloyds be the token provider and the tokens will be stored in Hedera wallet and it will be transferred to canton wallet.' +
        ' Eg: If $1M is the transaction amount for the cryto currency and the interest will be $400.',
      buttonLink: (): any => {
        window.open(
          '#',
          '_blank',
          'noopener',
        );
      },
      buttonText: ' Request for Tokens',
      buttonInfo: 'For Tokenisation',
      'data-qa-id': dataQaIds.mainPage.sdkHero,
    },
    // {
    //   imgAltText: 'constellation image',
    //   imageSrc: constellationImage,
    //   heading: 'Designed for Developers',
    //   subHeading: "Built using the Group's own Design System, Constellation",
    //   description:
    //     "Create digital experiences using Constellation's brand-approved, accessible component and theming library." +
    //     ' InterStellar embeds Constellation as a Core capability to enable multi-brand delivery, simultaneously.',
    //   constellationLinkSubheading: 'Constellation Site',
    //   windowsRepoText: 'On-Prem (Windows)',
    //   windowsRepoLink: 'https://pages.ghe.service.group/constellation/docs',
    //   macRepoText: 'Sandbox (Mac)',
    //   macRepoLink: 'https://constellation.extranet.lloydsbanking.com/',
    //   storybookLinkSubheading: 'Storybook',
    //   macGcpText: 'GCP',
    //   macGcpLink: 'https://constellation-storybook.vbp-bld.oncp.dev/',
    //   'data-qa-id': dataQaIds.mainPage.constellationHero,
    //   onPremLink: '',
    //   onPremText: 'On-Prem',
    //   onPremComingSoonText: 'On-Prem (Coming Soon)',
    // },
  ],
  promoBoxContent: [
    {
      id: 1,
      imageSrc: cliImage,
      imageDesc: (
        <Text>
          <Strong>Save time and streamline workflows with the CLI.</Strong>{' '}
          Executes commands designed to harmonise the coding approach between
          teams. You can quickly and easily create journeys with a few simple
          commands.
        </Text>
      ),
      imgAltText: '',
    },
    {
      id: 2,
      imageSrc: storybookImage,
      imageDesc: (
        <Text>
          <Strong>Component configuration with Storybook.</Strong> Enables rapid
          configuration of Constellation components to meet your user
          interaction needs. You can copy and paste the code snippet generated
          by Storybook to your development environment to validate functionality
          as you build.
        </Text>
      ),
      imgAltText: '',
    },
    {
      id: 3,
      imageSrc: webpackImage,
      imageDesc: (
        <Text>
          <Strong>Module management with Webpack.</Strong> Ensures efficient
          module bundling and dependency management decreasing development time.
          You are in control of the assets you build.
        </Text>
      ),
      imgAltText: '',
    },
    {
      id: 4,
      imageSrc: typescriptImage,
      imageDesc: (
        <Text>
          <Strong>Strong typing with Typescript.</Strong> Builds on Javascript;
          it enables readability and consistency in coding across your team. You
          can catch coding errors early and focus on delivering the business
          logic.
        </Text>
      ),
      imgAltText: '',
    },
    {
      id: 5,
      imageSrc: jestImage,
      imageDesc: (
        <Text>
          <Strong>Unit tests with Jest.</Strong> Simplifies unit test
          configuration with increased testing performance and code coverage.
          You can be confident in your development and deliver quickly.
        </Text>
      ),
      imgAltText: '',
    },
    {
      id: 6,
      imageSrc: wdioImage,
      imageDesc: (
        <Text>
          <Strong>BDD with WDIO.</Strong> Assures quality with easy-to-use BDD
          format for test scripts. You can report on the quality of your
          functionality.
        </Text>
      ),
      imgAltText: '',
    },
    {
      id: 7,
      imageSrc: axeImage,
      imageDesc: (
        <Text>
          <Strong>Accessibility with Axe Core.</Strong> Meet the bank&apos;s
          accessibility standards. You can build accessible customer
          experiences.
        </Text>
      ),
      imgAltText: '',
    },
  ],
};

export default exampleHome;
