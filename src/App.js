import logo from './logo.svg';
import './App.css';
import AddTodo from './Component/AddTodo';
import List from './Component/List';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <List/>
    </div>
  );
}

export default App;
