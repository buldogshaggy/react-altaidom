import React from 'react';
import './Header.scss';
import { ReactComponent as Logo} from '../../../assets/images/line_RU_green.svg';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      {/* ============ Logo ============ */}
      <div className='logo'>
        <Logo className='logo-img' />
      </div>
      {/* ============ Navbar ============ */}
      <nav className='navbar'>
        <ul>
          <li><a href='#'>Крупные проекты</a></li>
          <li><a href='#'>Типовые проекты</a></li>
          <li><a href='#'>Дизайн</a></li>
          <li><a href='#'>Фотогалерея</a></li>
          <li><a href='#'>О нас</a></li>
        </ul>
      </nav>
      {/* ============ Contact Info ============ */}
      <div className='contact-info'>
        <a href='#' className='phone-number'>8 800 70-12-84</a>
        <button className='header-btn'>Оставить заявку</button>
      </div>
    </header>
  );
};