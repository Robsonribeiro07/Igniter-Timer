import {  Routes, Route } from 'react-router-dom'; // Usando BrowserRouter diretamente
import { Home } from './pages/Home/home';  // Seu componente Home
import { History } from './pages/History';  // Seu componente History
import { DefaultLayout } from './layout/DefaultLayout';  // Layout principal

export function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>  {/* Layout que envolve todas as páginas */}
          <Route index element={<Home />} />  {/* Página inicial */}
          <Route path="history" element={<History />} />  {/* Página de histórico */}
        </Route>
      </Routes>
  );
}
