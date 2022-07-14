import styled from '@emotion/styled';

export const ImageGalleryBox = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Text = styled.div`
  font-family: 'Caveat', cursive;
  font-size: 20px;
`;
