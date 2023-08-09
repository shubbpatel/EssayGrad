import { CheckCircleOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container, Dropdown, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import services from "../constants/Services";

const MyNavbar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        navigate("/login"); // assuming '/login' is your login page route
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Navbar expand="lg" className="navC bxnav">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              {/* <img
            src={logo}
            // width="100"
            // height="auto"
            className="align-top rounded-2 w-25"
            alt="Logo"
            /> */}
              <h4 className="text-dark d-flex justify-content-end align-items-center fw-bolder rounded-pill">
                <CheckCircleOutlined
                  style={{ color: "green", marginRight: "6px" }}
                />
                Essay<span className="text-primary fs-3">Grad</span>
              </h4>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="mr-auto">
            <NavDropdown title="Services" id="basic-nav-dropdown" className="" style={{fontSize:'15px', color:'black',fontWeight:'bold'}}>
              {
                services.map((service,index) => (
                  <NavDropdown.Item key={index} href={service.url} className="navitemHover" style={{background:'#f8f7fc', fontSize:'15px'}}>{service.serviceName}</NavDropdown.Item>
                ))
              }
              
             
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>


              {/* <LinkContainer to="/services">
                <Nav.Link className="black-link">Services</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/how-it-works">
                <Nav.Link className="black-link">How It Works</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/writers">
                <Nav.Link className="black-link">Writers</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/writing-help">
                <Nav.Link className="black-link">Writing Help</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="black-link">About Us</Nav.Link>
              </LinkContainer>
            </Nav>
            {currentUser ? (
              <>
                <div className="d-sm-none" id="outCollapse">
                  <Button
                    onClick={signOutUser}
                    variant="primary"
                    className="mr-2"
                  >
                    {" "}
                    <b>Log Out</b>
                  </Button>
                  <div>
                    <Link
                      onClick={() => {
                        alert(
                          `Hey! ${currentUser.displayName} Thanks for Signing Up`
                        );
                      }}
                      className="m-2"
                    >
                      {" "}
                      <img
                        src={currentUser.photoURL}
                        className="rounded-circle"
                        alt="user"
                        style={{ width: "100vw", maxWidth: "40px" }}
                      />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="d-sm-none" id="outCollapse">
                  <LinkContainer to="/login">
                    <Button variant="outline-dark">
                      {" "}
                      <b>Login</b>
                    </Button>
                  </LinkContainer>
                  <LinkContainer to="/signup" className="m-2">
                    <Button variant="primary">
                      <b> Sign Up</b>
                    </Button>
                  </LinkContainer>
                </div>
              </>
            )}
          </Navbar.Collapse>
          {currentUser ? (
            <>
              <div className="ml-auto d-none d-sm-block" id="outCollapse">
                {/* <LinkContainer  className="m-2"> */}
                <Button
                  onClick={signOutUser}
                  variant="primary"
                  className="mr-2"
                >
                  {" "}
                  <b>Log Out</b>
                </Button>
                {/* </LinkContainer> */}
                <Link
                  onClick={() => {
                    alert(
                      `Hey! ${currentUser.displayName} Thanks for Signing Up`
                    );
                  }}
                  className="m-2"
                >
                  <img
                    src={currentUser.photoURL}
                    className="rounded-circle"
                    alt="user"
                    style={{ width: "100vw", maxWidth: "40px" }}
                  />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="ml-auto d-none d-sm-block" id="outCollapse">
                <LinkContainer to="/login" className="m-2">
                  <Button variant="outline-dark" className="mr-2">
                    {" "}
                    <b>Login</b>
                  </Button>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Button variant="primary">
                    <b> Sign Up</b>
                  </Button>
                </LinkContainer>
              </div>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
