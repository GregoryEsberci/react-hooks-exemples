import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { getRandomNumbers, min, sum } from '../../../utils';

/*
  Exemplo da importancia de utilizar o Estado Inicial Preguiçoso,
  esse componente não utiliza ele e por isso fica lento

  https://pt-br.reactjs.org/docs/hooks-reference.html#lazy-initial-state
*/

// Se a página travar diminua o valor, a ideia é deixar ela lenta mesmo :p
const max = 50e5;

const WrongLazyInitialState = () => {
  /*
    O Function Component (WrongLazyInitialState) é executado para aplicar
    as atualizações de estado, isso significa que tudo que estiver declarado ou sendo
    executado diretamente dentro da função vai ser re-declarado e re-executado,
    isso inclui a função `getRandomNumbers` utilizada no `initialState`, ou seja,
    `getRandomNumbers(...)` vai ser executado a cada re-render
  */
  const [randomNumbers, setRandomNumbers] = useState(getRandomNumbers(max));

  /*
    `minNumber` vai ser re-declarado a cada re-render

    O `min(...)` tambem vai ser executado a cada re-renderização,
    mesmo que o randomNumbers não tenha sido alterado
  */
  const minNumber = min(randomNumbers);

  return (
    <>
      {/*
        Idem ao `min(...)`, tambem vai ser executado a cada re-renderização
       */}
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

export default WrongLazyInitialState;
