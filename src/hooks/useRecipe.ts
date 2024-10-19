import { useState, useEffect } from 'react';

export const useRecipe = (isDrink: boolean) => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const endpoint = isDrink
    ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  const param = isDrink ? 'drinks' : 'meals';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const first12Recipes = Array.isArray(data[param]) ? data[param].slice(0, 12) : [];
        setRecipes(first12Recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setRecipes([]); // Define um array vazio em caso de erro
      }
    };
    fetchRecipes();
  }, [endpoint, param]);

  return { recipes, setRecipes };
};
