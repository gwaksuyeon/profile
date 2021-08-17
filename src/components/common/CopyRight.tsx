import React from 'react';
import styled from 'styled-components';

const CopyRight: React.FC = () => {
  return (
    <Text>
      © 2021 GwakSuyeon.{'\n'}
      ALL RIGHTS RESERVED.
    </Text>
  );
};

const Text = styled.p`
  position: fixed;
  left: 2%;
  bottom: 2%;
  font-weight: 300;
  color: #52575d;
  white-space: pre-line;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export default CopyRight;
