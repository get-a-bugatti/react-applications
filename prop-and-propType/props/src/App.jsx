import Student from './Student';
import PropTypes from 'prop-types';

function App() {

  return(
    <>
    <Student name="Kenny" age={18} isStudent={true}/>
    <Student name="Someone" age={69} isStudent={false}/>
    <Student name="Whatever" age={56} isStudent={false}/>
    <Student />
    </>
  )
}

export default App
