// useContext() => React Hook that allows you to share values 
//                  between multiple levels of components
//                  without passing props through each level.

// Provider Component 

// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//     <MyContext.Provider>

// Consumer component 
// 1. import React, {useState} from 'react';
// 2. import {MyContext} from './componentA';
// 3. const value = useContext(MyContext);


import ComponentA from './ComponentA'

function App() {
    return(
    <>
        <ComponentA></ComponentA>
    </>
    )
}

export default App