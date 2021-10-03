import NavBarLink from '../../components/navBarLink';
import Feature from '../feature';
import Counter from './Counter';
import CorrectLazyInitialState from './lazyInitialState/correct';
import WrongLazyInitialState from './lazyInitialState/wrong';
import NoPrimitiveValue from './NoPrimitiveValue';
import RandomNumberGenerator from './RandomNumberGenerator';

class UseStateFeature extends Feature {
   routes = [
     {
       component: Counter,
       exact: true,
       path: ['/', '/state/counter'],
     },
     {
       component: RandomNumberGenerator,
       exact: true,
       path: '/state/random-number-generator',
     },
     {
       component: NoPrimitiveValue,
       exact: true,
       path: '/state/no-primitive-value',
     },
     {
       component: WrongLazyInitialState,
       exact: true,
       path: '/state/lazy-initial-state/wrong',
     },
     {
       component: CorrectLazyInitialState,
       exact: true,
       path: '/state/lazy-initial-state/correct',
     },
   ];

  menu = {
    label: 'useState',
    items: [
      { template: <NavBarLink url="/state/random-number-generator" label="Gerador de números" /> },
      { template: <NavBarLink url="/state/counter" label="Contador" /> },
      { template: <NavBarLink url="/state/no-primitive-value" label="Valor não-primitivo" /> },
      {
        label: 'Estado Inicial Preguiçoso',
        items: [
          { template: <NavBarLink url="/state/lazy-initial-state/wrong" label="Errado" /> },
          { template: <NavBarLink url="/state/lazy-initial-state/correct" label="Correto" /> },
        ],
      },
    ],
  };
}

export default new UseStateFeature();
