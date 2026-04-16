import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import CountryClubWebsite from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountryClubWebsite />
  </StrictMode>,
);
