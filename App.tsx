
import React, { useState, useEffect } from 'react';
import { AppView, User, UserRole, PatientAttendance } from './types';
import { MOCK_USERS, INITIAL_ATTENDANCE } from './constants';
import Splash from './components/Splash';
import Login from './components/Login';
import Menu from './components/Menu';
import RegisterAttendance from './components/RegisterAttendance';
import AttendanceList from './components/AttendanceList';
import Reports from './components/Reports';
import UserProfile from './components/UserProfile';
import Layout from './components/Layout';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('SPLASH');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [attendances, setAttendances] = useState<PatientAttendance[]>(INITIAL_ATTENDANCE);

  useEffect(() => {
    if (view === 'SPLASH') {
      const timer = setTimeout(() => {
        setView('LOGIN');
      }, 3000); // 3 seconds splash as per requirements
      return () => clearTimeout(timer);
    }
  }, [view]);

  const handleLogin = (dni: string) => {
    const user = MOCK_USERS.find(u => u.dni === dni);
    if (user) {
      setCurrentUser(user);
      setView('MENU');
    } else {
      alert('Usuario no encontrado. Intente con DNI: 12345678 (Admin) o 87654321 (Trabajador)');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('LOGIN');
  };

  const addAttendance = (newAttendance: PatientAttendance) => {
    setAttendances(prev => [newAttendance, ...prev]);
    setView('MENU');
  };

  const updateAttendance = (id: string, checkOutTime: string) => {
    setAttendances(prev => prev.map(a => a.id === id ? { ...a, checkOutTime } : a));
  };

  const renderContent = () => {
    switch (view) {
      case 'SPLASH':
        return <Splash />;
      case 'LOGIN':
        return <Login onLogin={handleLogin} />;
      case 'MENU':
        return <Menu user={currentUser!} setView={setView} onLogout={handleLogout} />;
      case 'REGISTER':
        return <RegisterAttendance user={currentUser!} onRegister={addAttendance} onCancel={() => setView('MENU')} />;
      case 'LIST':
        return <AttendanceList attendances={attendances} onBack={() => setView('MENU')} updateAttendance={updateAttendance} />;
      case 'REPORTS':
        return <Reports attendances={attendances} onBack={() => setView('MENU')} />;
      case 'PROFILE':
        return <UserProfile user={currentUser!} onBack={() => setView('MENU')} />;
      default:
        return <Menu user={currentUser!} setView={setView} onLogout={handleLogout} />;
    }
  };

  if (view === 'SPLASH') return <Splash />;

  return (
    <div className="min-h-screen bg-slate-50">
      {currentUser && view !== 'SPLASH' && view !== 'LOGIN' ? (
        <Layout user={currentUser} onLogout={handleLogout} onBackToMenu={() => setView('MENU')}>
          {renderContent()}
        </Layout>
      ) : (
        renderContent()
      )}
    </div>
  );
};

export default App;
