import {
  Menu as HeadlessMenu,
  MenuButton as HeadlessMenuButton,
  MenuItems as HeadlessMenuItems,
  MenuItem as HeadlessMenuItem,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ElementType, ReactNode } from 'react';

type DropdownMenuProps = { children: ReactNode };

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return (
    <HeadlessMenu as='div' className='relative inline-block text-left'>
      {children}
    </HeadlessMenu>
  );
};

type DropdownMenuButtonProps = { children: ReactNode };
DropdownMenu.Button = ({ children }: DropdownMenuButtonProps) => (
  <HeadlessMenuButton className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 shadow-xs ring-gray-300 dark:ring-slate-500 ring-inset hover:bg-gray-50 dark:hover:bg-slate-600'>
    {children}
    <ChevronDownIcon
      aria-hidden='true'
      className='-mr-1 size-5 text-gray-400'
    />
  </HeadlessMenuButton>
);

DropdownMenu.Items = ({ children }: { children: ReactNode }) => (
  <HeadlessMenuItems className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-700 ring-1 shadow-lg ring-black/5 dark:ring-white/5 focus:outline-none'>
    <div className='py-1'>{children}</div>
  </HeadlessMenuItems>
);

type DropdownMenuItemProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  React.ComponentPropsWithoutRef<'button'>;

DropdownMenu.Item = ({
  children,
  as = 'a',
  className = '',
  ...rest
}: DropdownMenuItemProps) => (
  <HeadlessMenuItem
    as={as}
    className={`block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-white data-[headlessui-state=active]:bg-gray-100 dark:data-[headlessui-state=active]:bg-slate-700 data-[headlessui-state=active]:text-gray-900 dark:data-[headlessui-state=active]:text-white ${className}`}
    {...rest}
  >
    {children}
  </HeadlessMenuItem>
);

export default DropdownMenu;
