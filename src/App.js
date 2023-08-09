import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Writers from './pages/Writers';
import Signup from './pages/SignUp';
import AuthContext from './contexts/AuthContexts';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import OrderPage from './pages/Order';
import TermOfServices from './pages/TermOfServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import CancellationRefund from './pages/CancellationRefund';
import EssayService from './pages/EssayService';
import OrderPage from './pages/Order';
import WriterProfilePage from './pages/WriterProfilePage';
function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <>
    <BrowserRouter>
    <AuthContext.Provider value={currentUser}>
      <Routes>

    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />
    <Route exact path="/contact-us" element={<Contact/>} />
    <Route exact path="/cancellation" element={<CancellationRefund/>} />
    <Route exact path="/terms-of-service" element={<TermOfServices/>} />
    <Route exact path="/how-it-works" element={<HowItWorks/>} />
    <Route exact path="/writers" element={<Writers/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/order" element={<OrderPage/>} />
    <Route exact path="/essay-services" element={<EssayService/>} />
    <Route exact path="/writer-profile" element={<WriterProfilePage/>} />
    </Routes>

    </AuthContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
