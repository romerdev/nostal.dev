"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function NavItem({slug, name, mobile}) {
  let hideClasses = '';

  if (!mobile) {
    hideClasses = 'hidden md:block';
  }

  let active = slug === usePathname();

  return (
    <Link href={slug} className={`${hideClasses} ${active ? "underline" : ""} underline-offset-4 p-4 h-32 font-bold text-xl transition-colors bg-opacity-0 hover:bg-opacity-20 bg-white`}>
      {name}
    </Link>
  );
};