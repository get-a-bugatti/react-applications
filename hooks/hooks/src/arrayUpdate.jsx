import React, { useState } from 'react';

function ArrayUpdate() {

    const [foods, setFood] = useState(["Apple", "Banana", "Orange"]);


    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFood(foods => [...foods, newFood]);
    }

    function handleRemoveFood(index) { // We use the index to remove foods, as they can uniquely and easily identify , and the foodNames are not very reliable.
        setFood(foods => foods.filter((_, i) => i != index));  // _ is used to just skip parameter, here first parameter is element parameter which is useless for us.
    }

    return(
        <div>
            <h2>List of Foods : </h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                    </li>)}
            </ul>

            <div className="listControl">
                <input type="text" placeholder="Enter food name" id="foodInput" />
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </div>
    );
}

export default ArrayUpdate;