import './App.css';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("success")
  const [navbar, setNavbar] = useState("success")
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const [textarea, setTextarea] = useState("Light")
  const [tatext, setTatext] = useState("dark")
  const [fnbtn, setFnbtn] = useState("success")

  const toggleMode = () => {
    if (mode === "success") {
      setMode("light");
      setNavbar("dark")
      setBtnText("Enable Light Mode")
      setTextarea("dark")
      setTatext("light")
      setFnbtn("light")
      document.body.style.backgroundColor = "#1D2A35";
    } else {
      setMode("success");
      setNavbar("success")
      setBtnText("Enable Dark Mode")
      setTextarea("light")
      setTatext("dark")
      setFnbtn("success")
      document.body.style.backgroundColor = "#fff";
    }

  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} navbar={navbar} btnText={btnText}  />
      <div style={{ height: "40px" }}>
        <Alert alert={alert}/>
      </div>
      <div className="container">
        <Home showAlert={showAlert} mode={mode} textarea={textarea} tatext={tatext} fnbtn={fnbtn} />
      </div>


    </>
  );
}

export default App;
