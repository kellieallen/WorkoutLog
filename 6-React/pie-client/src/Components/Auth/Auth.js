import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {

    let[login, setLogin ] = useState(false);
    let[ firstName, setFirstName ]= useState(''); // firstName is variable, setFirstName is method to update that variable
    let[ lastName, setLastName] = useState('');
    let[ email, setEmail] = useState('');
    let[ password, setPassword] = useState('');




    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login) // whatever value of login is now, set it to the opposite
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    return (
        <form className="card-like">
            <h1>Sign In</h1>
            <label className="display-block" htmlFor="email">Email</label>
            <input className="display-block" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="display-block" htmlFor="password">Password</label>
            <input className="display-block" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

{ 
    login ? null: 
    <React.Fragment>
            <label className="display-block" htmlFor="firstName">First Name</label>
            <input className="display-block" type="text" name="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label className="display-block" htmlFor="lastName">Last Name</label>
            <input className="display-block" type="text" name="last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    </React.Fragment>
}

            <br></br>
            <button onClick= {(e) => changeLogin(e)}>Login/SignUp</button>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Auth;