import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { TodoItem } from './TodoItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const TodoList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todoList = useSelector((state=>state.todoList)); 
  const [selectedItems, setSelectedItems] = useState([]);
  

  useEffect( () => {
  },[])
  
  const gotoPage = () => {
    navigate('/editPage');
  }

  const handleCheckbox = (checked, itemId) => {
    if (checked) {
      setSelectedItems((items) => [...items, itemId]);
    } else {
      setSelectedItems((items) => items.filter((id) => id !== itemId));
    }
  };

  const deleteTodo = () => {
    setSelectedItems([]);
    const updatedList = todoList.filter((item) => !selectedItems.includes(item.id));
    dispatch({ type: 'UPDATE_TODO_TEXT', payload: updatedList });
  }

  return (
    <div>
    <Container className='list_continer'>
      <div className='btn_container'>
        <Button variant="primary" onClick={()=>gotoPage()}>추가</Button>{' '}
        <Button variant="secondary" onClick={()=>deleteTodo()}>삭제</Button>{' '}
      </div>
      
      <Row className="justify-content-md-center">
        <Col md="auto">
          {todoList.map((item,idx) => (
            <TodoItem key={idx} item={item} handleCheckbox={handleCheckbox} mode="list"/>
          ))}
        </Col>
      </Row>
    </Container>


    </div>
  )
}
