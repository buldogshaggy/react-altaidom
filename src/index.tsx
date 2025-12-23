import style from './index.module.scss';
import './index.scss';
import './assets/images/4.webp';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import { StrictMode } from 'react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);