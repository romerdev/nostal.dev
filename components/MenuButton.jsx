'use client';

import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function MenuButton() {
  const pathname = usePathname();

  const toggleClass = () => {
    const menuElement = document.querySelector('.js-menu');
    const buttonElements = document.querySelectorAll('.js-menuButton ');

    buttonElements.forEach((element) => {
      element.classList.toggle('hidden');
      element.classList.toggle('flex');
    });

    menuElement.classList.toggle('hidden');
    menuElement.classList.toggle('grid');
  };

  return (
    <button onClick={toggleClass} key={pathname} className="md:hidden p-4 h-32 font-bold text-xl transition-colors bg-opacity-0 hover:bg-opacity-20 bg-white inline-flex">
      <span className="js-menuButton flex w-full">
        Menu
        <Bars3Icon className="h-8 w-8 ml-auto"/>
      </span>
      <span className="js-menuButton hidden w-full">
        Close
        <XMarkIcon className="h-8 w-8 ml-auto"/>
      </span>
    </button>
  );
};