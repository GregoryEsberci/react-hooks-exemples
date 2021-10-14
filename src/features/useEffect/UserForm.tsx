import { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';

// https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  /*
    useEffect aceita como primeiro argumento uma função que vai ser executada
    depois da renderização do componente, ela é o "effect"

    se nenhum valor for passado como segundo argumento o effect vai ser disparado
    depois de todas renderizações
  */
  useEffect(() => {
    console.log('\n\n');
    console.log('alguma coisa foi alterada');
  });

  /*
    Caso um array vazio seja passado como segundo argumento a effect sera
    chamada apenas na montagem do componente
  */
  useEffect(() => {
    console.log('o componente foi montado');

    /*
      O retorno do useEffect pode ser uma função que sera executada antes
      de iniciar o proximo evento, ela é a função de limpeza do effect

      Nesse tipo de situação a função de limpeza do effect sera chamada antes do
      componente ser desmontado

      https://pt-br.reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
    */
    return () => console.log('o componente vai ser desmontado');
  }, []);

  /*
    Se o segundo argumento for um array com valore o effect sera disparado apenas quando
    um ou mais desses valores for alterado

    https://pt-br.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  */
  useEffect(() => {
    console.log('o "name" foi alterado');
  }, [name]);

  useEffect(() => {
    console.log('o "email" foi alterado');
  }, [email]);

  useEffect(() => {
    console.log('o "name" e/ou "nickname" foi alterado');
  }, [name, nickname]);

  return (
    <>
      <span className="p-float-label mb-2">
        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="name">Nome</label>
      </span>

      <span className="p-float-label mb-2">
        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="email">Email</label>
      </span>

      <span className="p-float-label mb-2">
        <InputText id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <label htmlFor="nickname">Apelido</label>
      </span>
    </>
  );
};

export default UserForm;
