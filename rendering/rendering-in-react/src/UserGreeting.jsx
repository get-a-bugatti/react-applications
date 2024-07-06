import PropTypes from 'prop-types';


function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username} !!</h2>;
    const loginAlert = <h2 className="login-alert">Please Log In First .</h2>;

    return props.isLoggedIn ? welcomeMessage : loginAlert; 
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;