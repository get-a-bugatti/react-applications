
import React, { useState, createContext } from 'react';
import ComponentB from "./ComponentB";

export const LevelContext = createContext();

function ComponentA() {

    const [user, setUser] = useState('Kenny');
    

    return(
        <div className="box">
            <h2>Component A</h2>
            <p>Username : {user}</p>
            <LevelContext.Provider value={user}> 
                <ComponentB />
            </LevelContext.Provider>
        </div>
    )
}

export default ComponentA;