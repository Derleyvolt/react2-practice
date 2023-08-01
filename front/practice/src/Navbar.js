
import { Outlet } from "react-router-dom";

// TEST 

function Navbar() {
    return (
        <div className='h-100'>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-2">
                    <a className="navbar-brand pr-10" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Produtos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Disabled</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <a className="nav-link me-3" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Outlet/>
        </div>
    );
}


export default Navbar;