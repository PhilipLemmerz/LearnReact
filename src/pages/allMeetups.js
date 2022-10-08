import MeetUpList from "../components/all-meetups/meetups-list";
import { useState, useEffect } from "react";

const dummy_Meetups = [
    {
        _id: '1',
        location: 'Berlin',
        title: 'Berlin Meeting',
    },
    {
        _id: '2',
        location: 'Munich',
        title: 'Munich Meeting',
    },
    {
        _id: '3',
        location: 'Frankfurt',
        title: 'Frankfurt Meeting',
    }
]

function AllMeetups() {
    const [loading, setLoading] = useState(true);
    const [loadedMeetups, setMeetups] = useState([])
    // Fake API Call -> Timeout nicht notwendig -> hier nur um den req zu imitieren.
    // useEffect() bildet die Angular LifeCycleHooks nach -> als erstes argument benötigt useEffect() die Funktion die ausgeführt werden soll (hier laden der Daten)
    // als zweites Argument benötigt useEffect einen Array -> ist diese leer, dann wir die Funktion nur beim ersten rendern der Component ausgeführt.
    // in diesem Fall wird die Component ja zwei mal gerender -> erstmals wenn gibt Sie loading zurück, dann ändert sich der Wert von loading die Component wird neu gerendert und
    // gibt die Meetups zurück.
    // würden wir anstelle des leeren Array z.B loading als zweites useEffect() Argument eingeben würde die Funktion immer dann ausgeführt wenn sich loading ändert.
    // Wenn wir external Depandancies in der Funktion haben müssen diese in den Array also eigentlich in diesem Fall auch [loadedMeetups, setLoading]
    // useState Depandacies bilden aber eine Ausnahme
    useEffect(() => {
        setLoading(true)
        // fetch('url').then(res => {           
        //         return res.json()
        // }).then(meetups => {
        //     setMeetups(dummy_Meetups);
        //     setLoading(false);
        // });
        setTimeout(() => {  // Das ist nur eine Dummy Funktion -> normalerweise würden wir die Meetups über die auskommentierte fetch() Funktion laden
            setMeetups(dummy_Meetups);
            setLoading(false);
        }, 500)
    }, []);


    if (loading) {
        return (
            <section> <p> Loading ... </p></section>
        )
    }

    return <div>
        <h1> All of our Meetings</h1>
        <MeetUpList meetups={loadedMeetups} />
    </div>
}

export default AllMeetups