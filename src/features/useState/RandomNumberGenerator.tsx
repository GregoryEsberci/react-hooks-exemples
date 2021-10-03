import { useState } from 'react';
import { Button } from 'primereact/button';

/*
  Exemplo básico onde o state é atualizado quando o botão é clicado

  https://pt-br.reactjs.org/docs/hooks-reference.html#usestate
*/

const getRandomNumber = () => +(Math.random() * 100).toFixed(0);

const RandomNumberGenerator = () => {
  // Cria o state
  const [
    number, // valor
    setNumber, // setter que será utilizado para altera o valor
  ] = useState(0); // 0 === valor inicial do state

  return (
    <>
      {/* Exibe o resultado */}
      <p>Resultado: {number}</p>
      {/* Atualiza o valor */}
      <Button label="Gerar" onClick={() => setNumber(getRandomNumber())} />
    </>
  );
};

export default RandomNumberGenerator;
