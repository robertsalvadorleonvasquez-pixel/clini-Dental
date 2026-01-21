
import { User, UserRole, PatientAttendance } from './types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    dni: '12345678',
    name: 'Dr. Jorge Medina',
    role: UserRole.ADMIN,
    position: 'Director Médico',
    assignedSchedule: '08:00 AM - 05:00 PM'
  },
  {
    id: '2',
    dni: '87654321',
    name: 'Lic. Ana Pérez',
    role: UserRole.WORKER,
    position: 'Recepcionista',
    assignedSchedule: '09:00 AM - 06:00 PM'
  }
];

export const INITIAL_ATTENDANCE: PatientAttendance[] = [
  {
    id: 'p1',
    patientName: 'Juan Delgado',
    workerName: 'Lic. Ana Pérez',
    date: '2024-05-20',
    checkInTime: '08:55 AM',
    checkOutTime: '09:30 AM',
    status: 'Puntual'
  },
  {
    id: 'p2',
    patientName: 'Maria Torres',
    workerName: 'Lic. Ana Pérez',
    date: '2024-05-20',
    checkInTime: '10:15 AM',
    checkOutTime: '11:00 AM',
    status: 'Tardío'
  },
  {
    id: 'p3',
    patientName: 'Roberto Gómez',
    workerName: 'Dr. Jorge Medina',
    date: '2024-05-21',
    checkInTime: '08:00 AM',
    checkOutTime: '08:45 AM',
    status: 'Puntual'
  }
];
