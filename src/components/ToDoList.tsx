import { FunnelIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './DropdownMenu';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import Card from './Card';
import SearchBar from './SearchBar';
import { useState } from 'react';
import AddTaskBar from './AddTaskBar';
import { v4 as uuidv4 } from 'uuid';

const statuses = ['Not Started', 'In Progress', 'Complete'];
const defaultToDos = [
  {
    id: uuidv4(),
    text: 'Create a to do list',
    status: 'Complete',
    dueDate: new Date(Date.now() - 60 * 60 * 1000),
  },
  {
    id: uuidv4(),
    text: 'Do some Simran',
    status: 'In Progress',
    dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
];

const ToDoList = () => {
  const [toDos, setToDos] = useState(defaultToDos);
  const [searchInput, setSearchInput] = useState('');
  const [newTaskName, setNewTaskName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold'>To Do List</h1>
      <SearchBar
        value={searchInput}
        onSearchInputChange={handleSearchInputChange}
      />
      <DropdownMenu>
        <DropdownMenu.Button>
          Filter
          <FunnelIcon className='size-5' />
        </DropdownMenu.Button>
        <DropdownMenu.Items>
          {statuses.map((status) => (
            <DropdownMenu.Item as='button' href='#' key={status}>
              {status}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Items>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenu.Button>
          Sort
          <ArrowsUpDownIcon className='size-5' />
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
            <Card>
              <Card.Title>
                <label htmlFor={toDo.id.toString()}>{toDo.text}</label>
              </Card.Title>
              <span>
                {toDo.dueDate.toLocaleDateString(undefined, {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <br />
              <select
                defaultValue={toDo.status}
                id={toDo.id.toString()}
                name='status'
              >
                {statuses.map((status) => (
                  <option value={status}>{status}</option>
                ))}
              </select>
            </Card>
          </li>
        ))}
      </ul>

      <AddTaskBar
        value={newTaskName}
        date={date}
        handleTaskNameChange={setNewTaskName}
        handleDateChange={setDate}
        onAddTask={(e) => {
          e.preventDefault();
          console.log({ newTaskName, date });
          setToDos([
            ...toDos,
            {
              id: uuidv4(),
              text: newTaskName,
              dueDate: new Date(date),
              status: 'Not Started',
            },
          ]);
        }}
      />
    </div>
  );
};

export default ToDoList;
