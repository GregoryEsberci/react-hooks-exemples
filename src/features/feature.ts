import { MenuItem } from 'primereact/menuitem';
import { RouteProps } from 'react-router';

export default abstract class Feature {
  abstract routes: RouteProps[];

  abstract menu: MenuItem;
}
