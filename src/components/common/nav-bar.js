// import React from "react";
// import { NavLink as RouterNavLink } from "react-router-dom";
// import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap"; // Renamed to BootstrapNavbar to avoid conflict
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./loginButton";
// import LogoutButton from "./logoutButton";

// const MainNav = () => (
//   <Nav className="mr-auto">
//     <Nav.Link
//       as={RouterNavLink}
//       to="/"
//       exact
//       activeClassName="router-link-exact-active" // Fixed typo in activeClassName
//     >
//       Home
//     </Nav.Link>
//     <Nav.Link
//       as={RouterNavLink}
//       to="/profile"
//       exact
//       activeClassName="router-link-exact-active" // Fixed typo in activeClassName
//     >
//       Profile
//     </Nav.Link>
//   </Nav>
// );

// const AuthNav = () => {
//   const { isAuthenticated } = useAuth0();

//   return (
//     <Nav className="justify-content-end">
//       {isAuthenticated ? <LogoutButton /> : <LoginButton />}
//     </Nav>
//   );
// };

// const Navbar = () => { // Renamed to avoid conflict
//   return (
//     <BootstrapNavbar bg="light" expand="md">
//       <Container>
//         <BootstrapNavbar.Brand
//           as={RouterNavLink}
//           className="logo"
//           to="/"
//         >
//           <MainNav />
//         </BootstrapNavbar.Brand>
//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <AuthNav />
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>
//   );
// };

// export default Navbar; // Export the Navbar component
