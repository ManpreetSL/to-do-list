const ToDoList = () => {
  const toDos = [
    {
      id: 1,
      text: 'Create a to do list',
      complete: true,
    },
    {
      id: 2,
      text: 'Do some Simran',
      complete: false,
    },
  ];
  return (
    <div>
      <h1 className='text-3xl font-bold'>To Do List</h1>
      <ul>
        {toDos.map((toDo) => (
          <li>
            <input
              type='checkbox'
              id={toDo.id.toString()}
              name={toDo.id.toString()}
            />
            <label htmlFor='vehicle1'>{toDo.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
