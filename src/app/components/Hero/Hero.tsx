import React from 'react';
import './Hero.scss';

export const Hero: React.FC = () => {
    return(
        <section className='hero'>
            <div className='hero-content'>
                <h1 className='hero-title'>ОБЪЕКТЫ ИЗ КЛЕЁНОГО БРУСА</h1>
                <p className='hero-subtitle'>от 100 до 3000 м²</p>
                <span>Строим 15 лет</span>
                <span>Собственное сырье</span>
                <span>Строгие стандарты качества</span>
            </div>
        </section>
    );
}