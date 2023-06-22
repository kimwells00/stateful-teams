import React from "react";
import Student from "./Student";

export default function BinaryBots({ binaryBotsArray, removeFromStudents }) {
  return (
    <div className="binarybots">
      <h1>Binary Bots</h1>
      {binaryBotsArray?.map((student) => (
        <Student student={student} removeFromStudents={removeFromStudents} />
      ))}
    </div>
  );
}
