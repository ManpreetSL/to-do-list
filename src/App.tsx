import './App.css';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <>
     
      <div className='card'>
        <ToDoList />
      </div>
      <p className='read-the-docs'>Made by Avtar Singh</p>
    </>
  );
};

export default App;
