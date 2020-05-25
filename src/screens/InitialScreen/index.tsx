import React from 'react';

import { Container, Image } from './styles';

import youtubeLogo from '../../assets/youtubeLogo1.png';

const InitialScreen: React.FC = () => {
  return (
    <Container>
      <Image source={youtubeLogo} />
    </Container>
  );
};

export default InitialScreen;
