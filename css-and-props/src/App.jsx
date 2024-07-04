
// Three ways to add CSS in react : 
//
//  1.  EXTERNAL : Just the basic way of adding CSS rules in index.css file and importing them.
//  2.  MODULE
//  3.  INLINE
//


// 1. EXTERNAL : 

// function App() {

//   return (
//     <button className="first-button-class">Click Me</button> // Keep changing classes to try different types of CSS inclusion.
//   )
// }

// export default App


// 2. MODULE

// import Button from './button/Button';
// import Styles from './button/Button.module.css';

// function App() {
//   return(
//     <Button />
//   )
// }

// export default App


//3. INLINE 

function App() {


  const styles = {
    backgroundColor: "skyblue",
    padding: "10px",
    color: "white",
    borderRadius: "10px",
    border: "none"
  }

  return(

    <button style={styles}>Click Me</button> // Don't put value in className, but in ```styles``` attribute 
  )
}

export default App;


