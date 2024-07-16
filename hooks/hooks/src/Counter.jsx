
// TASK - 1

// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

// in onClick , if you add a set of parantheses after a callback even if just to add a parameter, you will invoke the function
// without even having clicked on the button.


// TASK - 2

//updater function = A function passed as an argument to the setState() usually,
//                   ex. setYear(y => y + 1) :: arrow function
//                   

// Allows for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions, wherever and whenever possible.

import React, {useState} from 'react';

function Count() {
    
    let [count, setCount] = useState(0);

    const incrementBy3 = () => {
        // setCount(count + 1); // count = 0 : setCount(0 + 1);
        // setCount(count + 1); // count = 0 : setCount(0 + 1); HERE ALSO count = 0 , because the browser has not updated the state yet.
        // setCount(count + 1);// count = 0 : setCount(0 + 1); SAME count = 0

        // UPDATE , maybe the browser updates the state here. thats why u need to use updater functions.

        setCount(prevCount => prevCount + 1); //UPDATE
        setCount(prevCount => prevCount + 1); // UPDATE
        setCount(prevCount => prevCount + 1); //UPDATE
        // and this would update after every setState() function.
    }

    const decrementBy3 = () => {
        setCount(prevCount => prevCount - 1); //UPDATE
        setCount(prevCount => prevCount - 1); // UPDATE
        setCount(prevCount => prevCount - 1); //UPDATE
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <>
        <h2 className='main-count'>{count}</h2>
        <div className='buttons'>
            <button onClick={incrementBy3}>Increment By 3</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrementBy3}>Decrement By 3</button>
        </div>
        </>
    )
}

export default Count;