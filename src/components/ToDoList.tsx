import DropdownMenu from './DropdownMenu';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';

const statuses = ['Not Started', 'In Progress', 'Complete'];

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

      <DropdownMenu>
        <DropdownMenu.Button>
          Sort
          <ArrowsUpDownIcon />
        </DropdownMenu.Button>
        <DropdownMenu.Items>
          <DropdownMenu.Item as='button' href='#'>
            Name (ascending)
          </DropdownMenu.Item>
          <DropdownMenu.Item as='button' href='#'>
            Name (descending)
          </DropdownMenu.Item>
          <DropdownMenu.Item as='button' href='#'>
            Due date (ascending)
          </DropdownMenu.Item>
          <DropdownMenu.Item as='button' href='#'>
            Due date (descending)
          </DropdownMenu.Item>
          <DropdownMenu.Item as='button' href='#'>
            Status (ascending)
          </DropdownMenu.Item>
          <DropdownMenu.Item as='button' href='#'>
            Status (descending)
          </DropdownMenu.Item>
        </DropdownMenu.Items>
      </DropdownMenu>

      <ul>
        {toDos.map((toDo) => (
          <li>
            <label htmlFor={toDo.id.toString()}>{toDo.text}</label>
            <select
              defaultValue={toDo.status}
              id={toDo.id.toString()}
              name='status'
            >
              {statuses.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
