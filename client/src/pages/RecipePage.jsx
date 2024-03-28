// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import clsx from 'clsx';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     marginBottom: theme.spacing(2), // Ajoutez un espace entre les cartes de recette
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // Ratio 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: theme.palette.primary.main, // Modifiez la couleur d'arrière-plan de l'avatar
//   },
// }));

// const RecipePage = () => {
//   const classes = useStyles();
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipeData = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/recipes');
//         const recipes = await response.json();
//         setRecipes(Array.isArray(recipes) ? recipes : []);
//         console.log('Recipe data:', recipes);
//       } catch (error) {
//         console.error('Error fetching recipe data:', error);
//       }
//     };

//     fetchRecipeData();
//   }, []);

//   const handleFavouriteClick = (recipe) => {
//     // Logique pour gérer le clic sur l'icône de favori
//     const updatedRecipes = recipes.map((r) => {
//       if (r.id === recipe.id) {
//         return { ...r, isFavourite: !r.isFavourite };
//       }
//       return r;
//     });
//     setRecipes(updatedRecipes);
//   };

//   return (
    
//     <div>
//       {recipes.map((recipe) => (
       
//         <Card key={recipe.id} className={classes.root}>
        
//           <CardHeader
//             avatar={
//               <Avatar aria-label="recipe" className={classes.avatar}>
//                 R
//               </Avatar>
//             }
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }

//             title={recipe.name}
//           />
//           <CardMedia
//             className={classes.media}
//             image={recipe.image} // Remplacez cette ligne par votre URL d'image
//             title={recipe.name}
//           />
//           <CardContent>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {recipe.description}
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton
//               aria-label="add to favorites"
//               onClick={() => handleFavouriteClick(recipe)}
//             >
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
//             <IconButton
//               className={clsx(classes.expand, {
//                 [classes.expandOpen]: false, // Mettez ici la logique pour gérer l'expansion si nécessaire
//               })}
//               aria-expanded={false} // Mettez ici la logique pour gérer l'expansion si nécessaire
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </IconButton>
//           </CardActions>
//           <Collapse in={false} unmountOnExit>
//             <CardContent>
//               <Typography paragraph>Method:</Typography>
//               <Typography paragraph>{recipe.method}</Typography>
//             </CardContent>
//           </Collapse>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default RecipePage;















// import React, { useState, useEffect } from 'react';
// import RecipeCard from '../components/RecipeCard';

// const RecipePage = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         const fetchRecipeData = async () => {
//             try {
//                 const response = await fetch("http://localhost:4000/api/recipes");
//                 const recipes = await response.json();
//                 setRecipes(Array.isArray(recipes) ? recipes : []); 
//                 console.log("Recipe data:", recipes);
//             } catch (error) {
//                 console.error("Error fetching recipe data:", error);
//             }
//         };

//         fetchRecipeData();
//     }, []);

//     const handleFavouriteClick = (recipe) => {
//         // Logic to handle marking a recipe as favourite
//         const updatedRecipes = recipes.map((r) => {
//             if (r.id === recipe.id) {
//                 return { ...r, isFavourite: !r.isFavourite };
//             }
//             return r;
//         });
//         setRecipes(updatedRecipes);
//     };

//     return (
//         <div>
//             {recipes.map((recipe) => (
//                 <RecipeCard
//                     key={recipe.id}
//                     name={recipe.name}
//                     description={recipe.description}
//                     method={recipe.method}
//                     onClick={() => console.log("Recipe clicked:", recipe)}
//                     onFavouriteButtonClick={() => handleFavouriteClick(recipe)}
//                     isFavourite={recipe.isFavourite}
//                 />
//             ))}
//         </div>
//     );
// };

// export default RecipePage;





// import React, { useState, useEffect } from 'react';
// import RecipeCard from '../components/RecipeCard';

// const RecipePage = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         const fetchRecipeData = async () => {
//             try {
//                 const response = await fetch("http://localhost:4000/api/recipes");
//                 const recipes = await response.json();
//                 setRecipes(Array.isArray(recipes) ? recipes : []); 
//                 console.log("Recipe data:", recipes);
//             } catch (error) {
//                 console.error("Error fetching recipe data:", error);
//             }
//         };

//         fetchRecipeData();
//     }, []);

//     const handleFavouriteClick = (recipes) => {
//         // Logic to handle marking a recipe as favourite
//         const updatedRecipes = recipes.map((r) => {
//             if (r.id === recipes.id) {
//                 return { ...r, isFavourite: !r.isFavourite };
//             }
//             return r;
//         });
//         setRecipes(updatedRecipes);
//     };

//     return (
//         <div>
//             {recipes.map((recipes) => (
//                 <RecipeCard
//                     key={recipes.id}
//                     recipe={recipes}
//                     onClick={() => console.log("Recipe clicked:", recipes)}
//                     onFavouriteButtonClick={handleFavouriteClick}
//                     isFavourite={recipes.isFavourite}
//                 />
//             ))}
//         </div>
//     );
// };

// export default RecipePage;







import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const RecipePage = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/recipes");
        const data = await response.json();

        setRecipes(data); // Mettez à jour l'état avec les données de la recette
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de recette:",
          error
        );
      }
    };

    fetchRecipeData();
  }, []);
  if (!Array.isArray(recipes)) {
    return <div>Loading...</div>;
  }

  return (
    console.log(recipes),
<> 

<div>
      <h1>Recipes</h1>
      <RecipeCard recipes={recipes} onFavouriteButtonClick={handleFavouriteClick} />
    </div>



    {/* <div>
      {recipeData ? (
        recipeData.map(recipe => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            description={recipe.description}
            method={recipe.method}
          />
        ))
      ) : (
        <p>Loading...</p> // Show a loading message while data is being fetched
      )}
    </div>

    <div className="row mt-5">
      <div className="col-md">
        <div className="row">
          {/* Check if recipeData is not null before rendering RecipeCard */}
          {/* {recipeData && (
            <div className="col-md-4 mb-4">
              <RecipeCard
                name={
                  recipeData && recipeData.name
                    ? recipeData.name
                    : "Nom indisponible"
                }
                description={
                  recipeData && recipeData.description
                    ? recipeData.description
                    : "Description indisponible"
                }
                method={
                  recipeData && recipeData.method
                    ? recipeData.method
                    : "Méthode indisponible"
                }
              />
            </div>
          )}
        </div>
      </div>
    </div> */} 
    </>
  );
};

export default RecipePage;
