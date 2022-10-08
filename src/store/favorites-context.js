import { createContext, useState } from "react";

// Die Idee eines Stores ist eine globale Component, die Wert enthält der an verschiedenste andere Componenten weitergegeben werden soll
// Hier z.B. soll sich die Navigation und die AllMeetUps Component ändern sobald sich etwas an den Favorites ändert.
// Wir erstellen einen Context der um andere Componenten gewrapped werden kann -> deswegen nutzen wir props.children. Alle Components um die diese Component als Wrapper haben
// werden neu gerendert sobald sich der Wert hier ändert. Anders ausgedrückt: Diese Component wird um alle Components gewrapped die an den Werten dieese Component Interesse haben.
// Der Context wird in diesem Fall um die gesamte App gewrapped in index.js -> damit haben alle Components der App zugriff auf die Favorites

// Startwert für die Component.
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => { }, // diese beiden Funktionen binden wir im initialen Context nur ein damit wir eine besser autocompletion der IDE haben (machen nix sonst)
    deleteFavorite: (meetup_id) => { },
    meetupIsFavorite: (meetup_id) => { }
});

export function FavoritesContextProvider(props) { // Achtung: Wir müssen die provider Function exportieren und den Context unten als export default
    const [userFavorites, setFavorites] = useState([]);

    function addFavoriteMeetupHandler(newFavorite) {
        setFavorites((prevUserFavorite) => { // wenn wir states für mehrere Components updaten müssen wir eine Function in die Setter Methode geben die den State updatet mit einem return
            return prevUserFavorite.concat(newFavorite) // concat ist wie push nur gibt einen ganz neuen Array zurück.
            // damit wir immer den letzten aktuellen State updaten benötigen wir die function und wenden concat auf den prevUserState an.
        })
    }

    function deleteFavoriteMeetupHandler(meetup_id) {
        setFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup._id !== meetup_id);
        })
    }

    function meetupIsFavoriteHandler(meetup_id) {
        return userFavorites.some(meetup => meetup._id === meetup_id);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteMeetupHandler,
        deleteFavorite: deleteFavoriteMeetupHandler,
        meetupIsFavorite: meetupIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext