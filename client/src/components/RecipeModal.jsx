import React, { useEffect, useState } from "react";
import { RecipeSummary } from "../model/types";
import { useRecipeContext } from "../pages/RecipeContext";

const RecipeModal = () => {
  const { getRecipeSummary, onClose, recipeId } = useRecipeContext(); // Utilisez le hook useRecipeContext pour accéder aux données de recette
  const [recipeSummary, setRecipeSummary] = useState<RecipeSummary>

  useEffect(() => {
    const fetchRecipeSummary = async () => {
      try {
        const summaryRecipe = await getRecipeSummary(recipeId); // Utilisez la méthode du contexte pour obtenir le résumé de la recette
        setRecipeSummary(summaryRecipe);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipeSummary();
  }, [recipeId, getRecipeSummary]);

  if (!recipeSummary) {
    return <></>;
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{recipeSummary.title}</h2>
            <span className="close-btn" onClick={onClose}>
              &times;
            </span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: recipeSummary.summary }}></p>
        </div>
      </div>
    </>
  );
};

export default RecipeModal;
