import ClassroomClient from "./ClassroomClient";
import { CLASSROOM_QUESTIONS, CLASSROOM_EXAMS } from "../../lib/data/classroom";

export default function ClassroomPage() {
  return (
    // Hapus div relative z-10 dan SectionTitle di sini
    <ClassroomClient 
      classroomQuestions={CLASSROOM_QUESTIONS} 
      classroomExams={CLASSROOM_EXAMS} 
    />
  );
}