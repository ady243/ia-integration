

// App.js
import React from 'react';
import HomePage from './pages/HomePage';

// import { AiOutlineSearch } from 'react-icons/ai';
// import { useRecipeContext } from './pages/RecipeContext';
// import RecipeCard from './components/RecipeCard';
// import RecipeModal from './components/RecipeModal';
// import './App.css';


const App = () => {
  
  return (

<HomePage/>
    // <div className="app-container">
    //   <div className="header">
    //     <img src="/hero-image.jpg" alt="hero" />
    //     <div className="title">My Recipe App</div>
    //   </div>
    //   <div className="tabs">
    //     <h1 className={selectedTab === 'search' ? 'tab-active' : ''} onClick={() => console.log('click')}>
    //       Recipe Search
    //     </h1>
    //     <h1 className={selectedTab === 'favourites' ? 'tab-active' : ''} onClick={() => console.log('click')}>
    //       Favourites
    //     </h1>
    //   </div>

    //   {selectedTab === 'search' && (
    //     <>
    //       <form onSubmit={handleSearchSubmit}>
    //         <input
    //           type="text"
    //           required
    //           placeholder="Enter a search term ..."
    //           value={searchTerm}
    //           onChange={(event) => setSearchTerm(event.target.value)}
    //         />
    //         <button type="submit">
    //           <AiOutlineSearch size={40} />
    //         </button>
    //       </form>

    //       <div className="recipe-grid">
    //         {recipes.map((recipe) => {
    //           const isFavourite = favouriteRecipes.some((favRecipe) => recipe.id === favRecipe.id);

    //           return (
    //             <RecipeCard
    //               key={recipe.id}
    //               recipe={recipe}
    //               onClick={() => console.log('click')}
    //               onFavouriteButtonClick={isFavourite ? removeFavouriteRecipe : addFavouriteRecipe}
    //               isFavourite={isFavourite}
    //             />
    //           );
    //         })}
    //       </div>

    //       <button className="view-more-button" onClick={handleViewMoreClick}>
    //         View More
    //       </button>
    //     </>
    //   )}

    //   {selectedTab === 'favourites' && (
    //     <div className="recipe-grid">
    //       {favouriteRecipes.map((recipe) => (
    //         <RecipeCard
    //           key={recipe.id}
    //           recipe={recipe}
    //           onClick={() => console.log('click')}
    //           onFavouriteButtonClick={removeFavouriteRecipe}
    //           isFavourite={true}
    //         />
    //       ))}
    //     </div>
    //   )}

    //   {selectedRecipe && <RecipeModal recipeId={selectedRecipe.id.toString()} onClose={() => console.log('close')} />}
    // </div>
  );
};

export default App;
