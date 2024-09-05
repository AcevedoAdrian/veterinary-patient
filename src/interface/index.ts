export interface Patient {
  id: string;
  namePatient: string;
  caretaker: string;
  email: string;
  date: Date,
  symptoms: string;
}

export type DraftPatient = Omit<Patient, 'id'>;