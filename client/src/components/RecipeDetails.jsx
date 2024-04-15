import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { RecipeContext } from "../hook/RecipesProvider";
import { computeSimilarity, tokenizeRecipeText } from "../utils/textSimilarity";
import Grocery from "../pages/Grocery"
import Sidedish from "../pages/Sidedish"

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Loading...</div>;
  }

 
  const findSimilarRecipes = () => {
   
    const tokenizedCurrentRecipe = tokenizeRecipeText(recipe.description);

    const similarRecipes = recipes
      .filter((rec) => rec.id !== recipe.id) 
      .map((rec) => ({
        recipe: rec,
        similarity: computeSimilarity(tokenizedCurrentRecipe, tokenizeRecipeText(rec.description)),
      }))
      .sort((a, b) => b.similarity - a.similarity);

    return similarRecipes.slice(0, 3); 
  };

  const similarRecipes = findSimilarRecipes();

  return (
    <div className="container my-24 mx-auto md:px-6">
      <Link to="/" className="text-blue-500 mb-4 block">
        &larr; Retour à la liste des recettes
      </Link>
      <section className="mb-32">
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex grid items-center lg:grid-cols-2">
            {/* Recipe details */}
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 className="mb-8 text-3xl font-bold">{recipe.name}</h2>
                <p className="mb-8 pb-2 dark:text-neutral-300 lg:pb-0">Description: {recipe.description}</p>
                {/* Display similar recipes */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                  <Grocery style={{ marginRight: "10px" }} />
                  <div style={{ width: "10px" }} /> {/* Espace de 10 pixels */}
                  <Sidedish />
                </div>
                {similarRecipes.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Recettes similaires:</h3>
                    <ul>
                      {similarRecipes.map((simRecipe) => (
                        <li key={simRecipe.recipe.id}>
                          <Link to={`/recipe/${simRecipe.recipe.id}`} className="text-blue-500">
                            {simRecipe.recipe.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Recipe image */}
            <div>
              <img className="object-cover w-full h-96 rounded-lg shadow-lg" src={recipe.imageUrl} alt={recipe.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetails;
