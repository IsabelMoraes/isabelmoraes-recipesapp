import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import MealDetails from './pages/MealDetails';
import DrinkDetails from './pages/DrinkDetails';
import MealsInProgress from './pages/MealsInProgress';
import DrinksInProgress from './pages/DrinksInProgress';
import ProfilePage from './pages/ProfilePage';
import FavoriteRecipesPage from './pages/FavoriteRecipesPage';
import DoneRecipesPage from './pages/DoneRecipesPage';
import LayoutHeaderWithoutIcons from './pages/Layouts/LayoutHeaderWithoutIcons';
import LayoutHeaderWithIcons from './pages/Layouts/LayoutHeaderWithIcons';

function App() {
  return (
    <Routes>
      {/* Rota de Login */}
      <Route path="/" element={ <Login /> } />

      {/* Rotas de detalhes */}
      <Route path="/drinks/:id" element={ <DrinkDetails /> } />
      <Route path="/meals/:id" element={ <MealDetails /> } />
      <Route path="/meals/:id/in-progress" element={ <MealsInProgress /> } />
      <Route path="/drinks/:id/in-progress" element={ <DrinksInProgress /> } />

      {/* Rotas com Layout de Cabeçalho com Ícones */}
      <Route element={ <LayoutHeaderWithIcons /> }>
        <Route path="/drinks" element={ <Drinks /> } />
        <Route path="/meals" element={ <Meals /> } />
      </Route>

      {/* Rotas com Layout de Cabeçalho sem Ícones */}
      <Route element={ <LayoutHeaderWithoutIcons /> }>
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/done-recipes" element={ <DoneRecipesPage /> } />
        <Route path="/favorite-recipes" element={ <FavoriteRecipesPage /> } />
      </Route>
    </Routes>
  );
}

export default App;
