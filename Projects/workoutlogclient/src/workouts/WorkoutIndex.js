import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';

const WorkoutIndex = (props) => {
  const [workouts, setWorkouts] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [workoutToUpdate, setWorkoutToUpdate] = useState({});

  const fetchWorkouts = () => {
    fetch('http://localhost:3000/api/log', {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
    }) .then( (res) => res.json())
      .then((logData) => {
          setWorkouts(logData)
      })
  }

  const editUpdateWorkout = (workout) => {
    setWorkoutToUpdate(workout);
    console.log(workout);
  }
  
  const updateOn = () => {
    setUpdateActive(true);
  }
  
  const updateOff = () => {
    setUpdateActive(false);
  }

  useEffect(() => {
    fetchWorkouts();
  }, [])

  return(
    <Container>
      <Row>
        <Col md="3">
          <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token}/>
        </Col>
        <Col md="9">
          <WorkoutTable workouts={workouts} editUpdateWorkout={editUpdateWorkout}
          updateOn={updateOn} fetchWorkouts={fetchWorkouts} token={props.token}/>
        </Col>
        {updateActive ? <WorkoutEdit workoutToUpdate={workoutToUpdate}
        updateOff={updateOff} token={props.token} fetchWorkouts={fetchWorkouts}/> : <></>}
      </Row>
    </Container>
  )
}

export default WorkoutIndex;

/* import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';


const WorkoutIndex = (props) => {
    const [workouts, setWorkouts] = useState([]);
    // Notice that our workouts state variable is an array, and down the line we'll fill that array with the workout objects return from our workoutlog server.

    const fetchWorkouts = () => {
    // What we are doing in fetchWorkouts is getting our workouts from our server. Note that we are including the Authorization header, and our token that was passed as a prop from above. Remember that we need our Authorization header so that the server can know who is making the requests, and understand them. Also notice that after we get back information from the server, we are saving the workout information to our state. Next, we need to actually call this function to run when our component mounts. Remember that a useEffect with an optional second argument of an empty array will call whatever callback we give the useEffect function only once--as the component initially loads.  This is perfect for what we're trying to do--we want to load our workouts from the fetchWorkouts function automatically, and 1 time, as the component loads to the DOM. 
            fetch('http://localhost:3000/api/log/', {
              method: 'GET',
              headers: new Headers ({
                  'Content-Type': 'application/json',
                  'Authorization': props.token
              })
            }) .then( (res) => res.json())
              .then((logData) => {
                  setWorkouts(logData)
              })
          }
        
          useEffect(() => {
            fetchWorkouts();
          }, [])
        
          return(
            <Container>
              <Row>
                <Col md="3">
                  <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token}/>
                </Col>
                <Col md="9">
                  <h2>Log a workout to see a table.  This will be added in later pages.</h2>
                </Col>
              </Row>
            </Container>
          )
        }
        
        export default WorkoutIndex;
        */