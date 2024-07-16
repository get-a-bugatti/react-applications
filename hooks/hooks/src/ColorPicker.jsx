import React, {useState} from 'react';

function ColorPicker() {

    let [color, setColor] = useState('#FFFFFF');

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div className='color-picker-container'>
            <h2>Color Picker</h2>
            <div className="color-box" style={{backgroundColor: color}}>
                Selected Color : {color}
            </div>

            <label className="option-box">
                Pick a backGround color : <br></br>
                <input type="color" name="color" id="color" value={color} onChange={handleColorChange}/>
            </label>            
        </div>
    );
}

export default ColorPicker;