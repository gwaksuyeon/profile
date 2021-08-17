import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  isAnimation: boolean;
}

const End: React.FC<Props> = ({ isAnimation }) => {
  const word = '<계속해서 성장하고, 즐겁게 일하는 개발자./>';
  const [text, setText] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isAnimation) {
      setText('');
      setCount(0);
      return;
    }

    const interval = setInterval(() => {
      setText(text + word[count]);
      setCount(count + 1);
    }, 100);

    if (count === word.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isAnimation, count, text]);

  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: #fddb3a;
`;

const Title = styled.p`
  max-width: 1280px;
  font-size: 60px;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 80%;
    font-size: 36px;
  }
`;

export default End;
