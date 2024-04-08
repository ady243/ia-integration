import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../hook/RecipesProvider";

const RecipeDetails = () => {
  const { id } = useParams(); // Récupérer l'ID de la recette depuis les paramètres d'URL
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Loading...</div>; // Gestion du chargement ou de l'absence de la recette
  }

  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    //     <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">{recipe.name}</div>
    //         <p className="text-gray-700 text-base">{recipe.description}</p>
    //     </div>
    // </div>

    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32">
        <div class="container mx-auto text-center lg:text-left xl:px-32">
          <div class="flex grid items-center lg:grid-cols-2">
            <div class="mb-12 lg:mb-0">
              <div class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 class="mb-8 text-3xl font-bold">{recipe.name}</h2>
                <p class="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                  Apprenons à préparer ensemble : {recipe.name}
                </p>

                <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                  <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Rapide
                  </p>

                  <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg
                      class="h-10 w-10"
                     stroke="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 700 512"
                    >
                      <path   stroke-linecap="round"
                        stroke-linejoin="round"  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    Favori
                  </p>

                  <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Durée: ...
                  </p>
                </div>

                <p class="mb-0 text-neutral-500 dark:text-neutral-300">
                  {recipe.description}
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg"
                class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetails;
