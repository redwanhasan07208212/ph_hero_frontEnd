import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

export default function AcademicSemester() {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is Academic Semester Component</h1>
    </div>
  );
}
