import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FaceWash = () => {
 const [data, setData] = useState([]);
    const [order, setOrder] = useState('asc');
    const [page, setPage] = useState(1);


    const fetchData = () => {
      axios.get('http://localhost:3000/face-wash', {
          params: {
              _page: page,
              _limit: 8,
              _sort: 'price',
              _order: order
          }
      })
          .then((res) => setData(res.data))
          .catch((err) => console.error(err));
  };
  useEffect(()=>{
    fetchData();
  },[page,order])


  return (
    <>
    <Container>
    <Row>
       <Col xs={12} md={3}>
                    <div className="d-flex justify-content-between">
                        <h6>FILTERS</h6>
                        <h6>CLEAR ALL</h6>
                    </div>
                    <hr />
                    <div className="price">
                        <h4>Price</h4>
                    </div>
                    <ButtonGroup>
                        <Button variant="primary" onClick={() => setOrder('asc')}>
                            Low to High
                        </Button>
                        <Button variant="primary" className="ms-2" onClick={() => setOrder('desc')}>
                            High to Low
                        </Button>
                    </ButtonGroup>
                </Col>  
        </Row>
        </Container>
      <Container>  
      <Row className='mt-5'>
        {data.map((el) => (
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

         <Container className="text-center ">
         <ButtonGroup aria-label="Pagination">
             <Button
                 onClick={() => setPage(page - 1)}
                 disabled={page <= 1}>
                 Previous
             </Button>
             <span style={{ padding: "0 15px", fontSize: "20px", lineHeight: "38px" }}>
                 {page}
             </span>
             <Button
                 onClick={() => setPage(page + 1)}
             >
                 Next
             </Button>
         </ButtonGroup>
     </Container>
     </>
  );
};

export default FaceWash;
