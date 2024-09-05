import PatientForm from "./components/PatientForms"

function App() {

  return (
    <>
      <h1 className="text-center text-gray-700 text-4xl container md:h-2/3  ">Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </h1>
        <PatientForm />
    </>
  )
}

export default App
