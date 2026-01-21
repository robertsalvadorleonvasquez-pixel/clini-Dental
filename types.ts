
export enum UserRole {
  WORKER = 'Trabajador',
  ADMIN = 'Administrador'
}

export interface User {
  id: string;
  dni: string;
  name: string;
  role: UserRole;
  position: string;
  assignedSchedule: string;
}

export interface PatientAttendance {
  id: string;
  patientName: string;
  workerName: string;
  date: string;
  checkInTime: string;
  checkOutTime?: string;
  status: 'Puntual' | 'Tardío';
}

export type AppView = 'SPLASH' | 'LOGIN' | 'MENU' | 'REGISTER' | 'LIST' | 'REPORTS' | 'PROFILE';
