import classes from './all-meetups.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetUpItem(props) {
    // wir benötigen das useContext Paket und auf den globalen Favorites State zuzugreifen, den wir um die gesamte App gewraped haben.
    const favoritesCtx = useContext(FavoritesContext);
    // hier greifen wir auf eine Methode aus dem favorites Context zu und speichern ob das gesamte meetUp Item ein Favorite ist !
    const itemIsFavorite = favoritesCtx.meetupIsFavorite(props.meetupProp._id);

    function addfavoriteHandler() {
        // im zusammenspiel mit dem Favorites Context 
        if (itemIsFavorite) {
            favoritesCtx.deleteFavorite(props.meetupProp._id);
        } else {
            favoritesCtx.addFavorite({
                title: props.meetupProp.title,
                location: props.meetupProp.location,
                _id: props.meetupProp._id
            })
        }
    }

    return (
        <div className={classes.meetup}>
            <h2>{props.meetupProp.title}</h2>
            <p> {props.meetupProp.location}</p>
            {/* die Mehtode fügt das meetup zu den Favorites hinzu oder entfernt es  sofern es eine Favorite ist änder sich der Button text zu delete */}
            <button onClick={addfavoriteHandler}> {itemIsFavorite ? 'delete Favorite' : 'add to Favorites'} </button>
        </div>
    )
}

export default MeetUpItem