import styled from 'styled-components';

export const PlayButton = styled.button`
  background-color: white;
  color: black;
  width: 110px;
  height: 42px;
  border-radius: 5px;
  font-family: 'Poppins-SemiBold';
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e0dede;
  }
  &::before {
    content: '\u25B6';
    padding-right: 10px;
  }
`;

export const InfoButton = styled(PlayButton)`
  background-color: rgba(141, 141, 141, 0.5);
  color: white;
  width: 130px;
  &:hover {
    background-color: rgba(88, 88, 88, 0.5);
  }
  &::before {
    content: '\u2139';
    padding-right: 10px;
    font-size: 1.2rem;
  }
`;