import React from 'react';
import { ImageGalleryItemWrap, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, id, describe, pictureForModal }) => {
  return (
    <ImageGalleryItemWrap>
      <Image id={id} src={item} alt={describe} onClick={pictureForModal} />
    </ImageGalleryItemWrap>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  describe: PropTypes.string.isRequired,
  pictureForModal: PropTypes.func,
};

export default ImageGalleryItem;
