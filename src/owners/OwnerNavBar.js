import React from 'react'
import { Link } from 'react-router-dom'

export default function OwnerNavBar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Owners</a>
            <form className="d-flex me-2" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link className="d-flex me-2 btn btn-primary" to="/addowner">Add New Owner</Link>
            <button type="button" className="d-flex btn btn-secondary">Filter</button>
            </div>
        </div>
    </nav>
    
  )
}
