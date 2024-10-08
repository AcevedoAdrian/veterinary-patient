import {useForm} from 'react-hook-form';
import Error from './Error';
import { DraftPatient, Patient } from "../interface";
import { usePatientStore } from "../store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function PatientForm() {
  const listPatients = usePatientStore((state) => state.patients);
  const activeIdPatient = usePatientStore((state) => state.activeIdPatient);
  const addPatient = usePatientStore((state) => state.addPatient);
  const updatePatient = usePatientStore((state) => state.updatePatient);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<DraftPatient>();

  useEffect(() => {
    if (activeIdPatient) {
      const editPatient = listPatients.filter(
        (patient) => patient.id === activeIdPatient,
      )[0];

      const keysPatient = Object.keys(editPatient).filter(
        (key) => key !== "id",
      ) as Array<keyof DraftPatient>;
      console.log(keysPatient);

      keysPatient.forEach((key) => {
        setValue(key, editPatient[key]);
      });
    }
  }, [activeIdPatient, listPatients, setValue]);

  const registerPatient = (data: DraftPatient) => {
    if (activeIdPatient) {
      updatePatient(data);
      toast.success("Paciente actualizado correctamente");
    } else {
      addPatient(data);
      toast.success("Paciente añadido correctamente");
    }
    reset();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit(registerPatient)}
        noValidate
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="namePatient"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("namePatient", {
              required: "El nombre del paciente es obligatorio",
            })}
          />
          {errors.namePatient && (
            <Error>{errors.namePatient?.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El nombre del propietario es obligatorio",
            })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker?.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria",
            })}
          />
          {errors.date && <Error>{errors.date?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los síntomas son obligatorios",
            })}
          />
          {errors.symptoms && (
            <Error>{errors.symptoms?.message?.toString()}</Error>
          )}
        </div>

        <input
          type="submit"
          className={` w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors ${
            activeIdPatient
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-green-500 hover:bg-green-600"
          } rounded-lg`}
          value={`${activeIdPatient ? "Editar" : "Añadir"} Paciente`}
        />
      </form>
    </div>
  );
}