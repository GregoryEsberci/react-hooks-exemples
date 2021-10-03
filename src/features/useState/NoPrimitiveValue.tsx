import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

/*
  Exemplo com valores não primitivos

  Alguns tipos de dados tem que ter um tratamento especial nos hooks por conta de um detalhe:
   React usa o algoritmo de comparação Object.is.
   Ref: https://pt-br.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update

  Mas oque o Object.is tem a ver com isso?
   O JS não vai comparar a estrutura dos objetos e sim a referencia de memoria deles
   Isso vale para qualquer valor não-primitivo: array, função, classe, etc

   Exemplo: `Object.is({}, {})`
     Os dois objetos tem a mesma estrutura de dados (objetos vazios)
     mas estão armazenados em lugares diferentes na memoria
     por isso o valor retornado vai ser `false`

   https://javascript.plainenglish.io/comparing-objects-in-javascript-ce2dc1f3de7f
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#objetos
   https://developer.mozilla.org/pt-BR/docs/Glossary/Primitive
*/

const INITIAL_USER = { email: '', name: '' };
const NoPrimitiveValue = () => {
  /*
    Sempre que possivel separe os valores em states diferentes,
    o ideal seria ter um state para o `name` e outro para o `age`

    Aqui tem uma coisa nova também, o type do valor
    armazenado no state foi definido explicitamente com o `<User>`
  */
  const [user, setUser] = useState<User>(INITIAL_USER);

  /**
   * O atributo `name` vai ser alterado e logado no `result`
   * mas como a referencia de memoria não foi modificada o componente não
   * vai re-renderizar e por consequencia não vai atualizar os valores na página
   */
  const setNameWithoutRefChange = (name: string) => {
    console.log('#########################################');
    console.log('setNameWithoutRefChange - parameter', name);
    user.name = name;
    setUser(user);
    console.log('setNameWithoutRefChange - result', user.name);
  };

  /*
    Vai ser criado um novo objeto em outro lugar na memoria usando como base
    o `prevUser` e depois vai sobrescrever o atributo `name`,
    dessa forma o react vai entender que o state foi alterado
  */
  const setNameWithRefChange = (name: string) => {
    console.log('#########################################');
    console.log('setNameWithRefChange - parameter', name);
    setUser((prevUser) => ({ ...prevUser, name }));
    /**
     * O `user.name` ainda não foi modificado nesse ponto então ele vai ser diferente do `name`
     * O Counter.tsx contem a explicacao do pq isso acontece
     */
    console.log('setNameWithRefChange - result', user.name);
  };

  /*
    A objeto esta sendo recriado que nem no `setNameWithRefChange` mas de forma direta,
    o correto seria fazer uma Atualizações Funcional

    Dessa forma vai gerar problemas ao atualizar
    mais de um atributo em um curto periodo de tempo
    veja os exemplos dos `resets` para entender melhor
  */
  const setEmail = (email: string) => {
    console.log('#########################################');
    console.log('setEmail - parameter', email);
    setUser(({ ...user, email }));
    console.log('setEmail - result', user.name);
  };

  /*
    Apenas o email vai ser atualizado

    O `setNameWithRefChange` vai alterar o nome e logo em seguida executado o `setEmail`
    mas o objeto que é usado como base (linha 77, `user`) está  desatualizado já que
    a alteração do nome aida não foi aplicada
  */
  const resetWithBug = () => {
    setNameWithRefChange('');
    setEmail('');
  };

  /*
    Pode parecer contra-intuitivo mas dessa forma os dois campos vão ser limpos

    O `setEmail` vai funcionar como deveria pois o objeto utilizado esta atualizado

    O `setNameWithRefChange` vai utilizar como base o `prevUser` que vai conter as
    alteracoes aplicadas pelo `setEmail` já que foi utilizada a Atualização funcional
  */
  const reset = () => {
    setEmail('');
    setNameWithRefChange('');
  };

  return (
    <>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>

      <span className="p-float-label my-2 ">
        <InputText id="name-1" value={user.name} onChange={(e) => setNameWithoutRefChange(e.target.value)} />
        <label htmlFor="name-1">Nome - WithoutRefChange</label>
      </span>

      <span className="p-float-label mb-2">
        <InputText id="name-2" value={user.name} onChange={(e) => setNameWithRefChange(e.target.value)} />
        <label htmlFor="name-2">Nome - WithRefChange</label>
      </span>

      <span className="p-float-label mb-2">
        <InputText id="email" value={user.email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="email">Email</label>
      </span>

      <Button label="Resetar (bugado)" className="mr-2" onClick={resetWithBug} />
      <Button label="Resetar" onClick={reset} />

    </>
  );
};

interface User {
  name: string;
  email: string;
}

export default NoPrimitiveValue;
