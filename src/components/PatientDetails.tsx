import { toast } from "react-toastify";
import { Patient } from "../interface";
import { usePatientStore } from "../store";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatuebtById = usePatientStore((state) => state.getPatuebtById);
  const handleClick = () => {
    toast.error("Paciente eliminado correctamente");
    deletePatient(patient.id);
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.namePatient} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />
      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg px-10 py-2"
          onClick={() => getPatuebtById(patient.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg px-10 py-2"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
