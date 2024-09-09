import {create } from 'zustand';
import { devtools } from 'zustand/middleware'
import {v4 as uuidv4} from 'uuid';
import { DraftPatient, Patient } from '../interface';

type PatientStore = { 
  patients: Patient[],
  activeIdPatient: Patient['id']
  addPatient: (data: DraftPatient)=> void,
  deletePatient: (id: Patient['id']) => void
  editePatient: (id: Patient['id']) => void
}
const createIdPatient = (patients: DraftPatient): Patient => {
  return {
    ...patients,
    id: uuidv4()
  }
}

export const usePatientStore = create<PatientStore>()(devtools((set) => ({
  // State: variables that will be used in the app
  patients: [],
  activeIdPatient: '',
  // Actions: functions that modify the state
  addPatient: (data) => {
    const newPatient = createIdPatient(data)
    set((state)=>({
      patients:[...state.patients, newPatient]
    }))

  },
  deletePatient: (id) => {
    set((state)=>({
      patients: state.patients.filter((patient)=> patient.id !== id)
    }))
  },
  editePatient: (id) => {
    set(()=>({
      activeIdPatient: id
    }))
  }

})))