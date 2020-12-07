import classes from './BuildControl.module.css';

const BuildControl = ({label, added, removed, ingredientCount}) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.More} onClick={added}>More</button>
            <button className={classes.Less} onClick={removed} disabled={ingredientCount <=0 }>Less</button>
        </div>
    )
}

export default BuildControl;