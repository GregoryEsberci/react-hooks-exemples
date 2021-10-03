import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { getRandomNumbers, min, sum } from '../../../utils';

/*
  https://pt-br.reactjs.org/docs/hooks-reference.html#lazy-initial-state
*/

const CorrectLazyInitialState = () => {
  /*
    Alteração:
    `useState(getRandomNumbers(10e6));` -> `useState(() => getRandomNumbers(10e6));`

    Dessa forma o `getRandomNumbers` vai ser executado apenas uma vez no `initialState`
  */
  const [randomNumbers, setRandomNumbers] = useState(() => getRandomNumbers(10e6));

  /*
    Ainda vai ser executado a cada re-renderização, isso poderia ser corrigido com `useMemo`
  */
  const minNumber = min(randomNumbers);

  return (
    <>
      <p>Soma: {sum(randomNumbers)}</p>
      <p>Mínimo: {minNumber}</p>

      <span className="p-float-label mb-2">
        <InputNumber id="numbers-size" onChange={(e) => setRandomNumbers(getRandomNumbers(e.value))} value={randomNumbers.length} />
        <label htmlFor="numbers-size">Quantidade de números</label>
      </span>
    </>
  );
};

export default CorrectLazyInitialState;
