import React from "react";
import Student from "./Student";

export default function BcCrew({ bcCrewArray, removeFromStudents }) {
  return (
    <div className="bc-crew">
      <h1>BC Crew</h1>
      {bcCrewArray?.map((student) => (
        <Student student={student} removeFromStudents={removeFromStudents} />
      ))}
    </div>
  );
}
