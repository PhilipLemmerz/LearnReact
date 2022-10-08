import classes from './form.module.css';
import { useRef } from 'react'; // gibt zugriff aud die input values

function Form(props) {
    const titleInputRef = useRef();
    const locationInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const titleInput = titleInputRef.current.value;
        const locationInput = locationInputRef.current.value;

        const newMeetUp = {
            title: titleInput,
            location: locationInput
        }

        props.addNewMeetUp(newMeetUp)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.formGroup}>
                <label htmlFor="title"> Titel</label>
                <input className={classes.input} ref={titleInputRef} type="text" required id="title" />
            </div>
            <div className={classes.formGroup}>
                <label htmlFor="location"> Location</label>
                <input className={classes.input} ref={locationInputRef} type="text" required id="location" />
            </div>
            <button className={classes.btnSubmit}> speichern </button>
        </form>
    )
}

export default Form
