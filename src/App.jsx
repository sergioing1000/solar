import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import MultiStepForm from "../src/components/multistepform.jsx";
import './App.css'

function App() {

  return (
    <>
      <div>
        <MultiStepForm />
      </div>

      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  );
}

export default App