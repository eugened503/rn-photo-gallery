import Svg, {Path} from 'react-native-svg';
import React from 'react';

export const ArrowSvg = () => {
  return (
    <Svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 8.99999H1M1 8.99999L8.86982 17M1 8.99999L8.86982 1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
