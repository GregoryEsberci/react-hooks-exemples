import NavBarLink from '../../components/navBarLink';
import Feature from '../feature';
import UserForm from './UserForm';

class UseEffectFeature extends Feature {
   routes = [
     {
       component: UserForm,
       exact: true,
       path: ['/', '/effect/user-form'],
     },
   ];

  menu = {
    label: 'useEffect',
    items: [
      { template: <NavBarLink url="/effect/user-form" label="Formulario de usuário" /> },
    ],
  };
}

export default new UseEffectFeature();
