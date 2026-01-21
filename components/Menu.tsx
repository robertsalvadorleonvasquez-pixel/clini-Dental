
import React from 'react';
import { User, AppView, UserRole } from '../types';

interface MenuProps {
  user: User;
  setView: (view: AppView) => void;
  onLogout: () => void;
}

const Menu: React.FC<MenuProps> = ({ user, setView, onLogout }) => {
  const isAdmin = user.role === UserRole.ADMIN;

  const menuItems = [
    {
      title: 'Registrar Asistencia',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: 'bg-green-500',
      target: 'REGISTER' as AppView,
      show: true
    },
    {
      title: 'Ver Asistencias',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-blue-500',
      target: 'LIST' as AppView,
      show: true
    },
    {
      title: 'Reportes Básicos',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-purple-500',
      target: 'REPORTS' as AppView,
      show: isAdmin
    },
    {
      title: 'Mi Perfil',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'bg-orange-500',
      target: 'PROFILE' as AppView,
      show: true
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800">Menú Principal</h2>
        <p className="text-slate-500 mt-2">Bienvenido, seleccione una opción para continuar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.filter(item => item.show).map((item, idx) => (
          <button
            key={idx}
            onClick={() => setView(item.target)}
            className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all group text-left"
          >
            <div className={`w-16 h-16 ${item.color} text-white rounded-xl flex items-center justify-center mr-6 shadow-lg shadow-${item.color.split('-')[1]}-100 group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-sm">Gestionar {item.title.toLowerCase()}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12">
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 text-red-500 font-semibold hover:text-red-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
