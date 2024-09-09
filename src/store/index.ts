import {create } from 'zustand';
import { devtools } from 'zustand/middleware'
import {v4 as uuidv4} from 'uuid';
import { DraftPatient, Patient } from '../interface';

type PatientStore = { 
  patients: Patient[],
  activeIdPatient: Patient['id']
  addPatient: (data: DraftPatient)=> void,
  deletePatient: (id: Patient['id']) => void,
  getPatuebtById: (id: Patient['id']) => void,
  updatePatient: (data: DraftPatient) => void
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
  getPatuebtById: (id) => {
    set(()=>({
      activeIdPatient: id
    }))
  },
  updatePatient: (data) => {
    set(
      (state)=>(
        {
          patients: state.patients.map(
            (patient)=> 
              patient.id === state.activeIdPatient 
                ? {id: state.activeIdPatient, ...data} 
                : patient
          ),
          activeIdPatient: ''
        }
      )
    )
  }

})))