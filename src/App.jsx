import { useState,useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {
  let [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  
  }),([])
 


  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Your Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Your Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Change Your Address
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Account
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/online-shopping-banner-design-template-mega-sale_556845-411.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vector-premium/diseno-banner-vector-venta-compras-linea-texto-compras-linea-aplicacion-movil_572288-2004.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <Container>
        <h1>
            Products <Badge bg="danger">New</Badge>
          </h1>
    <Row>
        {products.map((product, index)=>{

        return(
        <Col xs = {12} sm = {6} md = {4} lg = {3}>
        <Card className='mb-4'>
      <Card.Img style={{height:"200px",objectFit:"contain",padding:"10px"}} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title style={{maxHeight:"20px",overflow:'hidden'}}>{product.title}</Card.Title>
        <Card.Text style={{maxHeight:"78px",overflow:'hidden'}}>{product.description}</Card.Text>
        <Card.Text style={{maxHeight:"78px",overflow:'hidden'}}>${product.price}</Card.Text>
        <Button variant="primary">View product</Button>
        <Button variant="warning"> Buy Now</Button>
      </Card.Body>
      </Card>
     </Col>
    
    )

     })}
    </Row>
    </Container>
    
      <p>All Rights Reserved 2024</p>



          
    </>
  )
}

export default App
