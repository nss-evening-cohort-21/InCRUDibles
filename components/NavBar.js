/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <Navbar expand="lg" id="navbar">
      <Container fluid>
        <Image src={logo} alt="PinTwist Logo" width={100} height={50} />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <NavDropdown title="Create" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pin/new">Create Pin</NavDropdown.Item>
              <NavDropdown.Item href="/board/new">
                Create Board
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBar className="d-flex" />
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//       <div className="container-fluid" id="navbar">
//         <Link passHref href="/">
//           <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
//             PinTwist
//           </a>
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//           <ul className="navbar-nav me-auto">
//             <li className="nav-item">
//               <Link passHref href="/">
//                 <a className="nav-link">
//                   Home
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link passHref href="/pin/new">
//                 <a className="nav-link">
//                   Create Pin
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link passHref href="/community">
//                 <a className="nav-link">
//                   Community
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link passHref href="/profile">
//                 <a className="nav-link">
//                   Profile
//                 </a>
//               </Link>
//             </li>
//             {/* COMMENT OUT BELOW AFTER TESTING BOARD FORMS  */}
//             <li className="nav-item">
//               <Link passHref href="/board/new">
//                 <a className="nav-link">
//                   New Board
//                 </a>
//               </Link>
//             </li>
//             <SearchBar />
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
