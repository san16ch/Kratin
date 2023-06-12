import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function header(){
    return(
    <div>
        <nav className="navbar navbar-expand-lg bg-primary" >
        <a className="navbar-brand" href="#" style={{ fontSize: '30px', color: 'black' }}>Easy Life After 65</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/" style={{ fontSize: '20px', color: 'black' }}>Home</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/medlist" style={{ fontSize: '20px', color: 'black' }}>Medicine List</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/equip" style={{ fontSize: '20px', color: 'black' }}>Health Monitoring Equipments</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/healthdata" style={{ fontSize: '20px', color: 'black' }}>My Health Data</a>
            </li>
            </ul>
        </div>
        </nav>
            <div className="container">
            {/* <h1>Welcome to My React App</h1>
            <p>This is a simple React page with a Bootstrap navbar.</p> */}
            </div>
    </div>
    );
}
export default header;