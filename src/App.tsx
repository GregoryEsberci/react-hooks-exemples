import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <Routes />
    <Sidebar />
  </BrowserRouter>
);

export default App;
