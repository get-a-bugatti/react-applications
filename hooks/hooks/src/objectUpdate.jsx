import React, {useState} from 'react';

function ObjectUpdate() {

    let [car, setCar] = useState({  year: 2024,
                                    maker: "Ford",
                                    model: "Mustang"
    });


    function handleYearChange(event) {
        setCar(car => ({ ...car , year: event.target.value}));
    }

    function handleMakerChange(event) {
        setCar(car => ({ ...car , maker: event.target.value}));        
    }

    function handleModelChange(event) {
        setCar(car => ({ ...car , model: event.target.value}));
    }

    return(
    <div>
        <p>Your favorite car is {car.year} {car.maker} {car.model}.</p>

        
        <label htmlFor="car-year">Car Year : </label>
        <input type="number" name="car" id="car-year" value={car.year} onChange={handleYearChange}/>
        <br></br>
        <label htmlFor="car-maker">Car Maker : </label>
        <input type="text" name="car" id="car-maker"  value={car.maker} onChange={handleMakerChange}/>
        <br></br>
        <label htmlFor="car-model">Car Model : </label>
        <input type="text" name="car" id="car-model"  value={car.model} onChange={handleModelChange}/>
        <br></br>
    </div>
    );
}

export default ObjectUpdate;