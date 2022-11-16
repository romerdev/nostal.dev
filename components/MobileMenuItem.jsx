"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenuItem({ slug, name }) {
  let active = slug === usePathname();

  return (
    <Link
      href={slug}
      className={`${
        active ? "underline" : ""
      } underline-offset-4 p-4 h-full font-bold text-xl transition-colors bg-opacity-0 hover:bg-opacity-20 bg-white`}
    >
      {name}
    </Link>
  );
}
