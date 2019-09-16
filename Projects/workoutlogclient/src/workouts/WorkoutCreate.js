import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props) => {
    const [description, setDescription] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        // Notice that our function takes an event.  Because the handleSubmit function will be triggered as the form data is submitted, we need to grab the event only to prevent the default page reload action.
        e.preventDefault();
        fetch('http://localhost:3000/api/log/create', {
            // Our fetch endpoint is defined according to what we've already built out in our workoutlog-server.  Check your server to find where we're connecting.
            method: 'POST',
            body: JSON.stringify({log: {description: description, definition: definition, result: result}}),
            // Notice that we package our description, definition, and result into an object within the body of our post.  Without packaging these exact pieces of data, we would see errors from our server when we try to post a new workout.  The server expects to find description, definition, and result properties within our request body, so we must provide them.
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
                // Given that this is a guarded route, we need to provide our session token
            })
        }) .then((res) => res.json())
        .then((logData) => { // Our .then method catches the json-ified data, then console.logs it so we can verify the success of our post
            console.log(logData);
            setDescription(''); //We reset all the state variables so the user can input a fresh workout to be posted.
            setDefinition(''); // We reset all the state variables so the user can input a fresh workout to be posted.
            setResult(''); // We reset all the state variables so the user can input a fresh workout to be posted.
            props.fetchWorkouts();
        })
    }

    return(
        <>
        <h3>Log a Workout</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="description"/>
                <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            {/*The value of the input fields is defined by the state of this component.  Hence, without a way to change our state, the input values are locked.  That will change later in this page.*/}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="definition"/>
                <Input type="select" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)}>
                    <option value="Time">Time</option>
                    <option value="Weight">Weight</option>
                    <option value="Distance">Distance</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="result"/>
                <Input name="result" value={result} onChange={(e) => setResult(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
            {/* We have a submit button, but there's no submit handler.  This button will cause a page refresh right now, but it's otherwise non-functional.  That too will change later in the page.*/}
        </Form>
        </>
    )
}

export default WorkoutCreate;