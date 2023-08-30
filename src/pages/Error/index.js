import { Link } from 'react-router-dom';
import './error.css';
import '../styles.css';

function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <br/>
            <p><strong>Page Not Found!</strong></p>
            <Link to="/">Go back home.</Link>
        </div>
    )
    
}

export default Error;