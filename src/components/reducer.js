import types from './types';

export default function reducer(state, action) {
  switch (action.type) {
    // закрытие модалки
    case types.CLOSE_MODAL:
      return {
        ...state,
        largeImageURL: '',
      };
    //   забираем пикчер с фетча
    case types.GET_PICTURES:
      return {
        ...state,
        pictures: [...action.payLoad],
      };
    //   добавляем пикчер с фетча при пагинации
    case types.GET_PICTURES_BY_NUMBER_PAGE:
      return {
        ...state,
        pictures: [...state.pictures, ...action.payLoad],
      };
    //   очищаем эррор
    case types.SET_ERROR_NULL:
      return {
        ...state,
        error: null,
      };
    // записываем сообщение в еррор
    case types.SET_ERROR_MESSAGE:
      return {
        ...state,
        error: action.payLoad,
      };
    //   выключаем лоадер
    case types.SET_LOADER_FALSE:
      return {
        ...state,
        loader: false,
      };
    //   включаем лоадер
    case types.SET_LOADER_TRUE:
      return {
        ...state,
        loader: true,
      };
    //   екшены при сабмите
    case types.FORM_SUBMIT:
      return {
        ...state,
        name: action.payLoad,
        page: 1,
        loader: false,
      };
    // фильтруем нужное фото для модалки
    case types.GET_PHOTO_FOR_MODAL:
      const idCurrentImg = Number(action.payLoad);
      const pageForModal = state.pictures
        .flatMap(e => e)
        .find(page => idCurrentImg === Number(page.id));
      return {
        ...state,
        largeImageURL: pageForModal.largeImageURL,
      };
    //   догружаем фото
    case types.LOAD_MORE:
      return {
        ...state,
        page: state.page + 1,
      };

    default:
      return state;
  }
}
