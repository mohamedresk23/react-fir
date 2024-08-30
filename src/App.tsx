
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FormComponent from './components/FormComponent'

function App() {

  const [login, setlogin] = useState("login");
  return (
    <>
    <Navbar company={"BIG-M"} adress="Talka" loginT={login} stateFun={setlogin}> <span>Test children</span> <h6>sec children</h6> </Navbar>
    <FormComponent/>
    </>
  )
}

export default App
