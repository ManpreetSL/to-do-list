import { PlusIcon } from '@heroicons/react/24/solid';
import { FormEvent } from 'react';
import DatePicker from './DatePicker';
import Button from './Button';

type Props = {
  value: string;
  date: string;
  handleTaskNameChange: (name: string) => void;
  handleDateChange: (date: string) => void;
  onAddTask: (e: FormEvent<HTMLFormElement>) => void;
};

const AddTaskBar = ({
  value,
  date,
  handleTaskNameChange,
  handleDateChange,
  onAddTask,
}: Props) => {
  return (
    <div className='relative py-2 my-2'>
      <form onSubmit={onAddTask}>
        <input
          className='flex h-10 w-full rounded-md border border-input bg-background px-9 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1'
          placeholder='Create a new task'
          value={value}
          onChange={(e) => handleTaskNameChange(e.target.value)}
          required
        />
        <DatePicker date={date} onChange={handleDateChange} />
        <Button
          type='submit'
          className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4'
        >
          <PlusIcon />
        </Button>
      </form>
    </div>
  );
};

export default AddTaskBar;
