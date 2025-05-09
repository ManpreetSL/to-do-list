import { MenuButton as HeadlessMenuButton } from '@headlessui/react';
import { ReactNode } from 'react';

type ButtonProps = { children: ReactNode };

const Button = ({ children }: ButtonProps) => (
  <HeadlessMenuButton className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50'>
    {children}
  </HeadlessMenuButton>
);

export default Button;
