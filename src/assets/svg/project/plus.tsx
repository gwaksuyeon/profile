import React from 'react';

interface Props {
  color?: string;
}

const Plus: React.FC<Props> = ({ color = '#41444b' }) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 25 25">
      <path
        fill={color}
        d="M14.9,10.38c-0.23,0-0.41-0.18-0.41-0.41V1.01h-4.08v8.97c0,0.23-0.18,0.41-0.41,0.41H1.04v4.08h8.97
            c0.23,0,0.41,0.18,0.41,0.41v8.97h4.08v-8.97c0-0.23,0.18-0.41,0.41-0.41h8.97v-4.08H14.9z"
      />
    </svg>
  );
};

export default Plus;
