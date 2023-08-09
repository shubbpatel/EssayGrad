import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CalculatePrice from "./CalculatePrice";
import { faCheckCircle, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCogs, faRocket } from "@fortawesome/free-solid-svg-icons";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { LinkContainer } from "react-router-bootstrap";
import { CheckOutlined, CloseCircleOutlined, DollarOutlined, StopOutlined, UserOutlined } from "@ant-design/icons";
// import PriceCalculator from "./CalculatePrice2";
// import { useNavigate } from "react-router-dom";

const Banner = () => {
  // const auth = getAuth();
  // const navigate = useNavigate();
 
//   const signOutUser = () => {
//     signOut(auth).then(() => {
//       // setMyUser(null);
//       navigate('/signup'); // assuming '/login' is your login page route
//     }).catch((error) => {
// console.log(error);    });
//   }

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);  
  
  return (
    <div className=" p-sm-5 ourbg ">
      <Container fluid className="ourbg p-4">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="display-5 fw-bolder">
             <b> 
              Stop worrying about your Assignment anymore! 
              {/* <span style={{color:'blue'}}>{currentUser?currentUser.displayName:''}</span> */}
              </b>
            </h2>
            <p className="lead fs-6 mt-4 fw-bold">
              Take a Chill ! and Enjoy your College time with your mates & Let
              our Experience educators do your Assignment
            </p>

            <h5
              // className={`fw-bold ${bounce ? "bounce" : ""} mt-3 mb-3 pt-1 pb-1 `}
              className={`fw-bold bounce mt-3 mb-3 pt-1 pb-1 `}
            >
              Essay writing starting at just $10 per page
            </h5>
            <LinkContainer to='/order'>
            <Button 
            // onClick={signOutUser}
             className=" btn-lg btn-primary fw-bold mt-3">
              Write My Assignment
            </Button>
            </LinkContainer>
            
            <div>
              <Row className="mt-5 mb-sm-4">
                <Col md={6} className=" fs-sm-5 fs-6">
                  {/* <span className="bullet">s</span> */}
                  <div className="d-flex align-items-end">    <DollarOutlined style={{fontSize:'22px', color:'green', marginRight:'5px'}}/>  <span><b>Affordable </b> Prices{" "}</span>
</div>
                </Col>
                <Col md={6} className=" fs-sm-5 fs-6 ">
                  {/* <span className="bullet">s</span> */}
                  <div className="d-flex align-items-end">
                  <StopOutlined style={{fontSize:'22px',color:'red', marginRight:'5px'}}/> <span><b> 0%</b> Plagiarism{" "}</span>
                  </div>
                
                </Col>
              </Row>
              <Row>
                <Col md={6} className="fs-sm-5 fs-6">
                  {/* <span className="bullet">s</span> */}
<div className="d-flex align-items-end"><UserOutlined style={{fontSize:'22px',marginRight:'5px'}}/> <span><b>Full</b> Anonymity</span></div>
                  
                </Col>
                <Col md={6} className="fs-sm-5 fs-6">
                  {/* <span className="bullet">s</span> */}

                 <div> <CheckOutlined style={{fontSize:'22px', color:'green'}} /><span> <b>Negotiable</b> Price</span> </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center mt-4"
          >
            {/* <img
              src="https://www.dropbox.com/s/0drcew6775bmfn1/pexels-wilson-vitorino-2167672-2.jpg?dl=1"
              alt="Banner"
              className="img-thumbnail rounded-3 w-50 h-auto "
            /> */}
            <div
              style={{
                width: "100vw",
                height: "100vh",
                maxWidth: "500px",
                maxHeight: "500px",
                // background: "#CED2FB",
                background: "#8d95f0",
                // borderRadius: "25%",
              }}
              className="d-flex justify-content-center align-items-center rounded-5"
            >
              <CalculatePrice />
              {/* <PriceCalculator/> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
