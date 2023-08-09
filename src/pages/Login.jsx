import { CheckCircleOutlined, GoogleCircleFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaApple, FaEyeSlash, FaEye } from "react-icons/fa";
import girl from "../assests/book-girl.jpg";
import app from "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  getRedirectResult,
  signInWithRedirect,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [myUser, setMyUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const auth = getAuth();
  auth.languageCode = "it";

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setMyUser(user);
        navigate("/");
      } else {
        setMyUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setMyUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // redirectlogin();

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Error Code:", errorCode);
        console.error("Error Message:", errorMessage);
        // ...
      });
  };
  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error Code:", errorCode);
        console.error("Error Message:", errorMessage);
      });
  };

  return (
    <div className="bg-secondary min-vh-100 d-flex justify-content-center align-items-center">
      <Container
        style={{ maxWidth: "800px", width: "95vw" }}
        className="bg-light pt-4 p-sm-5  rounded-sm-5 rounded-4 shadow-lg text-dark"
      >
        <Row>
          <Col md={6}>
            <Link to="/" className="text-decoration-none">
              <h4 className="text-dark d-flex justify-content-center align-items-center fw-bolder mb-3 ">
                <CheckCircleOutlined
                  style={{
                    color: "green",
                    marginRight: "6px",
                    // borderBottom: "1px solid black",
                  }}
                />
                Essay<span className="text-primary fs-3">Grad</span>
              </h4>{" "}
            </Link>
            <Form onSubmit={Login}>
              <Form.Group controlId="formBasicEmail" className="mb-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mb-3 mt-3 w-100"
              >
                Log in
              </Button>
            </Form>
            <div className="text-center my-3">
              <p>Or Log in with</p>
              <Button
                variant="outline-dark"
                className="mx-2"
                onClick={googleLogin}
              >
                <FcGoogle size={25} />
              </Button>
              <Button variant="outline-dark" className="mx-2">
                <FaFacebookSquare className="text-primary" size={25} />
              </Button>
              <Button variant="outline-dark" className="mx-2">
                <FaApple size={25} />
              </Button>
            </div>
          </Col>
          <Col
            md={6}
            className="d-none d-md-block d-md-flex align-items-center justify-content-center"
          >
            <img
              src={girl}
              alt="Banner"
              className="img-thumbnail rounded-3 w-100 h-auto m-auto"
            />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
