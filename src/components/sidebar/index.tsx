import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar as PrimereactSidebar } from 'primereact/sidebar';
import features from '../../features/features';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const items = features.map(({ menu }) => menu);

const Sidebar = () => (
  <PrimereactSidebar
    onHide={noop}
    visible
    dismissable={false}
    showCloseIcon={false}
  >
    <PanelMenu model={items} />
  </PrimereactSidebar>
);

export default Sidebar;
