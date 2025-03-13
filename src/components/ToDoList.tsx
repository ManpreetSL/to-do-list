const ToDoList = () => {
  const toDos = [
    {
      id: 1,
      text: 'Create a to do list',
      status: 'Complete',
    },
    {
      id: 2,
      text: 'Do some Simran',
      status: 'In Progress',
    },
  ];

  return (
    <div>
      <h1 className='text-3xl font-bold'>To Do List</h1>
      <ul>
        {toDos.map((toDo) => (
          <li>
            <label htmlFor={toDo.id.toString()}>{toDo.text}</label>
            <select
              defaultValue={toDo.status}
              id={toDo.id.toString()}
              name='status'
            >
              <option value='Not Started'>Not Started</option>
              <option value='In Progress'>In Progress</option>
              <option value='Complete'>Complete</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
