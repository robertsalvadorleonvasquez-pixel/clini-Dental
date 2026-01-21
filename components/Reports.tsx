
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { PatientAttendance } from '../types';

interface ReportsProps {
  attendances: PatientAttendance[];
  onBack: () => void;
}

const Reports: React.FC<ReportsProps> = ({ attendances }) => {
  // Simple report logic
  const total = attendances.length;
  const onTime = attendances.filter(a => a.status === 'Puntual').length;
  const late = attendances.filter(a => a.status === 'Tardío').length;

  const summaryData = [
    { name: 'Puntuales', value: onTime, color: '#10b981' },
    { name: 'Tardíos', value: late, color: '#f59e0b' }
  ];

  const dailyData = [
    { day: 'Lun', count: 12 },
    { day: 'Mar', count: 18 },
    { day: 'Mie', count: 15 },
    { day: 'Jue', count: 22 },
    { day: 'Vie', count: 19 },
    { day: 'Sab', count: 8 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Reportes Básicos</h2>
        <p className="text-slate-500">Métricas clave del flujo de pacientes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-sm font-bold uppercase mb-2">Total Asistencias</p>
          <p className="text-4xl font-bold text-slate-800">{total}</p>
          <p className="text-green-500 text-sm mt-2">↑ 12% vs semana anterior</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-sm font-bold uppercase mb-2">Pacientes Puntuales</p>
          <p className="text-4xl font-bold text-green-600">{onTime}</p>
          <p className="text-slate-400 text-sm mt-2">{((onTime/total)*100).toFixed(0)}% del total</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-sm font-bold uppercase mb-2">Pacientes Tardíos</p>
          <p className="text-4xl font-bold text-orange-600">{late}</p>
          <p className="text-slate-400 text-sm mt-2">Requieren recordatorios</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Asistencias por Día</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Estado de Puntualidad</h3>
          <div className="h-64 flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={summaryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {summaryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-1/3 flex flex-col space-y-4">
              {summaryData.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                  <span className="text-sm font-medium text-slate-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
