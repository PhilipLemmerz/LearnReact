import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetUpList from '../components/all-meetups/meetups-list';

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p> No Favorite Meetups - Maybe add some ?</p>
    } else {
        // Gutes Beispiel zur erneuten Verwendung von der MeetUpList Component.
        content = <MeetUpList meetups={favoritesCtx.favorites} />
    }
    return (
        <div>
            <h1> Favorites Page</h1>
            {content}
        </div>
    )
}

export default Favorites