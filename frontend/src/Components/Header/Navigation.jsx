import {Link} from 'react-router-dom';
import {Navbar} from 'reactstrap';

const Navigation = () => {

    return(
        <>  
            <Navbar color="secondary" light expand ="md">
            <a className="navbar-brand" href="/">To-Do List</a>
            <Link to="/" className="btn btn-outline-light">Home</Link>
            <Link to="/about" className="btn btn-outline-light">About</Link>
            <a href="https://github.com/leightonmanningQA" className="btn btn-outline-light">Github</a>
            </Navbar>
        </>
    )

}
export default Navigation;