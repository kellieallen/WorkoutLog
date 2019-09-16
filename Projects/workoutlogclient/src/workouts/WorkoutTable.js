import React from 'react';
import {Table, Button} from 'reactstrap';

const WorkoutTable = (props) => {

    const deleteWorkout = (workout) => {
        // Notice that our function declaration expects a workout.  This makes sense, as it needs to know which workout to make a delete request for.
        fetch(`http://localhost:3000/api/log/delete/${workout.id}`, {
            // Our endpoint URL is determined by the endpoint of our backend.  Again, take a look at your server to re-familiarize yourself with what part of our server we're talking to.
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
            // A delete request is a guarded endpoint for our server (the request has to pass through validate session before the actual delete endpoint can be accessed).  Our token is passed from App to WorkoutIndex to WorkoutTable.
        })
    })
    .then(() => props.fetchWorkouts())
    // Finally, we re-fetch all the workouts so that only workouts which haven't been deleted are displayed.
}

    const workoutMapper = () => {
        return props.workouts.map((workout, index) => { //1
          return( //2
            <tr key={index}>
              <th scope="row">{workout.id}</th>
              <td>{workout.result}</td>
              <td>{workout.description}</td>
              <td>{workout.definition}</td>
              <td>
              <Button color="warning" onClick={() => {props.editUpdateWorkout(workout); props.updateOn()}}>Update</Button>

              <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button>              </td>
            </tr>
          )
        })
      }
      
      return(
        <>
        <h3>Workout History</h3>
        <hr/>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Result</th>
              <th>Description</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            {workoutMapper()}
          </tbody>
        </Table>
        </>
      )
    }

  export default WorkoutTable;