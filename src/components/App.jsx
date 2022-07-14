import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import ErrorMessageViev from './ErrorMessageView';
import pixabayApi from './services/pixabay-api.js';
import { MainWrap } from './App.styled';
import { Text } from './ImageGallery/ImageGallery.styled';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import './animation/ModalAnimation.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  //   /* work with request for gallery */
  // проверяем было ли изменение запроса если да то делаем новый запрос

  useEffect(() => {
    setError(null);
    // if(page)
    if (name && page === 1) {
      setLoader(true);
      pixabayApi
        .fetchPage(name, page)
        .then(arrOfImg => {
          if (arrOfImg.hits.length === 0) {
            setLoader(true);
            return Promise.reject(new Error(toast.error(`not found ${name}`)));
          }
          setPictures([arrOfImg.hits]);
        })
        .catch(error => setError(error.message))
        .finally(setLoader(false));
    }
  }, [name, page]);

  useEffect(() => {
    setError(null);
    if (page !== 1) {
      setLoader(true);
      setTimeout(() => {
        pixabayApi
          .fetchPage(name, page)
          .then(arrOfImg => {
            if (arrOfImg.hits.length === 0) {
              setLoader(true);
              return Promise.reject(
                new Error(toast.error(`not found ${name}`))
              );
            }
            setPictures(prevIndex => [...prevIndex, arrOfImg.hits]);
          })
          .catch(error => setError(error.message))
          .finally(setLoader(false));
      }, 1000);
    }
  }, [page, name]);

  //фун. делаем масив изображений для галереи
  const makeArrImgForGallery = () => {
    const newPictures = pictures;
    return newPictures.flatMap(e => e);
  };

  // забираем дату с инпута при сабмите
  const handleFormSubmit = name => {
    setName(name);
    setPage(1);
    setLoader(false);
  };

  // фун. для подгрузки фото
  const loadMore = () => {
    setPage(page + 1);
  };
  // /* metod for modal */
  // берем урл большого фото для модалки при клике на пейджу
  const getPhotoForModal = e => {
    console.log();
    const idCurrentImg = Number(e.target.id);
    const pageForModal = pictures
      .flatMap(e => e)
      .find(page => idCurrentImg === Number(page.id));
    setLargeImageURL(pageForModal.largeImageURL);
  };

  // фун закрытия модалки
  const handleBakcdropClick = e => {
    setLargeImageURL('');
  };

  const listOfPictures = makeArrImgForGallery();

  return (
    <MainWrap>
      <Searchbar
        onSubmitForm={handleFormSubmit}
        searchName={name || 'Start your search'}
      />

      {loader && <Text>Start your search</Text>}
      {error && <ErrorMessageViev />}

      <ImageGallery
        pageList={listOfPictures}
        pictureForModal={getPhotoForModal}
      />
      <CSSTransition
        in={largeImageURL}
        unmountOnExit
        classNames="fade"
        timeout={250}
      >
        <Modal urlPhoto={largeImageURL} closeModal={handleBakcdropClick} />
      </CSSTransition>

      {!loader ? <Button onChengePage={loadMore} /> : <Loader />}
      <ToastContainer autoClose={3000} />
    </MainWrap>
  );
};

export default App;
