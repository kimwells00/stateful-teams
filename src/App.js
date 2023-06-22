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
  const [bcCrewArray, setBcCrewArray] = useState([]);
  const [binaryBotsArray, setBinaryBotsArray] = useState([]);
  const removeFromStudents = (studentToRemove, targetArray) => {
    if (students.includes(studentToRemove) === true) {
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    if (bcCrewArray.includes(studentToRemove) === true) {
      setBcCrewArray((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    if (binaryBotsArray.includes(studentToRemove) === true) {
      setBinaryBotsArray((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    if (targetArray === "bcCrewArray") {
      setBcCrewArray((prevBcArray) => [...prevBcArray, studentToRemove]);
    } else if (targetArray === "binaryBotsArray") {
      setBinaryBotsArray((prevbinaryBotsArray) => [
        ...prevbinaryBotsArray,
        studentToRemove,
      ]);
    }
  };

  const resetArrays = () => {
    setStudents(studentData);
    setBcCrewArray([]);
    setBinaryBotsArray([]);
  };

  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button className="button-reset" onClick={resetArrays}>
        Reset
      </button>
      <div className="App">
        <MainContainer
          students={students}
          bcCrewArray={bcCrewArray}
          binaryBotsArray={binaryBotsArray}
          removeFromStudents={removeFromStudents}
        />
      </div>
    </div>
  );
}

export default App;
