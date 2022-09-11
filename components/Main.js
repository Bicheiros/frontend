import { useState } from 'react';

import SelectGameNumber, { Button } from './types/SelectGameNumber';
import styled from 'styled-components';

const types = [
  'Selecione seu Jogo',
  'Verique os Jogos anteriores',
  'Visualize seus Jogos',
];

export const ButtonHead = styled.button`
  margin: 10px;
  cursor: pointer;
  background-color: #6419e6;
  color: #e5e7e8;
  width: 300px;
  padding: 10px;
  height: 100px;
  font-weight: bold;
  border-radius: 20px 20px 20px 20px;
  font-size: 20px;
  box-shadow: 7px 7px 10px #000000, -1px -1px 1px #000;
  :hover {
    background-color: #e50ad3;
    color: black;
    border-radius: 20px 20px 20px 20px;
  }
  :active {
    background-color: #11f455;
    box-shadow: 0 5px rgb(80, 80, 80);
    transform: translateY(4px);
  }
`;

export default function Main() {
  const [type, setType] = useState('');

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '30px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {types.map((value, index) => {
          return (
            <ButtonHead onClick={() => setType(index + 1)}>{value}</ButtonHead>
          );
        })}
        {type && <div>{type === 1 && <SelectGameNumber />}</div>}
      </div>
    </>
  );
}
