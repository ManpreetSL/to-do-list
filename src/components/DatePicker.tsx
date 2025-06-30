import { CalendarIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

type DatePickerProps = {
  date: string;
  onChange: (date: string) => void;
};

const DatePicker = ({ date, onChange }: DatePickerProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5'>
      <button
        onClick={() => ref.current?.showPicker?.() || ref.current?.click()}
        type='button'
        className='w-full h-full rounded-lg cursor-pointer'
      >
        <CalendarIcon />
      </button>
      <input
        type='date'
        ref={ref}
        value={date}
        onChange={(e) => onChange(e.target.value)}
        className='sr-only'
      />
    </div>
  );
};

export default DatePicker;
