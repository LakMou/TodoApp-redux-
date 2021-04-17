import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className ="to-do-container">
     <AddTodo className="search"/>
      <TodoList/>
      </div>
      </div>
    </div>
  );
}

export default App;
