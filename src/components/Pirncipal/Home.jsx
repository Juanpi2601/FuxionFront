import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import logo1 from '../../assets/imagenfuxion.jpg';
import './Home.css'; 

const Home = () => {
  return (
    <Container fluid className='p-0 mt-5'>
      <Row className="vh-100 w-100 d-flex justify-content-center ">
        <section className='d-flex flex-column flex-md-row justify-content-center w-100'>
          <Col xs={12} md={5} className="px-3 order-md-1">
            <h1 className='text1'>
              <b>¡Empieza tu propio negocio online de dropshipping con bebidas naturales hoy!</b>
            </h1>
            <p className='fs-5'>
              A través de un modelo de negocio tipo franquicia, no solo aumentarás tus ingresos,
              sino que también desarrollarás habilidades clave en crecimiento personal y educación financiera. <br />
              ¡Y lo mejor de todo, sin costos adicionales! Toma el control de tu futuro, descubre nuevas oportunidades
              y haz crecer tu emprendimiento de manera fácil y rentable.
            </p>
            <div className='d-flex flex-column flex-md-row justify-content-center m-4'> 
              <Button className='me-md-4 rounded-pill px-5 py-3 mb-3 mb-md-0 fs-5 boton1' variant={null}><b>Agenda Reunión ⮕</b></Button> 
              <Button className='rounded-pill px-5 py-3 fs-5 border border-dark' variant="light"><b>Conocer Más ⮕</b></Button>
            </div>
          </Col>
          <Col xs={12} md={5} className="text-center ps-3 order-md-2">
            <img className="imgfluid" src={logo1} alt="Logo1" />
          </Col>
        </section>
      </Row>
    </Container>
  );
}

export default Home;
