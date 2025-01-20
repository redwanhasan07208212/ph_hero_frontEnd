import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
// import PhInput from "../../../components/form/PhInput";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { semesterOptions } from "../../../constant/semester";
import { monthsOption } from "../../../constant/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };
  const academicSemesterSchema = z.object({
    name: z.string({ required_error: "Name Field is Required" }),
    year: z.string({ required_error: "Year Field is Required" }),
    startMonth: z.string({ required_error: "StartMonth Field is Required" }),
    endMonth: z.string({ required_error: "EndMonth Field is Required" }),
  });
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm
            onSubmit={onSubmit}
            resolver={zodResolver(academicSemesterSchema)}
          >
            {/* <PhInput type="text" name="name" label="Name" />
            <PhInput type="text" name="name" label="Year" /> */}
            <PhSelect label="Name" name="name" options={semesterOptions} />
            <PhSelect label="Year" name="year" options={yearOptions} />
            <PhSelect
              label="Start Month"
              name="startMonth"
              options={monthsOption}
            />
            <PhSelect
              label="End Month"
              name="endMonth"
              options={monthsOption}
            />
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Flex>
    </div>
  );
}
