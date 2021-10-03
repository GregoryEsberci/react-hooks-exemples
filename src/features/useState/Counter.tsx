import { useState } from 'react';
import { Button } from 'primereact/button';

const INITIAL_COUNT = 0;

/*
  Exemplo com "Atualizações Funcionais"
  https://pt-br.reactjs.org/docs/hooks-reference.html#functional-updates

  Ok, mas pq precisa ser utilizada atualização funcionais?
  Resposta curta: O setState não atualiza o valor imediatamente

  Segundo a da documentação:
    Durante as próximas re-renderizações, o primeiro valor retornado por useState
    sempre será o estado mais recente **após a aplicação das atualizações**.

  Na atualização funcional o parametro recebido é o valor "real" do state,
  ele vai ser diferente do que é retornando pelo `useState` se existir atualizações pendentes,
  nesse tipo de situação o parametro recebido pelo callback vai ser igual ao valor que sera
  aplicado nas atualizações
*/

const Counter = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  return (
    <>
      <p>Resultado: {count}</p>
      <div className="p-buttonset">
        {/*
          `prevCount` === count se todas as atualizações já tiverem sido aplicadas

          Caso elas não tenham sido aplicadas o valor vai ser igual ao valor que será
          utilizado nas atualizações

          O valor retornado pela callback `(prevCount) => prevCount - 1)` vai ser o novo `count`
        */}
        <Button icon="pi pi-plus" onClick={() => setCount((prevCount) => prevCount - 1)} />
        <Button icon="pi pi-minus" onClick={() => setCount((prevCount) => prevCount + 1)} />
        <Button label="Resetar" onClick={() => setCount(INITIAL_COUNT)} />
      </div>
    </>
  );
};

export default Counter;
