// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = () => {
    if (name && ingredients && directions) {
      const newRecipe = {
        id: Math.random(),
        name: name,
        ingredients: ingredients,
        directions: directions
      };
      setRecipes([...recipes, newRecipe]);
      setName('');
      setIngredients('');
      setDirections('');
    }
  };

  const handleDeleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipe Name"
          className="small-input"
        />
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients"
          className="small-input"
        />
        <textarea
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
          placeholder="Directions"
          className="directions-input"
        />
        <button onClick={handleAddRecipe}>Add Recipe</button>
      </div>
      <div className="recipes-list">
        <h2>Recipes List</h2>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Directions:</strong> {recipe.directions}</p>
              <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
