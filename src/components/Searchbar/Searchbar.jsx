import { useState } from 'react';
import {
  SearchbarWrap,
  InputWrap,
  SearchFormInput,
  Title,
} from './Searchbar.styled';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmitForm, searchName }) => {
  const [inputName, setInputName] = useState('');

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
    onSubmitForm(inputName);
    // очищаем инпут
    cleanInput();
  };

  // фун. очистки полей
  const cleanInput = () => {
    setInputName('');
  };

  return (
    <SearchbarWrap>
      <Title>{searchName}</Title>
      <form onSubmit={handleSubmit}>
        <InputWrap>
          <SearchFormInput
            type="text"
            autoComplete="off"
            value={inputName}
            onChange={handleNameChange}
            // autoFocus
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
