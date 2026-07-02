import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("user");

        navigate("/login");

    };

    return (

        <nav className="navbar">

            <h2>AuditNode</h2>

            <div className="links">

                <Link to="/">Home</Link>

                <Link to="/jobs">Jobs</Link>

                <Link to="/create-job">Create Job</Link>

                <Link to="/applications">Applications</Link>

                {
                    user ? (

                        <>

                            <Link to="/dashboard">Dashboard</Link>

                            <button onClick={logout}>
                                Logout
                            </button>

                        </>

                    ) : (

                        <>

                            <Link to="/login">Login</Link>

                            <Link to="/register">Register</Link>

                        </>

                    )

                }

            </div>

        </nav>

    );

}

export default Navbar;