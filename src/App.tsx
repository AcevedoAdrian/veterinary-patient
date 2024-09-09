import PatientForm from "./components/PatientForms"
import PatientList from "./components/PatientList";

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-center text-gray-700 text-5xl  md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes {""}
          <span className="text-indigo-600 font-bold">Vterinaria</span>
        </h1>
        <div className=" mt-12 md:flex">
          <PatientForm />
          <PatientList />
        </div>
      </div>
    </>
  );
}

export default App
