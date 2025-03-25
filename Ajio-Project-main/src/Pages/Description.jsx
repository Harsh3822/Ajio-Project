import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Nav, Row, Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import '../Styles/Description.css'
import Footer from '../Components/Footer'

const Description = () => {
  const [data, setdata] = useState([])
  const { id } = useParams()
  const [desdata, setdesdata] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/men/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(` http://localhost:3000/men-shirts/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(` http://localhost:3000/men-pants/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/men-tshirt/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/women/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/women-kurtas/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/women-tshirt/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/women-sarees/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/kids/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/kids-tops/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/kids-bag/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/kids-jacket/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/face-wash/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/perfumes/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/beauty/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/shampoo/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/home-kitchen/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/wall-decor/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/photo-frames/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

    axios.get(`http://localhost:3000/kitchen/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className="description-page">
      <Container className="product-page-container m-auto">
        <Row className="mt-4">
          <Col xs={12} md={10} lg={8} className="d-flex m-auto">
            {data && (
              <div key={data.id} className="product-container d-flex flex-row w-100">
                <img src={data.image} alt="Product Image" className="product-image" />
                <div className="product-details p-5">
                  <h4 className="product-name">{data.name}</h4>
                  <h6 className="product-brand mt-2">{data.brand} - {data.rating}⭐</h6>
                  <p className="product-price">
                    {data.price} <span className="old-price">{data.originalPrice}(65% OFF)</span>
                  </p>
                  <p>"Experience unmatched quality and innovation with our latest product, designed to simplify your life and enhance your daily routine. Built with durability and user-friendliness in mind, it offers exceptional performance and reliability for a wide range of needs."</p>
                  <Button variant="success" className="buy-now-btn w-50">Get it for {data.price}</Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='mt-5'>
      
          {desdata.map((el) => (
            <Col key={el.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-4 card-hover">
                <Link to={`/description/${el.id}`}>
                  <Card.Img variant="top" src={el.image} alt={el.name} />
                </Link>
                <Card.Body>
                  <Card.Text>{el.brand}</Card.Text>
                  <Card.Title className='fs-5'>{el.name}</Card.Title>
                  <Card.Text>{el.rating}</Card.Text>
                  <Card.Text>{el.price}</Card.Text>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className='mt-5 pt-5'>
        <Footer />
      </div>
    </div>
  )
}

export default Description