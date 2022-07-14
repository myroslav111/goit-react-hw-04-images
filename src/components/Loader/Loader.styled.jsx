import styled from '@emotion/styled';

export const SvgTea = styled.svg`
  --secondary: #33406f;
`;
export const Teabag = styled.path`
  transform-origin: top center;
  transform: rotate(3deg);
  animation: swing 2s infinite;
`;

export const SteamL = styled.path`
  stroke-dasharray: 13;
  stroke-dashoffset: 13;
  animation: steamLarge 2s infinite;
`;

export const SteamR = styled.path`
  stroke-dasharray: 9;
  stroke-dashoffset: 9;
  animation: steamSmall 2s infinite;
`;
