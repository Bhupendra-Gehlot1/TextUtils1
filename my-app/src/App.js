import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode!", "Success ");
      document.title = "TextUtils: Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode!", "Success ");
      document.title = "TextUtils: Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  return (
    <>
      <Navbar title="textutils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Router>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={
              <div className="container my-3">
                <Textform
                  showAlert={showAlert}
                  heading="Enter your text here to Change: "
                  mode={mode}
                />
              </div>
            }
          ></Route>
        </Routes>
      </Router> */}
      <div className="container my-3">
                <Textform
                  showAlert={showAlert}
                  heading="Enter your text here to Change: "
                  mode={mode}
                />
              </div>
            
      <About />
    </>
  );
}

export default App;
