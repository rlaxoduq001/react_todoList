import React from 'react'
import { TodoItem } from '../component/TodoItem'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const EditPage = () => {
  return (
    <div>
      <Container className='list_continer'>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <TodoItem mode="add"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
