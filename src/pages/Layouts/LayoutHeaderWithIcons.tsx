import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header';

function LayoutHeaderWithIcons() {
  const location = useLocation(); // Obtenha a localização atual

  // Defina o título com base na localização
  const title = location.pathname === '/meals' ? 'Meals' : 'Drinks';

  return (
    <div>
      <Header title={ title } withSearchIcons />
      <Outlet />
    </div>
  );
}

export default LayoutHeaderWithIcons;
