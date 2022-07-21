import React, { useContext } from 'react';
import { ButtonSubmit } from './Button.styled';
import GalleryContext from '../GalleryContext';
// import types from 'components/types';
import { loadMore } from 'components/actions';

const Button = () => {
  const { dispatch } = useContext(GalleryContext);
  // const onLoadMore = () => dispatch({ type: types.LOAD_MORE });
  const onLoadMore = () => dispatch(loadMore());
  return (
    <ButtonSubmit type="submit" onClick={onLoadMore}>
      Load more
    </ButtonSubmit>
  );
};

export default Button;
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// const Button = () => {
//   const { loadMore } = useContext(GalleryContext);
//   return (
//     <ButtonSubmit type="submit" onClick={loadMore}>
//       Load more
//     </ButtonSubmit>
//   );
// };
