import MeetUpItem from "./meetup-item";
import classes from "./all-meetups.module.css";

function MeetUpList(props) {
    return (
        <div className={classes.meetUpBox}>
            {props.meetups.map((meetup) => {
                // ngFor Pandon von react
                // wichtig jedes element benötigt einen key zur identifikation.
                return <MeetUpItem key={meetup._id} meetupProp={meetup} />
            })}
        </div>
    )
}


export default MeetUpList