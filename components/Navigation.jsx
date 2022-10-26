import NavItem from './NavItem';
import MenuButton from './MenuButton'

export default function Navigation() {
  return (
    <nav className='grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-black border-b-2 border-black'>
      <NavItem slug='/' name='Nostal Dev' mobile />
      <NavItem slug='/work' name='Work' />
      <NavItem slug='/writings' name='Writings' />
      <NavItem slug='/contact' name={`Let's Talk`} />
      
      <MenuButton />
    </nav>
  );
}