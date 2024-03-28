// api.js

export const searchRecipes = async (searchTerm, page) => {
    try {
      const baseUrl = new URL("http://localhost:4000/api/recipes/search");
      baseUrl.searchParams.append("searchTerm", searchTerm);
      baseUrl.searchParams.append("page", String(page));
  
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getRecipeSummary = async (recipeId) => {
    try {
      const url = new URL(`http://localhost:4000/api/recipes/${recipeId}/summary`);
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getFavouriteRecipes = async () => {
    try {
      const url = new URL("http://localhost:4000/api/recipes/favourite");
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export const addFavouriteRecipe = async (recipe) => {
    try {
      const url = new URL("http://localhost:4000/api/recipes/favourite");
      const body = {
        recipeId: recipe.id,
      };
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export const removeFavouriteRecipe = async (recipe) => {
    try {
      const url = new URL("http://localhost:4000/api/recipes/favourite");
      const body = {
        recipeId: recipe.id,
      };
  
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  