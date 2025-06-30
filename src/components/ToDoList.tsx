import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './DropdownMenu';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import Card from './Card';
import SearchBar from './SearchBar';
import { useState } from 'react';
import AddTaskBar from './AddTaskBar';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { ToDo } from '../types';
import useToDos from '../hooks/useToDos';

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
  const [toDos, setToDos] = useToDos();
  const [searchInput, setSearchInput] = useState('');
  const [newTaskName, setNewTaskName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <div className='flex flex-col gap-y-2 items-center'>
      <h1 className='text-3xl font-bold'>To Do List</h1>
      <SearchBar
        value={searchInput}
        onSearchInputChange={(value) => setSearchInput(value)}
      />
      <div>
        <DropdownMenu>
          <DropdownMenu.Button>
            Filter
            <FunnelIcon className='size-5' />
          </DropdownMenu.Button>
          <DropdownMenu.Items>
            {statuses.map((status) => (
              <DropdownMenu.Item
                as='button'
                href='#'
                key={status}
                onClick={() => {
                  setFilter(status);
                }}
              >
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
                onClick={() => {
                  setToDos((prevToDos) => [...prevToDos].sort(option.fn));
                }}
              >
                {option.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Items>
        </DropdownMenu>
      </div>

      {filter && (
        <Button
          onClick={() => {
            setFilter(null);
          }}
        >
          {filter}
          <XMarkIcon
            aria-hidden='true'
            className='-mr-1 size-5 text-gray-400'
          />
        </Button>
      )}

      <ul>
        {(toDos ?? defaultToDos)
          .filter((toDo) => !filter || toDo.status === filter)
          .filter(
            (toDo) =>
              !searchInput ||
              toDo.text
                .toLocaleLowerCase()
                .includes(searchInput.toLocaleLowerCase())
          )
          .map((toDo) => (
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
                <DropdownMenu>
                  <DropdownMenu.Button>{toDo.status}</DropdownMenu.Button>
                  <DropdownMenu.Items>
                    {statuses.map((status) => (
                      <DropdownMenu.Item
                        as='button'
                        href='#'
                        key={status}
                        onClick={() => {
                          setToDos((prevToDos) =>
                            prevToDos.map((toDo2) =>
                              toDo2.id === toDo.id
                                ? { ...toDo2, status }
                                : toDo2
                            )
                          );
                        }}
                      >
                        {status}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Items>
                </DropdownMenu>
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
          setToDos((prevToDos) => [
            ...prevToDos,
            {
              id: uuidv4(),
              text: newTaskName,
              dueDate: new Date(date),
              status: 'Not Started',
            },
          ]);
          setNewTaskName('');
        }}
      />
    </div>
  );
};

export default ToDoList;
