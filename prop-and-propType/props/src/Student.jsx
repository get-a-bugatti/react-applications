// props : read-only properties that can be shared between components, can only be passed from a parent component to a child component
//          They amplify the application of reusability of components by letting us pass different values for same component.


// propTypes : a defensive mechanism to ensure that the passed value is of correct dataType.
//      age: PropTypes.number

// defaultProp : default values for a prop in case they are not passed from the parent Component.
//      name: "Guest"




import PropTypes from 'prop-types';

function Student(props) {
    return(
        <>
            <div className="student-details">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>isStudent: {props.isStudent ? "Yes" : "No" }</p>
            </div>
        </>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Sexy",
    age: 12,
    isStudent: false
}

export default Student