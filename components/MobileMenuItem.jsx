import Link from 'next/link'

export default function MobileMenuItem({slug, name}) {
  return (
    <Link href={slug} className="p-4 h-full font-bold text-xl transition-colors bg-opacity-0 hover:bg-opacity-20 bg-white">
      {name}
    </Link>
  );
};