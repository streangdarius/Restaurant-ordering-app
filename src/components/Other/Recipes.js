import { Fragment } from "react";
import AvailableRecipes from "./AvailableRecipes";
import RecipeSummary from "./RecipeSummary";

const Recipes = () => {
  return (
    <Fragment>
      <RecipeSummary />
      <AvailableRecipes />
    </Fragment>
  );
};

export default Recipes;
