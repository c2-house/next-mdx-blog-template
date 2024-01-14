import clsx from 'clsx';
import Link from 'next/link';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

import { categories } from '@/constants/category';
import { CloseIcon } from '@/public/icons';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const handleClickOutside = (e: MouseEvent, setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  if (e.target === e.currentTarget) {
    setIsOpen(false);
  }
};

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 cursor-default transition-all duration-300',
        isOpen
          ? 'pointer-events-auto z-50 bg-gray-900/80 backdrop-blur'
          : 'pointer-events-none z-[-1] bg-transparent',
      )}
      onClick={(e) => handleClickOutside(e, setIsOpen)}
    >
      <div
        className={clsx(
          'fixed right-0 top-0 z-[51] flex h-full w-64 transform flex-col bg-gray-100 p-4 text-gray-700 shadow-lg transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex justify-end">
          <button
            aria-label="close sidebar"
            className="cursor-pointer p-1"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon className="fill-current" />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col items-center">
            {categories.map((category) => (
              <li key={category} className="w-full">
                <Link
                  href={`/category/${category}`}
                  className="inline-block w-full p-2 text-center font-semibold uppercase transition-colors hover:text-slate-500"
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
