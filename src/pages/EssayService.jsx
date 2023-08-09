import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'
import ServicePage from './ServicesPage'
import writers from '../constants/writers';
import girlimg from "../assests/book-girl.jpg";
import essaybanner from '../assests/Untitled 2.jpg'


export default function EssayService() {
const essayObj = {
    title:'We write Most Powerful Essays',
    btnText:'Write My Essay',
    writerTitle:'Top Writers For Essay Writing',
    imgUrl:essaybanner,
}

  return (
    <div>
        <ServicePage Obj={essayObj} writers={writers}/>
    </div>
  )
}
