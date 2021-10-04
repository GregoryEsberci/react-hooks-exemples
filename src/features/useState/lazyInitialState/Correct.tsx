import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { getRandomNumbers, min, sum } from '../../../utils';

/*
  https://pt-br.reactjs.org/docs/hooks-reference.html#lazy-initial-state
*/

const max = 50e5;

const CorrectLazyInitialState = () => {
  /*
    Alteração:
    `useState(getRandomNumbers(10e6));` -> `useState(() => getRandomNumbers(10e6));`

    Dessa forma o `getRandomNumbers` vai ser executado apenas uma vez no `initialState`
  */
  const [randomNumbers, setRandomNumbers] = useState(() => getRandomNumbers(max));

  /*
    Ainda vai ser executado a cada re-renderização, isso poderia ser corrigido com `useMemo`
  */
  const minNumber = min(randomNumbers);

  return (
    <>
      <p>Soma: {sum(randomNumbers)}</p>
      <p>Mínimo: {minNumber}</p>

      <span className="p-float-label mb-2">
        <InputNumber max={max} id="numbers-size" onChange={(e) => setRandomNumbers(getRandomNumbers(e.value))} value={randomNumbers.length} />
        <label htmlFor="numbers-size">Quantidade de números</label>
      </span>
      <small>O valor máximo é: {max.toLocaleString()}</small>
    </>
  );
};

export default CorrectLazyInitialState;
