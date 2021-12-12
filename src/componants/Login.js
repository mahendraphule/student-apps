import { Link } from 'react-router-dom';
import Nav from "./Nav"

export default function Login() {
    return (

        <div>
            <Nav />
            <div className="row">
                <div className="col-md-4">
                    <img style={{ objectFit: "cover", height: "100vh", padding: "0%" }} className="img-fluid mt-3"
                        src="image/student1.jpg" alt="students" />
                </div>

                <div className="col-md-8 d-flex justify-content-center align-items-center mt-3">
                    <form>
                        <h4>Sign In</h4>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className=" col-12 d-grid mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-12">
                        <a className="dropdown-item" href="#">Forgot password?</a>
                        </div >
                        <div >
                            <Link to="/profile" className="btn btn-link btn-sm">Register</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}