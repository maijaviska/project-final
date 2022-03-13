

function Contacts() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="titles">Contacts</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    
                    <div id="map"></div>
                </div>
                <div className="col-8">
                    <h4>Address</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="fw-bold lead">Purrfect Bean</span>
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Street:</span> Eizensteina, bld. 65
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">City:</span> Riga
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Email:</span> info@purrfectbean.lv
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Phone number:</span> +371(67)53-90-65
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Country:</span> Latvia
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contacts