import React from 'react'
import Header from '../components/Header'
import OurWriters from '../components/OurWriters'
import Footer from '../components/Footer'
import ScrollableBox from '../components/TextInfo'
// import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import Reviews2 from '../components/Reviews2'
// import AuthContext from '../contexts/AuthContexts'

export default function Home() {
  // const currentUser = useContext(AuthContext);
  return (
    <div>
        <Header/>
        <OurWriters/>
        <Reviews2/>
        <FAQ/>
        <ScrollableBox/>
        <Footer/>
        </div>
  )
}
