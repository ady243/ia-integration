// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// const RecipeCard = ({
//   recipe,
//   onClick,
//   onFavouriteButtonClick,
//   isFavourite,
// }) => {
//   return (
// <div className="recipe-card" onClick={onClick}>
//   <img src={recipe.image}></img>
//   <div className="recipe-card-title">
//     <span
//       onClick={(event) => {
//         event.stopPropagation();
//         onFavouriteButtonClick(recipe);
//       }}
//     >
//       {isFavourite ? (
//         <AiFillHeart size={25} color="red" />
//       ) : (
//         <AiOutlineHeart size={25} />
//       )}
//     </span>
//     <h3>{recipe.name}</h3>
//   </div>
// </div>
//   );
// };

// export default RecipeCard;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// const RecipeCard = ({ name, description, method }) => {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={<Avatar aria-label="recipe" className={classes.avatar}></Avatar>}
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={name}
//         // subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image="/static/images/cards/paella.jpg"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {description} {/* corrected here */}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>{method}</Typography> {/* corrected here */}
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// };

// export default RecipeCard;

import React, { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRecipeContext } from "../hook/RecipeContext";
import { Recipe } from "../model/types";


const RecipeCard = ({ recipe }) => {
 const  [name, setName] = useState('');
  const  [description, setDescription] = useState('');
  const  [method, setMethod] = useState('');
  const {recipes, favouriteRecipes, addFavouriteRecipe, removeFavouriteRecipe} = useContext(useRecipeContext);


  const isFavourite = favouriteRecipes.some(
    (favRecipe) => favRecipe.id === recipe.id
  );

  const handleClick = () => {
    // Logique de clic sur la carte du plat
  };

  const handleFavouriteClick = (event) => {
    event.stopPropagation(); // Empêche la propagation du clic à la carte parente∏
    if (isFavourite) {
      removeFavourite(recipe); // Supprimez le plat des favoris
    } else {
      addFavourite(recipe); // Ajoutez le plat aux favoris
    }
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-card-title">
        <span onClick={handleFavouriteClick}>
          {isFavourite ? (
            <AiFillHeart size={25} color="red" />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </span>
        <h3>{recipe.name}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
