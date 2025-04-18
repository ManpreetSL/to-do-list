import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
  value: string;
  onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, onSearchInputChange }: Props) => {
  return (
    <>
      <div className='relative py-2 my-2'>
        <input
          className='pl-9 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1'
          placeholder='Search tasks...'
          value={value}
          onChange={onSearchInputChange}
        />
        <MagnifyingGlassIcon className='lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4' />
      </div>
    </>
  );
};

export default SearchBar;
