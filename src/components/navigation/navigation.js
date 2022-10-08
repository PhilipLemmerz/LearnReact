import { Link } from 'react-router-dom';
import classes from './navigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context'

function Navigation() {
    const favoritesCtx = useContext(FavoritesContext);
    const totalFavorites = favoritesCtx.totalFavorites
    return (
        <header className={classes.header} >
            <div>
                <h3 className={classes.h3}> Mein Logo</h3>
            </div>
            <nav className={classes.nav}>
                <Link to='/' className={classes.link}>All Meetups</Link>
                <Link to='/favorites' className={classes.link}> Favorites <i className={classes.favBadge}> {totalFavorites}  </i> </Link>
                <Link to='/new-meetups' className={classes.link}> new Meetups</Link>
            </nav>
        </header>
    )
}

export default Navigation