import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// mode는 item 버튼의 수정/추가 글씨를 넣기위해
export const TodoItem = ( {mode,item,handleCheckbox} ) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState("");
  const [inputValue, setInputValue] = useState("");

  const todoList = useSelector((state=>state.todoList));

  useEffect(() => {
    if(mode === "list") setEditMode("list");
    else if(mode === "add") setEditMode("add");
    else setEditMode("update");
  },[]);

  // 등록했을때 글에 id값을 넣기위해 현재 시간으로추가
  const generateUniqueId = () => {
    return Date.now();
  }

  // 투두 추가
  const addTodo = () => {

    if( inputValue === "") {
      alert('글을 써주세요.');
    } else { 
      
      const todo = {
        id: generateUniqueId(),
        text: inputValue
      }
      dispatch({type:"ADD_TODO", payload : todo })
      alert('등록 완료');
      setEditMode("list");
      navigate('/');
    }
  }

  const updateTodo = () => {
    const selectedItem = todoList.find((todo) => todo.id === item.id);
    setEditMode("update");
    setInputValue(selectedItem.text);
  }

  const confirmUpdate = () => {
    if( inputValue === "") {
      alert('글을 써주세요.');
    } else { 
      const selectedItem = todoList.find((todo) => todo.id === item.id);
      const updatedList = todoList.map((todo) =>
        todo.id === selectedItem.id ? { ...todo, text: inputValue } : todo
      );
      dispatch({ type: "UPDATE_TODO_TEXT", payload: updatedList });
      setEditMode("list");
    }
  };

  const handleCheckboxChange = (e) => {
    handleCheckbox(e.target.checked, item.id);
  }

  return (
    <div>
      <Card className="mb-3">
        {editMode === "add" ? 
          <Card.Body className='card_item'>
          <input
            id="input_text"
            type="text"
            className='card_text'
            onChange={(e) => setInputValue(e.target.value)}
            /> 
          <Button variant="danger" className='card_btn' onClick={(e)=> addTodo(e)}>
            추가
          </Button>
        </Card.Body>
        : ''}

        {editMode === "list" ? 
         <Card.Body className='card_item'>
          <input 
            type='checkbox'
            onChange={(e) =>handleCheckboxChange(e)}
            />
          <Card.Text className='card_text'>{item.text}</Card.Text>
          <Button variant="danger" className='card_btn' onClick={(e)=> updateTodo(e)}>
            수정
          </Button>
        </Card.Body>
        : ''}
  
        {editMode === "update" ? 
        <Card.Body className='card_item'>
          <input
          id="input_text"
          type="text"
          className='card_text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="danger" className='card_btn' onClick={(e) => confirmUpdate(e)}>
            확인
          </Button>
        </Card.Body>
        : ''}
           
      </Card>
    </div>
  )
}
