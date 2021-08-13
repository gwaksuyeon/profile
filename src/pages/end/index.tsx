import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const End: React.FC = () => {
  const word = '<Lorem ipsum dolor sit amet consectetur adipisicing elit./>';
  const [text, setText] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + word[count]);
      setCount(count + 1);
    }, 100);

    if (count === word.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

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
`;

export default End;
