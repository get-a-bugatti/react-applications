import { useState } from 'react';

function CarObjects() {

    const [cars, setCar] = useState([]);
    const [carYear, setCarYear] = useState();
    const [carMaker, setCarMaker] = useState('');
    const [carModel, setCarModel] = useState('');


    function handleAddCar() {
        const newCar = {year: carYear, maker: carMaker, model: carModel};

        setCar(c => [...c, newCar]);


        setCarYear(new Date().getFullYear());
        setCarMaker('');
        setCarModel('');
        

    }

    function handleRemoveCar(index) {
        setCar(
            cars.filter(
                (_,i) => i != index
                )
            );
    }

    function handleCarYear(event) {
        setCarYear(event.target.value);
    }

    function handleCarMaker(event) {
        setCarMaker(event.target.value);
    }

    function handleCarModel(event) {
        setCarModel(event.target.value);
    }
    
    return(
        <div>
            <h2>List of Car Objects :</h2>
            <ul>
                {
                    cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.maker} {car.model}</li>)
                }
            </ul>

            <input type="number" id="carYear" placeholder='Enter car year' value={carYear} onChange={handleCarYear}/>
            <br></br>

            <input type="text" id="carMaker" placeholder='Enter car maker' value={carMaker} onChange={handleCarMaker}/>
            <br></br>

            <input type="text" id="carModel" placeholder='Enter car model' value={carModel} onChange={handleCarModel}/>
            <br></br>

            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default CarObjects;