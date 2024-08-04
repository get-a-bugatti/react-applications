import { useContext } from 'react'
import { LevelContext } from './ComponentA';

function ComponentD() {

    const user = useContext(LevelContext);

    return(
        <div className="box">
            <h2>Component D</h2>
            <p>The user is : {user} </p>
        </div>
    )
}

export default ComponentD;