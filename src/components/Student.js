import React from "react";

export default function Student({
  student,
  students,
  setBinarybots,
  binarybots,
  moveStudentToTeam,
}) {
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        {student?.team === "default" && (
          <>
            <button
              className="button-24"
              name="bccrew"
              onClick={(e) => moveStudentToTeam(student, e.target.name)}
            >
              BC Crew
            </button>
            <button
              onClick={(e) => moveStudentToTeam(student, e.target.name)}
              className="button-24"
              name="binarybots"
            >
              Binary Bots
            </button>
          </>
        )}
        {student?.team === "bccrew" && (
          <button
            onClick={(e) => moveStudentToTeam(student, e.target.name)}
            className="button-24"
            name="binarybots"
          >
            Binary Bots
          </button>
        )}
        {student?.team === "binarybots" && (
          <button
            className="button-24"
            name="bccrew"
            onClick={(e) => moveStudentToTeam(student, e.target.name)}
          >
            BC Crew
          </button>
        )}
      </div>
    </div>
  );
}
