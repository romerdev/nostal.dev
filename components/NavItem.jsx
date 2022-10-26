import Link from 'next/link'

export default function NavItem({slug, name, mobile}) {
  let hideClasses = '';

  if (!mobile) {
    hideClasses = 'hidden md:block';
  }

  return (
    <Link href={slug} className={`${hideClasses} p-4 h-32 font-bold text-xl transition-colors bg-opacity-0 hover:bg-opacity-20 bg-white`}>
      {name}
    </Link>
  );
};