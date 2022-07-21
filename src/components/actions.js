import types from './types';
// фун. формы
export const formSubmit = inputName => ({
  type: types.FORM_SUBMIT,
  payLoad: inputName,
});
// фун. модального окна
export const closeModal = () => ({ type: types.CLOSE_MODAL });
export const openModal = id => ({
  type: types.GET_PHOTO_FOR_MODAL,
  payLoad: id,
});
// фун. подгрузки фото
export const loadMore = () => ({ type: types.LOAD_MORE });
// фун. error
export const removeError = () => ({ type: types.SET_ERROR_NULL });
export const setErrorMessage = message => ({
  type: types.SET_ERROR_MESSAGE,
  payLoad: message,
});
// фун. спинера(лоадера)
export const enableSpinner = () => ({ type: types.SET_LOADER_TRUE });
export const disableSpinner = () => ({ type: types.SET_LOADER_FALSE });
// фун. для забора данных с запроса на бек
export const getPhoto = arrImg => ({
  type: types.GET_PICTURES,
  payLoad: arrImg,
});
export const getPhotoByNumPage = arrImg => ({
  type: types.GET_PICTURES_BY_NUMBER_PAGE,
  payLoad: arrImg,
});
