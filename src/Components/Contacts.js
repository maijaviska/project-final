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
                    <div id="map"><iframe title="PurrfectBean adress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.184186263637!2d24.231729517443846!3d56.96277740000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecdd39e04be73%3A0x13ba320cf2922b7d!2sSergeja%20Eizen%C5%A1teina%20iela%2065%2C%20Vidzemes%20priek%C5%A1pils%C4%93ta%2C%20R%C4%ABga%2C%20LV-1079!5e0!3m2!1sen!2slv!4v1647257840886!5m2!1sen!2slv" width="390" height="300" style={{border:0}} allowFullScreen="" loading="lazy"></iframe></div>
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