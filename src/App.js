
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavbarComponent } from './component/NavbarComponent'
import { TodoList } from './component/TodoList';
import { EditPage } from './page/EditPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<TodoList/>}/>
        <Route path='/editPage' element={<EditPage/>}/>
      </Routes>
    </div>
  );
}
export default App;
