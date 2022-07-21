import { useState, useContext } from 'react';
import GalleryContext from '../GalleryContext';
import {
  SearchbarWrap,
  InputWrap,
  SearchFormInput,
  Title,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import { formSubmit } from 'components/actions';

const Searchbar = () => {
  const [inputName, setInputName] = useState('');
  const { state, dispatch } = useContext(GalleryContext);
  const { name } = state;

  // забираем дату с инпута и бросаем в стейт
  const handleNameChange = e => {
    const newName = e.currentTarget.value.toLowerCase();
    setInputName(newName);
  };

  // передаем в апп то что ввели в инпут
  const handleSubmit = e => {
    e.preventDefault();
    const userInput = inputName.trim();
    if (userInput === '') {
      toast.error('fill in the fields');
      return;
    }
    dispatch(formSubmit(inputName));

    // очищаем инпут
    cleanInput();
  };

  // фун. очистки полей
  const cleanInput = () => {
    setInputName('');
  };

  return (
    <SearchbarWrap>
      <Title>{name || 'Start your search'}</Title>
      <form onSubmit={handleSubmit}>
        <InputWrap>
          <SearchFormInput
            type="text"
            autoComplete="off"
            value={inputName}
            onChange={handleNameChange}
            placeholder="Search images and photos"
          />
          <div>
            <span></span>
          </div>
          <button type="submit">
            <span>Finde</span>
          </button>
        </InputWrap>
      </form>
    </SearchbarWrap>
  );
};

export default Searchbar;
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// const Searchbar = () => {
//   const [inputName, setInputName] = useState('');
//   const { name, handleFormSubmit } = useContext(GalleryContext);
//   // забираем дату с инпута и бросаем в стейт
//   const handleNameChange = e => {
//     const newName = e.currentTarget.value.toLowerCase();
//     setInputName(newName);
//   };

//   // передаем в апп то что ввели в инпут
//   const handleSubmit = e => {
//     e.preventDefault();
//     const userInput = inputName.trim();
//     if (userInput === '') {
//       toast.error('fill in the fields');
//       return;
//     }
//     handleFormSubmit(inputName);
//     // очищаем инпут
//     cleanInput();
//   };

//   // фун. очистки полей
//   const cleanInput = () => {
//     setInputName('');
//   };

//   return (
//     <SearchbarWrap>
//       <Title>{name || 'Start your search'}</Title>
//       <form onSubmit={handleSubmit}>
//         <InputWrap>
//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             value={inputName}
//             onChange={handleNameChange}
//             // autoFocus
//             placeholder="Search images and photos"
//           />
//           <div>
//             <span></span>
//           </div>
//           <button type="submit">
//             <span>Finde</span>
//           </button>
//         </InputWrap>
//       </form>
//     </SearchbarWrap>
//   );
// };
// ----------------------------------------------------------
// const Searchbar = ({ onSubmitForm, searchName }) => {
//   const [inputName, setInputName] = useState('');
//   // забираем дату с инпута и бросаем в стейт
//   const handleNameChange = e => {
//     const newName = e.currentTarget.value.toLowerCase();
//     setInputName(newName);
//   };

//   // передаем в апп то что ввели в инпут
//   const handleSubmit = e => {
//     e.preventDefault();
//     const userInput = inputName.trim();
//     if (userInput === '') {
//       toast.error('fill in the fields');
//       return;
//     }
//     onSubmitForm(inputName);
//     // очищаем инпут
//     cleanInput();
//   };

//   // фун. очистки полей
//   const cleanInput = () => {
//     setInputName('');
//   };

//   return (
//     <SearchbarWrap>
//       <Title>{searchName}</Title>
//       <form onSubmit={handleSubmit}>
//         <InputWrap>
//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             value={inputName}
//             onChange={handleNameChange}
//             // autoFocus
//             placeholder="Search images and photos"
//           />
//           <div>
//             <span></span>
//           </div>
//           <button type="submit">
//             <span>Finde</span>
//           </button>
//         </InputWrap>
//       </form>
//     </SearchbarWrap>
//   );
// };
