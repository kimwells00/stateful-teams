import BcCrew from "./BcCrew";
import BinaryBots from "./BinaryBots";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({
  students,
  bcCrewArray,
  binaryBotsArray,
  removeFromStudents,
}) {
  return (
    <>
      <BcCrew
        bcCrewArray={bcCrewArray}
        removeFromStudents={removeFromStudents}
      />
      <DefaultTeam
        students={students}
        removeFromStudents={removeFromStudents}
      />
      <BinaryBots
        binaryBotsArray={binaryBotsArray}
        removeFromStudents={removeFromStudents}
      />
    </>
  );
}
