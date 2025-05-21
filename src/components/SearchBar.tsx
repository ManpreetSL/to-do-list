import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

type SearchBarProps = {
  value: string;
  onSearchInputChange: (value: string) => void;
};

const SearchBar = ({ value, onSearchInputChange }: SearchBarProps) => {
  return (
    <>
      <div className='relative py-2 my-2'>
        <input
          className='px-9 py-2 flex h-10 w-full rounded-md border border-input bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1'
          placeholder='Search tasks...'
          value={value}
          onChange={(e) => onSearchInputChange(e.target.value)}
        />
        <MagnifyingGlassIcon className='lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4' />
        <XMarkIcon
          aria-hidden='true'
          className='lucide lucide-search absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 -mr-1 size-5 text-gray-400'
          onClick={() => onSearchInputChange('')}
        />
      </div>
    </>
  );
};

export default SearchBar;
