import React from "react";

export default function Student({ student, removeFromStudents }) {
  const handleButtonClick = (targetArray) => {
    removeFromStudents(student, targetArray);
  };
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button
          className="button-24"
          onClick={() => handleButtonClick("binaryBotsArray")}
        >
          Binary Bots
        </button>
        <button
          className="button-24"
          onClick={() => handleButtonClick("bcCrewArray")}
        >
          BC Crew
        </button>
      </div>
    </div>
  );
}
