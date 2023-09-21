import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-lg">
            <h5>Ooops!!!</h5>
            <Link to={'/'}><button className="btn btn-primary">Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;