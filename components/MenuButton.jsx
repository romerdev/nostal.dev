'use client';

import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function MenuButton() {
  const [isActive, setActive] = useState(false);
  const pathname = usePathname();

  const toggleClass = () => {
    setActive(!isActive);

    const menuElement = document.querySelector('.js-menu')

    menuElement.classList.toggle('hidden');
    menuElement.classList.toggle('grid');
  };

  return (
    <button onClick={toggleClass} key={pathname} className="md:hidden p-4 h-32 font-bold text-xl transition-colors bg-opacity-0 hover:bg-opacity-20 bg-white inline-flex">
        Menu
    </button>
  );
};