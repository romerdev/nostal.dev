'use client';

import MobileMenuItem from './MobileMenuItem';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const pathname = usePathname();
  
  return (
    <nav key={pathname} className='js-menu hidden md:hidden divide-y-2 divide-black border-y-2 border-black absolute bg-primary top-32 left-0 w-full h-[calc(100%-8rem)]'>
      <MobileMenuItem slug='/work' name='Work' />
      <MobileMenuItem slug='/writings' name='Writings' />
      <MobileMenuItem slug='/contact' name={`Let's Talk`} />
    </nav>
  );
}