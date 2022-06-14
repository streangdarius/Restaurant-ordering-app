import { useEffect, useState } from "react";
import classes from "./AvailableRecipes.module.css";
import Card from "../Interface/Card";
import Item from "./Item/Item";
import loading from "../../assets/loading.svg";

const AvailableRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchRecipes = async () => {
      const response = await fetch(
        "https://yam-91ab0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
      );

      if (!response.ok) {
        throw new Error("There was an error while fetching data from server!");
      }

      const responseData = await response.json();

      const loadedRecipes = [];

      for (const key in responseData) {
        loadedRecipes.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setRecipes(loadedRecipes);
      setIsLoading(false);
    };

    fetchRecipes().catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.notification}>
        <img src={loading} alt="Loading animation" />
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className={classes.notification}>
        <p className={classes.status}>{errorMessage}</p>
      </section>
    );
  }

  const recipeList = recipes.map((recipe) => {
    return (
      <Item
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        description={recipe.description}
        price={recipe.price}
      ></Item>
    );
  });
  return (
    <section className={classes.recipes}>
      <h1 id="recipes">menu</h1>
      <p>Enjoy the best pasta you will ever eat.</p>
      <Card>
        <ul>{recipeList}</ul>
      </Card>
    </section>
  );
};

export default AvailableRecipes;
