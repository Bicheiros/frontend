import { useState } from 'react';

import { Milha, Centena, Dezena } from './types';

import { Account } from './Account';
const types = [
  'Milhar',
  'Centena',
  'Dezena',
  'Terno de dezena',
  'Duque de dezena',
  'Terno de grupo 1/5',
  'Dupla de grupo 1/5',
  'Dupla',
  'Passe',
];

export default function Main() {
  const [type, setType] = useState('');

  return (
    <div>
      <Account />
      {types.map((value, index) => {
        return (
          <button
            className="btn btn-sm btn-outline btn-primary ml-3 normal-case"
            onClick={() => setType(index + 1)}
          >
            {value}
          </button>
        );
      })}
      {type && (
        <div>
          <p>{type}</p>
          {type === 1 && <Milha />}
          {type === 2 && <Centena />}
          {type === 3 && <Dezena />}
        </div>
      )}
    </div>
  );
}
