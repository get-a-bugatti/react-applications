import React, {useState, useEffect} from 'react';

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `SIZE : ${width} X ${height}`;
    }, [width, height]);

    function handleWindowResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }



    return(
        <>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
        </>
    );
}

export default MyComponent;