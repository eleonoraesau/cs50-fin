import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';


function Navbar() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
    <MDBContainer fluid>
      <nav aria-label='breadcrumb'>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
          <Link to="/">Home</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
          <Link to="/quiz" className="quiz">Start the Quiz</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active aria-current='page'>
            <Link to="/results"className="results" >See your results</Link>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </nav>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Navbar;
