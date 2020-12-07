import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = ({ingredients}) => {

    let ingredientsNum = 0;

    let transformedIngredients = Object.entries(ingredients).map((ingredient, index) => {
        const repeatingIngredients = [];
        for (let i=0; i<ingredient[1];i++) {
            ingredientsNum += ingredient[1];
            repeatingIngredients.push(<BurgerIngredient key={`ingred-${index}-${i}`} type={ingredient[0]} />);
        }

        return repeatingIngredients;
    })

    if (ingredientsNum === 0) {
        transformedIngredients = <div>No ingredients were added</div>;
    }



    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'} />
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'} />
        </div>
    )
}

export default Burger;