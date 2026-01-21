
import React, { useState } from 'react';
import { PatientAttendance } from '../types';

interface AttendanceListProps {
  attendances: PatientAttendance[];
  onBack: () => void;
  updateAttendance: (id: string, time: string) => void;
}

const AttendanceList: React.FC<AttendanceListProps> = ({ attendances, onBack, updateAttendance }) => {
  const [filter, setFilter] = useState('');

  const filtered = attendances.filter(a => 
    a.patientName.toLowerCase().includes(filter.toLowerCase()) || 
    a.date.includes(filter)
  );

  const handleRegisterExit = (id: string) => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    updateAttendance(id, time);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Lista de Asistencias</h2>
          <p className="text-slate-500">Historial de ingreso y salida de pacientes</p>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Buscar paciente o fecha..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Paciente</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Entrada</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Salida</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Responsable</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">{item.patientName}</td>
                  <td className="px-6 py-4 text-slate-600">{item.date}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.checkInTime}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.checkOutTime ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        {item.checkOutTime}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-sm italic">Pendiente</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{item.workerName}</td>
                  <td className="px-6 py-4 text-center">
                    {!item.checkOutTime && (
                      <button
                        onClick={() => handleRegisterExit(item.id)}
                        className="text-sm bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-lg transition-all border border-blue-100"
                      >
                        Registrar Salida
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 italic">No se encontraron registros</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
