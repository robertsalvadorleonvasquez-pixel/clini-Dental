
import React from 'react';
import { User } from '../types';

interface UserProfileProps {
  user: User;
  onBack: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="h-32 bg-blue-600 relative">
           <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-lg">
                <div className="w-full h-full bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
           </div>
        </div>
        
        <div className="pt-20 px-8 pb-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">{user.name}</h2>
            <p className="text-blue-600 font-semibold">{user.position}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">DNI</p>
                <p className="text-lg font-medium text-slate-700">{user.dni}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Rol en Sistema</p>
                <p className="text-lg font-medium text-slate-700">{user.role}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Horario Asignado</p>
                <div className="flex items-center space-x-2 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-medium">{user.assignedSchedule}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estado de Cuenta</p>
                <p className="text-lg font-medium text-green-600 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Activo</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <h4 className="font-bold text-slate-700 mb-2">Acerca de DentaControl</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Este perfil está asociado a la red institucional del Instituto Leonardo Da Vinci. 
              Cualquier cambio en sus datos personales debe ser solicitado al área administrativa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
