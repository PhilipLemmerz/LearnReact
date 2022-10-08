import Card from "../components/Layout/card";
import Form from "../components/form/form";
import { useNavigate } from "react-router-dom";

function NewMeetUp() {
    // Navigate -> ist für programmatische navigation in react
    const navigate = useNavigate();
    // http Requests werden in react mit der Fetch API gesendet oder Axios zum Beispiel als third-party package
    function postNewMeetup(meetUpData) {
        console.log(meetUpData);
        fetch('url', { method: 'POST', body: JSON.stringify(meetUpData), headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                navigate('/')
            })
    }

    return (
        <Card>
            <div >
                <h1> Create a new Meet up</h1>
                <Form addNewMeetUp={postNewMeetup} />
            </div>
        </Card>

    )
}

export default NewMeetUp