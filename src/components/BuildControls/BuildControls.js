import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
];

const BuildControls = ({ ingredientAdded, ingredientRemoved, ingredients, price, purchasable }) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total Price: <strong>{price.toFixed(2)}$</strong></p>
            {controls.map(control =>
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => ingredientAdded(control.type)}
                    removed={() => ingredientRemoved(control.type)}
                    ingredientCount={ingredients[control.type]}
                />)}
            <button className={classes.OrderButton} disabled={!purchasable}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;