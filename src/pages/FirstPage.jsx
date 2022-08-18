import React from 'react'
import Discount from './Discount'
import BigSale from './BigSale'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'


export default function FirstPage() {

   




    return (
        <div>
            <Container >
                <Row className="m-4">
                    
                    <Col sm={9}> <Discount /> </Col>
                    <Col sm={3}> <BigSale /> </Col>
                </Row>

            </Container>
        </div>
    )
}
