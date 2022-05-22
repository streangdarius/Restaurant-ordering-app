import classes from "./AvailableRecipes.module.css";
import Card from "../Interface/Card";
import Item from "./Item/Item";

const PASTA_RECIPES = [
  {
    id: "p1",
    name: "Spaghetti Carbonara",
    description:
      "Freshly made spaghetti pasta, with eggs, hard cheese (Pecorino Romano and Parmesan), cured pork (Guanciale) and black pepper.",
    price: 22.99,
  },
  {
    id: "p2",
    name: "Shrimp Fettucine Alfredo",
    description:
      "Freshly made fettuccini pasta, with butter, shrimps, garlic, hard cheese (Parmesan) and fresh parsley",
    price: 26.5,
  },
  {
    id: "p3",
    name: "Bucatin all'Amatriciana",
    description:
      "Freshly made bucatini pasta, with cured pork (Pancetta), onion, garlic, crushed tomatoes and grated hard cheese (Pecorino Romano).",
    price: 19.99,
  },
  {
    id: "p4",
    name: "Penne Alla Vodka",
    description:
      "Freshly made penne pasta, with crushed tomatoes, vodka, heavy cream and grated hard cheese (Parmesan).",
    price: 19.99,
  },
  {
    id: "p5",
    name: "Farfalle Pomodoro",
    description:
      "Freshly made farfalle pasta, with onion, garlic, crushed tomatoes and grated hard cheese (Parmesan).",
    price: 15.99,
  },
  {
    id: "p6",
    name: "Beef Fettuccine Ragu",
    description:
      "Freshly made spaghetti pasta, with beef meat, crushed tomatoes, onion, garlic, fennel seeds, thyme and grated hard cheese (Parmesan).",
    price: 25.99,
  },
];

const AvailableRecipes = () => {
  const recipeList = PASTA_RECIPES.map((recipe) => {
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
      <Card>
        <ul>{recipeList}</ul>
      </Card>
    </section>
  );
};

export default AvailableRecipes;
