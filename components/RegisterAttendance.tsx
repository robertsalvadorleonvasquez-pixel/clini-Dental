
import React, { useState, useEffect } from 'react';
import { User, PatientAttendance } from '../types';

interface RegisterAttendanceProps {
  user: User;
  onRegister: (attendance: PatientAttendance) => void;
  onCancel: () => void;
}

const RegisterAttendance: React.FC<RegisterAttendanceProps> = ({ user, onRegister, onCancel }) => {
  const [patientName, setPatientName] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isEntry, setIsEntry] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      alert('Por favor ingrese el nombre del paciente');
      return;
    }

    const newAttendance: PatientAttendance = {
      id: Math.random().toString(36).substr(2, 9),
      patientName,
      workerName: user.name,
      date: currentTime.toLocaleDateString('es-ES'),
      checkInTime: currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      status: currentTime.getHours() >= 9 ? 'Tardío' : 'Puntual' // Logic for report demo
    };

    onRegister(newAttendance);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 bg-blue-600 text-white">
          <h2 className="text-2xl font-bold">Registro de Asistencia</h2>
          <p className="text-blue-100 mt-1">Control de ingreso de pacientes</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Trabajador</p>
                <p className="text-lg font-semibold text-slate-700">{user.name}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Fecha Actual</p>
                <p className="text-lg font-semibold text-slate-700">{currentTime.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            <div className="text-center py-6">
              <p className="text-5xl font-mono font-bold text-slate-800 tabular-nums">
                {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
              </p>
              <p className="text-slate-400 mt-2 font-medium">Hora actual del sistema</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre del Paciente</label>
              <input
                type="text"
                className="w-full px-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-lg"
                placeholder="Nombre completo del paciente"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-100 transition-all flex items-center justify-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Registrar Entrada</span>
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-xl transition-all"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAttendance;
