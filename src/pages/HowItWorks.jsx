import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'
import ScrollableBox from '../components/TextInfo'
import FAQ from '../components/FAQ'
import { Col, Container, Row } from 'react-bootstrap'

export default function HowItWorks() {
  return (
    <div>
      <MyNavbar/>
      <section className='footerbg'>
       <Container>
        <Row>
          <Col>
          <h1>hey YO</h1>
          </Col>
          <Col><img src="" alt="" /></Col>
        </Row>
       </Container>

      </section>
      <section className=''>
       <Container>
        <Row>
          <Col><h1>ab</h1></Col>
          <Col>cd</Col>
        </Row>
       </Container>

      </section>
      <section className='footerbg'>
       <Container>
        <Row>
          <Col><h1>ab</h1></Col>
          <Col>cd</Col>
        </Row>
       </Container>

      </section>
      <section className=''>
       <Container>
        <Row>
          <Col><h1>ab</h1></Col>
          <Col>cd</Col>
        </Row>
       </Container>

      </section>
      
      <section>
        <FAQ/>
      </section>
      <section>
        <ScrollableBox/>
      </section>
      <Footer/>
    </div>
  )
}
