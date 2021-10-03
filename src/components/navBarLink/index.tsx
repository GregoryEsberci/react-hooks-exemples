import { FC } from 'react';
import { Link } from 'react-router-dom';

const NavBarLink: FC<PropTypes> = ({ url, label }) => <Link to={url} className="p-menuitem-link">{label}</Link>;

interface PropTypes {
  url: string
  label: string
}

export default NavBarLink;
