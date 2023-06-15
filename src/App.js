import "./App.css";
import MainContainer from "./components/MainContainer";
import { useState } from "react";
import dustin from "./assets/dustin.png";
import daniel from "./assets/daniel.jpeg";
import max from "./assets/max.jpg";
import justin from "./assets/justin.png";

function App() {
  const studentData = [
    { name: "dustin", img: dustin },
    { name: "daniel", img: daniel },
    { name: "max", img: max },
    { name: "justin", img: justin },
  ];
  const [students, setStudents] = useState(studentData);
  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button
        className="button-24"
        onClick={() =>
          console.log("I should reset you back to all being in default")
        }
      >
        Reset
      </button>
      <div className="App">
        <MainContainer students={students} />
      </div>
    </div>
  );
}

export default App;
