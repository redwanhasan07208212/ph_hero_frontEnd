import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Button } from "antd";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <PhForm onSubmit={onSubmit}>
        <PhInput type="text" name="name" />
        <Button>Submit</Button>
      </PhForm>
    </div>
  );
}
