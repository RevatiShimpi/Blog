import {Link} from 'react-router-dom';
const NotFound=()=>{
    return(
        <div className="NotFound">
            <h1>Sorry! Page cannot be found</h1>
            <Link to="/">Back to HomePage</Link>
        </div>
        
    );
}