import { Link } from "react-router-dom"

function Footer() {
    return (
        <div>

            <footer className="p-5 bg-dark text-white text-cener position-relative">
                <div className="container">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-4">
                            <p className="small">Copyright &copy; 2022 Purrfect bean</p>
                        </div>
                        <div className="col-4">
                            <Link className="nav-link" to={'/'}>
                                <img src="/Images/purrfect_bean5.png" className="mx-auto d-block" style={{ width: '5rem' }} alt="purr_bean" />
                            </Link>
                        </div>
                        <div className="col-4">
                            <p className="small">Copyright &copy; 2022 Purrfect bean</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer