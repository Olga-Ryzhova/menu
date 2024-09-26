import { NavLink } from 'react-router-dom';

const Menu = () => {
  const setActive = ({isActive }) => {
   return isActive ? "menu__item menu__item-active" : "menu__item";
  }
    
  return (
    <nav className="menu">
      <NavLink to="/" className={setActive} exact>Главная</NavLink>
      <NavLink to="/drift" className={setActive}> Дрифт-такси </NavLink>
      <NavLink to="/timeattack" className={setActive}> Time Attack </NavLink>
      <NavLink to="/forza" className={setActive}> Forza Karting</NavLink>
    </nav>
  )
}

export default Menu;

