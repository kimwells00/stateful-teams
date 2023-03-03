import "./App.css";
import MainContainer from "./components/MainContainer";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import adam from "./assets/adam.png";
import corey from "./assets/corey.png";
import jaye from "./assets/jaye.png";
import jess from "./assets/jess.png";
import mauro from "./assets/mauro.png";
import rokhaya from "./assets/rokhaya.png";
import vinny from "./assets/vinny.png";
import meg from "./assets/meg.png";
import peter from "./assets/peter.png";
function App() {
  const studentData = [
    { name: "adam", img: adam },
    { name: "corey", img: corey },
    { name: "jaye", img: jaye },
    { name: "jess", img: jess },
    { name: "mauro", img: mauro },
    { name: "rokhaya", img: rokhaya },
    { name: "vinny", img: vinny },
    { name: "meg", img: meg },
    { name: "peter", img: peter },
  ];

  const addTeams = studentData.map((student) => ({
    ...student,
    team: "default",
  }));
  const [students, setStudents] = useState(addTeams);
  const [binarybots, setBinarybots] = useState([]);
  const [bccrew, setBccrew] = useState([]);

  const moveStudentToTeam = (student, teamName) => {
    if (teamName === "binarybots") {
      setBinarybots([...binarybots, { ...student, team: "binarybots" }]);
      setBccrew((state) => state.filter((e) => e.name !== student.name));
      setStudents((state) => state.filter((e) => e.name !== student.name));
    } else {
      setBccrew([...bccrew, { ...student, team: "bccrew" }]);
      setBinarybots((state) => state.filter((e) => e.name !== student.name));
      setStudents((state) => state.filter((e) => e.name !== student.name));
    }
  };

  const reset = () => {
    setBinarybots([]);
    setBccrew([]);
    setStudents(addTeams);
  };

  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button className="button-24" onClick={reset}>
        Reset
      </button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div className="App">
        <MainContainer
          students={students}
          binarybots={binarybots}
          setBinarybots={setBinarybots}
          bccrew={bccrew}
          setStudents={setStudents}
          setBccrew={setBccrew}
          moveStudentToTeam={moveStudentToTeam}
        />
      </div>
    </div>
  );
}

export default App;
