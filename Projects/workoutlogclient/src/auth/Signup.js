import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState(''); //Note that we've added username and password to our state.  These state variables will allow us to respond to and control the display of the user-typed information into the input fields in our form we return from this component.  
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault(); // creating an event and preventing page from reloading upon submit button
    fetch('http://localhost:3000/api/user', { // We're sending a fetch request to the endpoint determined in our server, that is where we go to signup. Note that this endpoint is determined by whatever backend you're using. In your own server backend, it's declared in your 'apicontroller' controller.
    method: 'POST',
    body: JSON.stringify({user:{username: username, password, password}}), // We're including a body with our state information set as user. This again correlates to the backend. If your server is expecting information in this format: req.body.user.username and req.body.user.password, then the above will work. When making future applications this is what has to match what the backend is expecting. If the backend is expecting req.body.user.username and req.body.user.password and I send it req.body.spongebob.pineapple, it doesn't know how to handle that information.
    headers: new Headers({
        'Content-Type': 'application/json' // We're including the header Content-Type set to application/json. This lets our server know what type of information we are sending to it, so it can decide if it can handle it and what to do with it.
    })

    }).then(
        (response) => response.json() // We're resolving the promise from fetch and calling .json(), allowing us to turn the response into JSON when it resolves.
    ).then((data) => {
        props.updateToken(data.sessionToken) // We're resolving the .json() promise, and taking the data we get back from the server and then calling our updateToken function with the sessionToken we get back in the data object.
    })
}

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}> {/* Just like with our 'onChange' event handler built into the JSX, we are using an 'onSubmit' event handler in our Form bootstrap component.  The onSubmit handler will listen to and respond to a 'submit' even with our handleSubmit callback.  Notice again, that we don't use parentheses within the curly braces, because we aren't calling the callback functions ourselves--that's handled by the onSubmit handler.*/}
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
    {/* We have defined two functions in-line with our JSX.  Each of these functions is a callback responding to the onChange event listener we've inserted into the input fields.  Just as with vanilla JS we saw in gold badge, these callback functions are called by the event handler, not by us.  Thus, we never have to call these functions in our code, just defined them.  These callback functions, being called within the onChange event handlers, are called with an 'event' object as an argument.  This is default behavior to any event handler.  Digging into these event objects let us grab hold of the input data the user has typed.*/}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;