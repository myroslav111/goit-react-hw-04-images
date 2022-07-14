import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ pageList, pictureForModal }) => {
  return (
    <ImageGalleryBox>
      {pageList.map(({ webformatURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          item={webformatURL}
          id={id}
          describe={tags}
          pictureForModal={pictureForModal}
        />
      ))}
    </ImageGalleryBox>
  );
};

ImageGallery.propTypes = {
  pageList: PropTypes.array.isRequired,
  pictureForModal: PropTypes.func,
};

export default ImageGallery;
