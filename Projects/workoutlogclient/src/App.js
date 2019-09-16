import React, {useState, useEffect} from 'react';
import SiteBar from './home/Navbar'
import Auth from './auth/Auth'
import WorkoutIndex from './workouts/WorkoutIndex'


function App() {

const [ sessionToken, setSessionToken ] = useState('');
// We are using the useState hook to create a new state variable, sessionToken.  Because our sessionToken will change during the course of our app running (it will start empty, be given a value upon logging in, then emptied upon logout), we also use the second argument of useState, which allows us to change our sessionToken state variable.

useEffect(() => {
// We have an effect that runs once upon initial component load.  It updates our sessionToken state variable if Chrome has saved a sessionToken in localStorage.  Because we pass an empty array as a second argument, there is no change our effect is tracking to re-run later, so the effect runs only upon initial component load.

  if (localStorage.getItem('token')) {
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) =>  {

// This function takes in a token (we'll use this function later in a component that will grab the sessionToken after an API call) and saves it two places--both in our localStorage and in our state variable, sessionToken.  The localStorage is a secure place to store this data, and will persist as long as our browser is open.  The state variable allows child components to quickly access the sessionToken for use.
localStorage.setItem('token', newToken);
setSessionToken(newToken);
console.log(sessionToken);
}

const clearToken = () => {
  //This is pretty straightforward. We are resetting the state of our sessionToken to an empty string, and then we are also clearing our token from our local storage. So basically, we'll determine if a user is logged in, based on whether or not sessionToken exists in their local storage.
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  // The entire function returns the result of our ternary expression, which checks to see if our sessionToken state variable matches the token property in localStorage.  If the two match (which can only happen when they store the same sessionToken string), then the function fires off the WorkoutIndex component.  Otherwise, this function will return our Auth component so the user can attempt to grab a sessionToken through our server.  The reason the sessionToken variable can only match the token property in local storage when they both store a token is due to how we've built the clearToken function in App.js.  When there is no session token, the sessionToken state variable is reset to '', an empty string, while the localStorage is cleared, erasing our token property.  When an object has no property, it's undefined.  Therefore, the empty string stored by our sessionToken state variable is strictly unequal to the undefined token property in localStorage, and our Auth component is fired.
  return (sessionToken ===localStorage.getItem('token') ? <WorkoutIndex token ={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return (
    <div>

    <SiteBar clickLogout={clearToken} />
    {protectedViews()}
    {/*} Notice that we're calling the protectedViews function, not referencing it.  Whenever App.js has a state change and it reloads to the DOM, our protectedViews function should fire.  We use curly braces around protectedViews to allow us to write a Javascript expression (our function call in this case) that will return JSX content.*/}

    </div>
  );

 
}

export default App;
