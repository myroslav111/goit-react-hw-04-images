import styled from '@emotion/styled';

export const ButtonSubmit = styled.button`
  margin-right: auto;
  margin-left: auto;
  position: relative;
  font-family: 'Caveat', cursive;
  color: rgba(5, 5, 5, 0.7);
  font-size: 25px;
  padding: 0;
  width: 200px;
  height: 50px;
  margin-top: 30px;
  border: 2px solid #888888;
  outline: none;
  border-radius: 8px;
  box-shadow: -6px -20px 35px #ffffff, -6px -10px 15px #ffffff,
    -20px 0px 30px #ffffff, 6px 20px 25px rgba(0, 0, 0, 0.2);
  transition: 0.13s ease-in-out;
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  z-index: 1;
  &:hover {
    animation: animate 8s linear infinite;
  }
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 8px;
    opacity: 0;
    transition: 0.5s;
  }
  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
`;
