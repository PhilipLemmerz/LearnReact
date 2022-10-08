import classes from './card.module.css';

function Card(props) {
    // Wrapper Compnent -> wo props.children steht können wir Inahlt von einer anderen Component einfügen -> dieser wird dann von Card gewrapped
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card