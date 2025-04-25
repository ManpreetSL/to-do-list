import { FunnelIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './DropdownMenu';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import Card from './Card';
import SearchBar from './SearchBar';
import { useState } from 'react';
import AddTaskBar from './AddTaskBar';
import { v4 as uuidv4 } from 'uuid';

type ToDo = {
  id: string;
  text: string;
  status: string;
  dueDate: Date;
};

const statuses = ['Not Started', 'In Progress', 'Complete'];
const defaultToDos: ToDo[] = [
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
const sortOptions = [
  {
    name: 'Name (ascending)',
    fn: (a: ToDo, b: ToDo) => a.text.localeCompare(b.text),
  },
  {
    name: 'Name (descending)',
    fn: (a: ToDo, b: ToDo) => b.text.localeCompare(a.text),
  },
  {
    name: 'Due date (ascending)',
    fn: (a: ToDo, b: ToDo) => a.dueDate.getTime() - b.dueDate.getTime(),
  },
  {
    name: 'Due date (descending)',
    fn: (a: ToDo, b: ToDo) => b.dueDate.getTime() - a.dueDate.getTime(),
  },
  {
    name: 'Status (ascending)',
    fn: (a: ToDo, b: ToDo) => a.status.localeCompare(b.status),
  },
  {
    name: 'Status (descending)',
    fn: (a: ToDo, b: ToDo) => b.status.localeCompare(a.status),
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
          {sortOptions.map((option) => (
            <DropdownMenu.Item
              as='button'
              href='#'
              key={option.name}
              onClick={(a) => {
                setToDos([...toDos].sort(option.fn));
                console.log('onClick', { a, option });
              }}
            >
              {option.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Items>
      </DropdownMenu>

      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
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
